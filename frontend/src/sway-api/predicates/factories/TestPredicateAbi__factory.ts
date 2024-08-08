/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.93.0
  Forc version: 0.62.0
  Fuel-Core version: 0.31.0
*/

import {
  BigNumberish,
  BN,
  InputValue,
  Predicate,
  Provider,
} from 'fuels';

export type TestPredicateAbiConfigurables = Partial<{
}>;

export type TestPredicateAbiInputs = [password: BigNumberish];

const _abi = {
  "encoding": "1",
  "types": [
    {
      "typeId": 0,
      "type": "bool",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 1,
      "type": "u64",
      "components": null,
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "password",
          "type": 1,
          "typeArguments": null
        }
      ],
      "name": "main",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " This predicate checks if the given password is 1337."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " If it is, the predicate is 'unlocked' and the transaction is allowed to proceed."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " Otherwise, it is reverted."
          ]
        }
      ]
    }
  ],
  "loggedTypes": [],
  "messagesTypes": [],
  "configurables": []
}

const _bin = '0x1af030007400000200000000000001785dffc00110ffff001aec500091000080714000035fed000c5d4bb00c614122005047b0185e4500005043b0185c41000013410000764000135043b0185c410000724400021341044076400001360000006141224a5fed000e5043b0705047b01072480008284504805043b0207248000828411480504bb0287244000828490440740000086141220c5fed000d5043b0687244000828ed0440504bb02872400008284bb4005043b03072440008284124405047b03872480008284504805043b05872480008284114805d43b00b5d4100005fed000f5d43b00b724400081b441440104104405fed000b5d43b00f5047b0085fed00015043b04072480008284114805047b04872480008284504805043b05072480008284114805d43b00a1ae9000020f8330058fbe00250fbe004740000021a43d0002440000095000007960800001aec50001a43a0001a47e00072480539134104801af500001af9100098080000970000074af80000'

export const TestPredicateAbi__factory = {

  abi: _abi,
  bin: _bin,

  createInstance(provider: Provider, predicateData?: TestPredicateAbiInputs, configurables?: TestPredicateAbiConfigurables) {

    const predicate = new Predicate<TestPredicateAbiInputs>({
      bytecode: _bin,
      abi: _abi,
      provider,
      inputData: predicateData,
      configurableConstants: configurables,
    })

    return predicate;

  }

}
