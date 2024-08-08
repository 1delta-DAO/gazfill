contract;

use std::{b512::B512, ecr::{ec_recover, ec_recover_address, EcRecoverError}};
use std::hash::*;
use std::bytes::Bytes;
use std::{
    bytes_conversions::b256::*,
    bytes_conversions::u256::*,
    bytes_conversions::u64::*,
    primitive_conversions::b256::*,
    primitive_conversions::u256::*,
    primitive_conversions::u64::*,
};

// The abi defines the blueprint for the contract.
abi OrderSettlement {
    #[storage(read)]
    fn get_count() -> u64;

    #[storage(write, read)]
    fn increment_counter(amount: u64) -> u64;

    #[storage(read)]
    fn recover_signer(signature: B512, msg_hash: b256) -> Address;

    #[storage(read)]
    fn generate_msg_hash(txt: str, account: Address) -> b256;

    #[storage(read)]
    fn get_order_hash(order: LimitOrder) -> b256;
}

pub struct OrderState {
    cancelled: bool,
    filled_amount: u64,
}

/// The storage variables for the contract.
/// In this case, there is only one variable called `counter` which is initialized to 0.
storage {
    counter: u64 = 0,
    // map order hash to state
    hash_to_state: StorageMap<b256, OrderState> = StorageMap {},
    nonces: StorageMap<Address, u256> = StorageMap {},
}

// order object
pub struct LimitOrder {
    maker_token: b256,
    taker_token: b256,
    maker_amount: u64,
    taker_amount: u64,
    maker: Address,
    taker: Address,
    nonce: u256,
    expriy: u64,
    traits: b256,
}

impl OrderSettlement for Contract {
    // The `get_count` function returns the current value of the counter.
    #[storage(read)]
    fn get_count() -> u64 {
        storage.counter.read()
    }

    // The `get_count` function returns the current value of the counter.
    #[storage(read)]
    fn get_order_hash(order: LimitOrder) -> b256 {
        let x: u64 = 342432;

        let mut encoded_order: Bytes = order.maker.bits().to_be_bytes();

        encoded_order.append(order.maker_token.to_be_bytes());
        encoded_order.append(order.taker_token.to_be_bytes());
        encoded_order.append(order.maker_amount.to_be_bytes());
        encoded_order.append(order.taker_amount.to_be_bytes());
        encoded_order.append(order.maker.bits().to_be_bytes());
        encoded_order.append(order.taker.bits().to_be_bytes());
        encoded_order.append(order.nonce.to_be_bytes());
        encoded_order.append(order.expriy.to_be_bytes());
        encoded_order.append(order.traits.to_be_bytes());

        // hash the order
        keccak256((encoded_order))
    }

    // The `increment_counter` function increments the counter by the given amount.
    #[storage(write, read)]
    fn increment_counter(amount: u64) -> u64 {
        let current = storage.counter.read();
        storage.counter.write(current + amount);
        storage.counter.read()
    }

    #[storage(read)]
    fn generate_msg_hash(txt: str, account: Address) -> b256 {
        let nonce = storage.nonces.get(account).read();
        keccak256((txt, nonce))
    }

    #[storage(read)]
    fn recover_signer(signature: B512, msg_hash: b256) -> Address {
        // A recovered Fuel address.
        let result_address: Result<Address, EcRecoverError> = ec_recover_address(signature, msg_hash);
        if let Ok(address) = result_address {
            return address;
        } else {
            revert(0);
        }
    }
}
