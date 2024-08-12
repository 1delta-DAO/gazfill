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
import type { OrderSettlementAbi, OrderSettlementAbiInterface } from "../OrderSettlementAbi";

const _abi = {
  "encoding": "1",
  "types": [
    {
      "typeId": 0,
      "type": "()",
      "components": [],
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
      "type": "enum Error",
      "components": [
        {
          "name": "OrderNotDefined",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "OrderReenter",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "TryToFillMoreThanRequired",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "SentAssetIdDoesNotMatchMakerToken",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "SentAssetAmountDoesNotMatchFillAmount",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "InsufficientTakerTokensReceivedFromCallback",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "OnlySettlementCanInteract",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "AlreadyIntitialized",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "MakerHasNotEnoughFunds",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 3,
      "type": "generic T",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 4,
      "type": "raw untyped ptr",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 5,
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
      "typeId": 6,
      "type": "struct Bytes",
      "components": [
        {
          "name": "buf",
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "len",
          "type": 13,
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
          "type": 13,
          "typeArguments": null
        },
        {
          "name": "taker_amount",
          "type": 13,
          "typeArguments": null
        },
        {
          "name": "maker",
          "type": 5,
          "typeArguments": null
        },
        {
          "name": "taker",
          "type": 5,
          "typeArguments": null
        },
        {
          "name": "nonce",
          "type": 12,
          "typeArguments": null
        },
        {
          "name": "expriy",
          "type": 13,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 8,
      "type": "struct OrderFillReturn",
      "components": [
        {
          "name": "taker_fill_amount",
          "type": 13,
          "typeArguments": null
        },
        {
          "name": "maker_fill_amount",
          "type": 13,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 9,
      "type": "struct RawBytes",
      "components": [
        {
          "name": "ptr",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "cap",
          "type": 13,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 10,
      "type": "struct RawVec",
      "components": [
        {
          "name": "ptr",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "cap",
          "type": 13,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        3
      ]
    },
    {
      "typeId": 11,
      "type": "struct Vec",
      "components": [
        {
          "name": "buf",
          "type": 10,
          "typeArguments": [
            {
              "name": "",
              "type": 3,
              "typeArguments": null
            }
          ]
        },
        {
          "name": "len",
          "type": 13,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        3
      ]
    },
    {
      "typeId": 12,
      "type": "u256",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 13,
      "type": "u64",
      "components": null,
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "order_hash",
          "type": 1,
          "typeArguments": null
        },
        {
          "name": "amount",
          "type": 13,
          "typeArguments": null
        },
        {
          "name": "receiver",
          "type": 5,
          "typeArguments": null
        },
        {
          "name": "callback_data",
          "type": 6,
          "typeArguments": null
        }
      ],
      "name": "fill_single",
      "output": {
        "name": "",
        "type": 8,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "allow",
          "arguments": [
            "deprecated"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "write",
            "read"
          ]
        },
        {
          "name": "payable",
          "arguments": []
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
          "name": "registry",
          "type": 5,
          "typeArguments": null
        }
      ],
      "name": "initialize",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "write"
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
          "name": "order_hashes",
          "type": 11,
          "typeArguments": [
            {
              "name": "",
              "type": 1,
              "typeArguments": null
            }
          ]
        },
        {
          "name": "amounts",
          "type": 11,
          "typeArguments": [
            {
              "name": "",
              "type": 13,
              "typeArguments": null
            }
          ]
        }
      ],
      "name": "register_filling",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "order_hashes",
          "type": 11,
          "typeArguments": [
            {
              "name": "",
              "type": 1,
              "typeArguments": null
            }
          ]
        },
        {
          "name": "amounts",
          "type": 11,
          "typeArguments": [
            {
              "name": "",
              "type": 13,
              "typeArguments": null
            }
          ]
        }
      ],
      "name": "verify_settlement",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "write"
          ]
        }
      ]
    }
  ],
  "loggedTypes": [
    {
      "logId": "15094927136620789666",
      "loggedType": {
        "name": "",
        "type": 2,
        "typeArguments": []
      }
    }
  ],
  "messagesTypes": [],
  "configurables": []
};

const _storageSlots: StorageSlot[] = [
  {
    "key": "296ba0fcd31342a245a27d09dd3a727390a108f362c4b7bf3137adc7e58aa7e1",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  }
];

export const OrderSettlementAbi__factory = {
  abi: _abi,

  storageSlots: _storageSlots,

  createInterface(): OrderSettlementAbiInterface {
    return new Interface(_abi) as unknown as OrderSettlementAbiInterface
  },

  connect(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider
  ): OrderSettlementAbi {
    return new Contract(id, _abi, accountOrProvider) as unknown as OrderSettlementAbi
  },

  async deployContract(
    bytecode: BytesLike,
    wallet: Account,
    options: DeployContractOptions = {}
  ): Promise<DeployContractResult<OrderSettlementAbi>> {
    const factory = new ContractFactory(bytecode, _abi, wallet);

    return factory.deployContract<OrderSettlementAbi>({
      storageSlots: _storageSlots,
      ...options,
    });
  },
}
