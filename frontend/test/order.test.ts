import { launchTestNode } from 'fuels/test-utils';
import { keccak256 } from 'fuels';
import { describe, test, expect } from 'vitest';
import { OrderSettlementFactory } from '../src/sway-api';
import type { LimitOrderInput } from '../src/sway-api/contracts/OrderSettlement';

describe('Order settlement', () => {
  test('packs and hashes an order consistently', async () => {
    using launched = await launchTestNode({
      contractsConfigs: [OrderSettlementFactory],
    });
    const {
      contracts: [contract],
      wallets: [user],
    } = launched;

    const order: LimitOrderInput = {
      maker_token: user.address.toB256(),
      taker_token: user.address.toB256(),
      maker_amount: 10_000,
      taker_amount: 10_000,
      maker: { bits: user.address.toB256() },
      taker: { bits: user.address.toB256() },
      nonce: 0,
      expriy: 0,
    };

    const { value: packed } = await contract.functions.pack_order(order).get();
    const { value: hash } = await contract.functions.get_order_hash(order).get();
    expect(hash).toBe(`0x${Buffer.from(keccak256(new Uint8Array(packed))).toString('hex')}`);
  });
});