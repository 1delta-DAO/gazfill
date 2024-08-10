library;
pub mod structs;

use std::{b512::B512,};
use std::bytes::Bytes;
use std::hash::*;
use structs::{LimitOrder, OrderFillReturn, OrderState};
use std::{
    bytes_conversions::b256::*,
    bytes_conversions::u256::*,
    bytes_conversions::u64::*,
    primitive_conversions::b256::*,
    primitive_conversions::u256::*,
    primitive_conversions::u64::*,
};

// The abi defines the blueprint for the contract.
abi FlashBookX {

    // #[storage(read)]
    // fn recover_signer(signature: B512, msg_hash: b256) -> Address;

    // #[storage(read)]
    // fn generate_msg_hash(txt: str, account: Address) -> b256;

    #[storage(read)]
    fn get_order_hash(order: LimitOrder) -> b256;
    #[storage(read)]
    fn pack_order(order: LimitOrder) -> Bytes;

    #[storage(write)]
    fn register_filling(order_hashes: Vec<b256>, amounts: Vec<u64>);

    #[storage(write)]
    fn verify_settlement(order_hashes: Vec<b256>, amounts: Vec<u64>);

    #[storage(write, read), payable]
    fn fill_single(
        order: LimitOrder,
        amount: u64,
        receiver: Address,
        callback_data: Bytes,
    ) -> OrderFillReturn;
}

// Flash callback to inject external liquidity
abi FlashCallback {
    #[storage(write, read), payable]
    fn flashCallback(
        taker_fill_amount: u64,
        maker_fill_amount: u64,
        maker: Address,
        callback_data: Bytes,
    );
}

pub fn compute_taker_fill_amount(order: LimitOrder, amount: u64) -> u64 {
    return order.maker_amount * amount / order.taker_amount;
}

pub fn compute_order_hash(order: LimitOrder) -> b256 {
    // hash the order
    keccak256((pack_order(order)))
}

pub fn pack_order(order: LimitOrder) -> Bytes {
    // Progressively append the order data as bytes
    let mut encoded_order: Bytes = order.maker_token.to_be_bytes();
    encoded_order.append(order.taker_token.to_be_bytes());
    encoded_order.append(order.maker_amount.to_be_bytes());
    encoded_order.append(order.taker_amount.to_be_bytes());
    encoded_order.append(order.maker.bits().to_be_bytes());
    encoded_order.append(order.taker.bits().to_be_bytes());
    encoded_order.append(order.nonce.to_be_bytes());
    encoded_order.append(order.expriy.to_be_bytes());
    encoded_order.append(order.traits.to_be_bytes());

    encoded_order
}
