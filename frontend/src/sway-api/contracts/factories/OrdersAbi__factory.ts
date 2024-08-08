/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.93.0
  Forc version: 0.62.0
  Fuel-Core version: 0.31.0
*/

import { Interface, Contract, ContractFactory } from "fuels";
import type { Provider, Account, AbstractAddress, BytesLike, DeployContractOptions, StorageSlot, DeployContractResult } from "fuels";
import type { OrdersAbi, OrdersAbiInterface } from "../OrdersAbi";

const _abi = {
  "encoding": "1",
  "types": [
    {
      "typeId": 0,
      "type": "[_; 2]",
      "components": [
        {
          "name": "__array_element",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 1,
      "type": "b256",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 2,
      "type": "raw untyped ptr",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 3,
      "type": "str",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 4,
      "type": "struct Address",
      "components": [
        {
          "name": "bits",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 5,
      "type": "struct B512",
      "components": [
        {
          "name": "bits",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 6,
      "type": "struct Bytes",
      "components": [
        {
          "name": "buf",
          "type": 8,
          "typeArguments": null
        },
        {
          "name": "len",
          "type": 10,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 7,
      "type": "struct LimitOrder",
      "components": [
        {
          "name": "maker_token",
          "type": 1,
          "typeArguments": null
        },
        {
          "name": "taker_token",
          "type": 1,
          "typeArguments": null
        },
        {
          "name": "maker_amount",
          "type": 10,
          "typeArguments": null
        },
        {
          "name": "taker_amount",
          "type": 10,
          "typeArguments": null
        },
        {
          "name": "maker",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "taker",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "nonce",
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "expriy",
          "type": 10,
          "typeArguments": null
        },
        {
          "name": "traits",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 8,
      "type": "struct RawBytes",
      "components": [
        {
          "name": "ptr",
          "type": 2,
          "typeArguments": null
        },
        {
          "name": "cap",
          "type": 10,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 9,
      "type": "u256",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 10,
      "type": "u64",
      "components": null,
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "txt",
          "type": 3,
          "typeArguments": null
        },
        {
          "name": "account",
          "type": 4,
          "typeArguments": null
        }
      ],
      "name": "generate_msg_hash",
      "output": {
        "name": "",
        "type": 1,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "get_count",
      "output": {
        "name": "",
        "type": 10,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "order",
          "type": 7,
          "typeArguments": null
        }
      ],
      "name": "get_order_hash",
      "output": {
        "name": "",
        "type": 1,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "amount",
          "type": 10,
          "typeArguments": null
        }
      ],
      "name": "increment_counter",
      "output": {
        "name": "",
        "type": 10,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "write",
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "order",
          "type": 7,
          "typeArguments": null
        }
      ],
      "name": "pack_order",
      "output": {
        "name": "",
        "type": 6,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "signature",
          "type": 5,
          "typeArguments": null
        },
        {
          "name": "msg_hash",
          "type": 1,
          "typeArguments": null
        }
      ],
      "name": "recover_signer",
      "output": {
        "name": "",
        "type": 4,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    }
  ],
  "loggedTypes": [],
  "messagesTypes": [],
  "configurables": []
};

const _storageSlots: StorageSlot[] = [
  {
    "key": "6e3c7b4f69bbff7132c3c3a62883a6868f47b0bc2a7f21605f29038cd9a5e05f",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  }
];

export const OrdersAbi__factory = {
  abi: _abi,

  storageSlots: _storageSlots,

  createInterface(): OrdersAbiInterface {
    return new Interface(_abi) as unknown as OrdersAbiInterface
  },

  connect(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider
  ): OrdersAbi {
    return new Contract(id, _abi, accountOrProvider) as unknown as OrdersAbi
  },

  async deployContract(
    bytecode: BytesLike,
    wallet: Account,
    options: DeployContractOptions = {}
  ): Promise<DeployContractResult<OrdersAbi>> {
    const factory = new ContractFactory(bytecode, _abi, wallet);

    return factory.deployContract<OrdersAbi>({
      storageSlots: _storageSlots,
      ...options,
    });
  },
}
