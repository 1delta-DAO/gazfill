import { launchTestNode } from 'fuels/test-utils';

import { describe, test, expect, beforeAll } from 'vitest';

/**
 * Imports for the contract factory and bytecode, so that we can use them in the test.
 *
 * Can't find these imports? Make sure you've run `fuels build` to generate these with typegen.
 */
import { OrdersAbi, OrdersAbi__factory } from '../src/sway-api';
import bytecode from '../src/sway-api/contracts/OrdersAbi.hex';
import { AbstractAddress, B256Address, concatBytes, keccak256, toBytes, WalletUnlocked } from 'fuels';
import { AddressInput, LimitOrderInput } from '@/sway-api/contracts/OrdersAbi';

/**
 * Contract Testing
 * 
 *
 * Tests for the contract program type within the TS SDK. Here we will test the deployment of
 * our contract, and the result of call it's functions.
 */
describe('Orders', () => {

  test('Deploy and Call', async () => {
    // First, we'll launch a test node, passing the contract factory and bytecode. This will deploy the contract
    // to our test node so we can test against it.
    using launched = await launchTestNode({
      // The test node will be killed automatically once the `launched` variable goes out of scope,
      // because we are instantiating it with the `using` keyword.
      contractsConfigs: [
        {
          deployer: OrdersAbi__factory,
          bytecode,
        },
      ],
    });

    // We can now destructure the contract from the launched object.
    const {
      contracts: [contract],
      wallets: [user]
    } = launched;

    const order: LimitOrderInput = {
      maker_token: user.address.toB256(),
      taker_token: user.address.toB256(),
      maker_amount: 10000,
      taker_amount: 10000,
      maker: { bits: user.address.toB256() },
      taker: { bits: user.address.toB256() },
      nonce: '0',
      expriy: '0',
      traits: user.address.toB256(),
    }

    // We can now call the contract functions and test the results. Lets assert the initial value of the counter.
    const { waitForResult: initWaitForResult } = await contract.functions.get_order_hash(order).call();
    const { value: hash } = await initWaitForResult();

    // We can now call the contract functions and test the results. Lets assert the initial value of the counter.
    const { waitForResult: initWaitForResultBytes } = await contract.functions.pack_order(order).call();
    const { value: orderBytes } = await initWaitForResultBytes();

    
    let data:Uint8Array;
    data = toBytes(order.maker_token)
    // toBytes([])

    data = concatBytes([
      toBytes(order.maker_token),
      toBytes(order.maker_token),
      toBytes(order.maker_amount, 8),
      toBytes(order.taker_amount, 8),
      toBytes(order.maker.bits),
      toBytes(order.taker.bits),
      toBytes(order.nonce, 32),
      toBytes(order.expriy, 8),
      toBytes(order.traits),
    ])

    console.log("orderBytes-actual", hex(orderBytes))
    console.log("orderBytes-manual", hex(data))
    console.log("------------------")
    console.log("hash      ", hash)
    console.log("reproduced", hex(keccak256(orderBytes as any)))
    console.log("off-chain ", hex(keccak256(data as any)))
    // expect(initValue.toNumber()).toBe(initialCount);

  });
});


function hex(arrayBuffer: any) {
  const byteToHex = [];

  for (let n = 0; n <= 0xff; ++n) {
    const hexOctet = n.toString(16).padStart(2, "0");
    byteToHex.push(hexOctet);
  }

  const buff = new Uint8Array(arrayBuffer);
  const hexOctets = []; // new Array(buff.length) is even faster (preallocates necessary array size), then use hexOctets[i] instead of .push()

  for (let i = 0; i < buff.length; ++i)
    hexOctets.push(byteToHex[buff[i]]);

  return "0x" + hexOctets.join("");
}