"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDL = void 0;
exports.IDL = {
    "version": "0.0.0",
    "name": "submarine_marketplace_contract",
    "instructions": [
        {
            "name": "list",
            "accounts": [
                {
                    "name": "pool",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "user",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "admin",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "mint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenFrom",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenTo",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "priceHigh",
                    "type": "u32"
                },
                {
                    "name": "priceLow",
                    "type": "u32"
                },
                {
                    "name": "bump",
                    "type": "u8"
                }
            ]
        },
        {
            "name": "updateList",
            "accounts": [
                {
                    "name": "pool",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "user",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "admin",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "mint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenAccount",
                    "isMut": true,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "priceHigh",
                    "type": "u32"
                },
                {
                    "name": "priceLow",
                    "type": "u32"
                }
            ]
        },
        {
            "name": "cancelList",
            "accounts": [
                {
                    "name": "pool",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "user",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "admin",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "mint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenFrom",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenTo",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": []
        },
        {
            "name": "buy",
            "accounts": [
                {
                    "name": "pool",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "buyer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "admin",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "seller",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "metadata",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenFrom",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenTo",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "method",
                    "type": "u8"
                }
            ]
        },
        {
            "name": "createBid",
            "accounts": [
                {
                    "name": "bid",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "pool",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "bidder",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "seller",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "vault",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "admin",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "mint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenAccount",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "priceHigh",
                    "type": "u32"
                },
                {
                    "name": "priceLow",
                    "type": "u32"
                },
                {
                    "name": "bump",
                    "type": "u8"
                }
            ]
        },
        {
            "name": "updateBid",
            "accounts": [
                {
                    "name": "bid",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "pool",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "bidder",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "seller",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "admin",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "vault",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "mint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenAccount",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "priceHigh",
                    "type": "u32"
                },
                {
                    "name": "priceLow",
                    "type": "u32"
                }
            ]
        },
        {
            "name": "cancelBid",
            "accounts": [
                {
                    "name": "bid",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "vault",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "bidder",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "admin",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": []
        },
        {
            "name": "acceptBid",
            "accounts": [
                {
                    "name": "pool",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "bid",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "vault",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "seller",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "bidder",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "admin",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "mint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "metadata",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenFrom",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenTo",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "method",
                    "type": "u8"
                }
            ]
        }
    ],
    "accounts": [
        {
            "name": "pool",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "user",
                        "type": "publicKey"
                    },
                    {
                        "name": "mint",
                        "type": "publicKey"
                    },
                    {
                        "name": "price",
                        "type": "u64"
                    },
                    {
                        "name": "startTime",
                        "type": "u32"
                    },
                    {
                        "name": "bump",
                        "type": "u8"
                    }
                ]
            }
        },
        {
            "name": "bid",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "bidder",
                        "type": "publicKey"
                    },
                    {
                        "name": "mint",
                        "type": "publicKey"
                    },
                    {
                        "name": "tokenAccount",
                        "type": "publicKey"
                    },
                    {
                        "name": "price",
                        "type": "u64"
                    },
                    {
                        "name": "bump",
                        "type": "u8"
                    }
                ]
            }
        }
    ],
    "types": [
        {
            "name": "CustomError",
            "type": {
                "kind": "enum",
                "variants": [
                    {
                        "name": "InvalidUser"
                    },
                    {
                        "name": "InvalidMetadata"
                    },
                    {
                        "name": "InvalidCreator"
                    },
                    {
                        "name": "WrongPrice"
                    }
                ]
            }
        }
    ]
};
