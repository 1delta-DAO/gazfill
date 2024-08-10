contract;

use order_utils::{
    compute_order_hash,
    compute_taker_fill_amount,
    FlashBookX,
    FlashCallback,
    pack_order,
    structs::{
        LimitOrder,
        OrderFillReturn,
        OrderState,
    },
};

use std::{b512::B512, ecr::{ec_recover, ec_recover_address, EcRecoverError}};
use std::hash::*;
use std::bytes::Bytes;
use std::{asset::transfer, call_frames::msg_asset_id, context::msg_amount};
use std::storage::storage_vec::*;
use std::{
    bytes_conversions::b256::*,
    bytes_conversions::u256::*,
    bytes_conversions::u64::*,
    primitive_conversions::b256::*,
    primitive_conversions::u256::*,
    primitive_conversions::u64::*,
};

/// The storage variables for the contract.
/// In this case, there is only one variable called `counter` which is initialized to 0.
storage {
    counter: u64 = 0,
    // map order hash to state
    hash_to_state: StorageMap<b256, OrderState> = StorageMap {},
    // 
    market_to_price_to_orders: StorageMap<b256, StorageMap<b256, u64>> = StorageMap {},
    nonces: StorageMap<Address, u256> = StorageMap {},
    registered_orders: StorageVec<b256> = StorageVec {},
    locked_orders: StorageMap<b256, bool> = StorageMap {},
}

impl FlashBookX for Contract {
    // fn get_fill_amount(order: LimitOrder, amount: u64, maker:bool)-> u64 {
    //     // let taker_amount = maker ? order.maker_amount  : order.maker_amount;
    //     return amount;  
    // }
 
   #[storage(write)]
    fn register_filling(order_hashes: Vec<b256>, amounts: Vec<u64>) {}

    #[storage(write)]
    fn verify_settlement(order_hashes: Vec<b256>, amounts: Vec<u64>) {}

    #[allow(deprecated)]
    #[storage(write, read), payable]
    fn fill_single(
        order: LimitOrder,
        amount: u64,
        receiver: Address,
        callback_data: Bytes,
    ) -> OrderFillReturn {
        let hash = compute_order_hash(order);
        // prevent reenter
        if storage.locked_orders.get(hash).try_read().unwrap_or(false)
        {
            revert(0)
        }
        storage.locked_orders.insert(hash, true);

        let mut order_state = storage.hash_to_state.get(hash).read();

        // compute fill amounts
        let taker_fill_amount = (order.taker_amount - order_state.filled_amount);
        let maker_fill_amount = taker_fill_amount * order.maker_amount / order.taker_amount;

        // maker_token::maker -> receiver
        transfer(
            Identity::Address(receiver),
            AssetId::from(order.maker_token),
            taker_fill_amount,
        );

        // the callback allows using this function
        // without sending funds
        if callback_data.len() > 0 {
            abi(FlashCallback, receiver
                .bits())
                .flashCallback(
                    taker_fill_amount,
                    maker_fill_amount,
                    order.maker,
                    callback_data,
                );
        } else {
            // if no callback is provided, revert
            //if insufficient funds were sent
            if msg_asset_id().bits() != order.taker_token {
                revert(0)
            }
            if msg_amount() != amount {
                revert(0)
            }
        }

        // taker_tokjen::this -> maker
        transfer(
            Identity::Address(order.maker),
            AssetId::from(order.taker_token),
            taker_fill_amount,
        );

        // register filled amount and store the object back
        order_state.filled_amount = order_state.filled_amount + taker_fill_amount;
        storage.hash_to_state.insert(hash, order_state);

        // unlock order
        storage.locked_orders.insert(hash, false);

        return OrderFillReturn {
            taker_fill_amount,
            maker_fill_amount,
        };
    }

    // The `get_count` function returns the current value of the counter.
    #[storage(read)]
    fn get_order_hash(order: LimitOrder) -> b256 {
        // hash the order
        compute_order_hash(order)
    }

    #[storage(read)]
    fn pack_order(order: LimitOrder) -> Bytes {
        pack_order(order)
    }

    // #[storage(read)]
    // fn generate_msg_hash(txt: str, account: Address) -> b256 {
    //     let nonce = storage.nonces.get(account).read();
    //     keccak256((txt, nonce))
    // }

    // #[storage(read)]
    // fn recover_signer(signature: B512, msg_hash: b256) -> Address {
    //     // A recovered Fuel address.
    //     let result_address: Result<Address, EcRecoverError> = ec_recover_address(signature, msg_hash);
    //     if let Ok(address) = result_address {
    //         return address;
    //     } else {
    //         revert(0);
    //     }
    // }
}
