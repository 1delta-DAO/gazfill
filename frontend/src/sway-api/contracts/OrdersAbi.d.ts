/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.93.0
  Forc version: 0.62.0
  Fuel-Core version: 0.31.0
*/

import type {
  BigNumberish,
  BN,
  Bytes,
  BytesLike,
  Contract,
  DecodedValue,
  FunctionFragment,
  Interface,
  InvokeFunction,
} from 'fuels';

import type { Enum, Vec } from "./common";

export enum ErrorInput { OrderNotDefined = 'OrderNotDefined', OrderReenter = 'OrderReenter', TryToFillMoreThanRequired = 'TryToFillMoreThanRequired', SentAssetIdDoesNotMatchMakerToken = 'SentAssetIdDoesNotMatchMakerToken', SentAssetAmountDoesNotMatchFillAmount = 'SentAssetAmountDoesNotMatchFillAmount', InsufficientTakerTokensReceivedFromCallback = 'InsufficientTakerTokensReceivedFromCallback', OnlySettlementCanInteract = 'OnlySettlementCanInteract', AlreadyIntitialized = 'AlreadyIntitialized', MakerHasNotEnoughFunds = 'MakerHasNotEnoughFunds' };
export enum ErrorOutput { OrderNotDefined = 'OrderNotDefined', OrderReenter = 'OrderReenter', TryToFillMoreThanRequired = 'TryToFillMoreThanRequired', SentAssetIdDoesNotMatchMakerToken = 'SentAssetIdDoesNotMatchMakerToken', SentAssetAmountDoesNotMatchFillAmount = 'SentAssetAmountDoesNotMatchFillAmount', InsufficientTakerTokensReceivedFromCallback = 'InsufficientTakerTokensReceivedFromCallback', OnlySettlementCanInteract = 'OnlySettlementCanInteract', AlreadyIntitialized = 'AlreadyIntitialized', MakerHasNotEnoughFunds = 'MakerHasNotEnoughFunds' };

export type AddressInput = { bits: string };
export type AddressOutput = AddressInput;
export type LimitOrderInput = { maker_token: string, taker_token: string, maker_amount: BigNumberish, taker_amount: BigNumberish, maker: AddressInput, taker: AddressInput, nonce: BigNumberish, expriy: BigNumberish };
export type LimitOrderOutput = { maker_token: string, taker_token: string, maker_amount: BN, taker_amount: BN, maker: AddressOutput, taker: AddressOutput, nonce: BN, expriy: BN };
export type OrderFillReturnInput = { taker_fill_amount: BigNumberish, maker_fill_amount: BigNumberish };
export type OrderFillReturnOutput = { taker_fill_amount: BN, maker_fill_amount: BN };

export interface OrdersAbiInterface extends Interface {
  functions: {
    fill_single: FunctionFragment;
    get_order_hash: FunctionFragment;
    initialize: FunctionFragment;
    pack_order: FunctionFragment;
    register_filling: FunctionFragment;
    verify_settlement: FunctionFragment;
  };
}

export class OrdersAbi extends Contract {
  interface: OrdersAbiInterface;
  functions: {
    fill_single: InvokeFunction<[order_hash: string, amount: BigNumberish, receiver: AddressInput, callback_data: Bytes], OrderFillReturnOutput>;
    get_order_hash: InvokeFunction<[order: LimitOrderInput], string>;
    initialize: InvokeFunction<[registry: AddressInput], void>;
    pack_order: InvokeFunction<[order: LimitOrderInput], Bytes>;
    register_filling: InvokeFunction<[order_hashes: Vec<string>, amounts: Vec<BigNumberish>], void>;
    verify_settlement: InvokeFunction<[order_hashes: Vec<string>, amounts: Vec<BigNumberish>], void>;
  };
}
