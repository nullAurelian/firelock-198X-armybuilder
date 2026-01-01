/*
//the following is the json format for this list
{
    "name":<unit name:string>,
    "faction":[<unit faction:string>, ...], //A unit may be used by multiple factions
    "value": <point cost:int>,
    "stats": [<stat value>:string, ...], //Typical stats are Height, Spotting, Movement, Quality, Toughness, Command
    "type": {
        "super":[<parent type:string>, ...], //Example types: Infantry, Vehicle, Helicopter, Air
        "sub":[<subtype:string>,...] //Subtype includes unit model base size: Team, Squad, Wheeled, Tracked, Hover, Strider, CAS, CAP, 40x40, 40x60
    },
    "command": <command point generation:int>,
    "weapons": [
        {
            "weaponName":<weapon name:string>,
            "weaponAmmo":<weapon ammo:int>,
            "attacks": [
                {
                    "attackName":<ammo type name:string>, //This value can be empty if the weapon has no alternate ammo types
                    "attackTargets":<target selection:string>, //What this weapon attack can target
                    "attackRange":<attack range:string>, 
                    "attackDice":<dice rolls:string>, //How many dice are rolled for this attack
                    "attackAccuracy":<minimum hit value:string>, //the Accuracy value of the attack
                    "attackStrength":<hit strength:string>,
                    "attackTags":[<weapon keywords:string>,...]
                },
                ...
            ]
        },
        ...
    ],
    "tags":[
        {
            "rule":<keyword:string>, //Parent keyword, don't put the X,Y values in here
            "params":<parameters:string> //X,Y values for the keyword
        },
        ...
    ]
}
*/
const santalist = [
    {
            "name": "PEG.123-AC Graf",
            "faction": [
                "santagri"
            ],
            "value": 0,
            "stats": [
                "H1",
                "S32\"",
                "M36\"",
                "Q4",
                "T2/1/1",
                "C2"
            ],
            "type": {
                "super": [
                    "Helicopter"
                ],
                "sub": [
                    "40x60"
                ]
            },
            "command": 2,
            "weapons": [
                {
                    "weaponName": "MhM-76 .305 Minigun",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Lerna 15-lber Rocket Pod",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "120dB Megaphone Array",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "TACOM",
                    "params": ""
                },
                {
                    "rule": "Chaff-Flares",
                    "params": "1"
                },
                {
                    "rule": "NBC",
                    "params": ""
                },
                {
                    "rule": "Brigade",
                    "params": "4, 16\""
                }
            ]
        },
        {
            "name": "UNI.28-AC Don",
            "faction": [
                "santagri"
            ],
            "value": 25,
            "stats": [
                "H2",
                "S32\"",
                "M24\"",
                "Q5",
                "T4/3/3",
                "C3"
            ],
            "type": {
                "super": [
                    "Helicopter"
                ],
                "sub": [
                    "40x60"
                ]
            },
            "command": 3,
            "weapons": [
                {
                    "weaponName": "Allant 1.8-lber Rptary Cannon",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "SUR-4 127mm Air-to-Air Missile",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "120dB Megaphone Array",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "TACOM",
                    "params": ""
                },
                {
                    "rule": "NBC",
                    "params": ""
                },
                {
                    "rule": "Brigade",
                    "params": "3, 12\""
                },
                {
                    "rule": "Leviathan",
                    "params": "2"
                }
            ]
        },
        {
            "name": "VBD.127-DB Castellan",
            "faction": [
                "santagri"
            ],
            "value": 40,
            "stats": [
                "H2",
                "S32\"",
                "M8\"",
                "Q4",
                "T16/7/5",
                "C4"
            ],
            "type": {
                "super": [
                    "Vehicle"
                ],
                "sub": [
                    "Tracked",
                    "40x60"
                ]
            },
            "command": 4,
            "weapons": [
                {
                    "weaponName": "MhL-42 .305 MG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Sb.98 55-lber Gun",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Lerna 15-lber Rocket Pod",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "TACOM",
                    "params": ""
                },
                {
                    "rule": "NBC",
                    "params": ""
                },
                {
                    "rule": "Brigade",
                    "params": "2, 8\""
                },
                {
                    "rule": "Whenever this unit scores a kill on an enemy Vehicle, it may Rally a friendly unit within 8\".",
                    "params": ""
                }
            ]
        },
        {
            "name": "Santagrine Militia",
            "faction": [
                "santagri"
            ],
            "value": 5,
            "stats": [
                "H1",
                "S16\"",
                "M4\"",
                "Q1",
                "T1/1/1"
            ],
            "type": {
                "super": [
                    "Infantry"
                ],
                "sub": [
                    "Squad",
                    "40x40"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "Bolt-Action Rifle, various make & caliber",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "NBC",
                    "params": ""
                },
                {
                    "rule": "Tercio",
                    "params": ""
                }
            ]
        },
        {
            "name": "Mounted Serjeants",
            "faction": [
                "santagri"
            ],
            "value": 10,
            "stats": [
                "H2",
                "S24\"",
                "M8\"",
                "Q2",
                "T1/1/1-"
            ],
            "type": {
                "super": [
                    "Infantry"
                ],
                "sub": [
                    "Squad",
                    "40x40"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "Cavalry Carbine, local manufacture",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "18-oz Lance Mine",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Heirloom Backsword",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "Fearless",
                    "params": ""
                },
                {
                    "rule": "NBC",
                    "params": ""
                }
            ]
        },
        {
            "name": "Yeoman Paras",
            "faction": [
                "santagri"
            ],
            "value": 15,
            "stats": [
                "H1",
                "S16\"",
                "M5\"",
                "Q3",
                "T1/1-/1-"
            ],
            "type": {
                "super": [
                    "Infantry"
                ],
                "sub": [
                    "Squad",
                    "40x40"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "MhL-48 .455 SMG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Hi-25 2.5-lber Spigot Mortar",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "Assault Specialist",
                    "params": ""
                },
                {
                    "rule": "Fearless",
                    "params": ""
                },
                {
                    "rule": "NBC",
                    "params": ""
                },
                {
                    "rule": "Amphibious",
                    "params": ""
                },
                {
                    "rule": "Tercio",
                    "params": ""
                }
            ]
        },
        {
            "name": "Volley Team",
            "faction": [
                "santagri"
            ],
            "value": 5,
            "stats": [
                "H1",
                "S16\"",
                "M4\"",
                "Q1",
                "T1-/1-/1-"
            ],
            "type": {
                "super": [
                    "Infantry"
                ],
                "sub": [
                    "Team",
                    "40x40"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "Bolt-Action Rifle, various make & caliber",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "\"Tricorne\" Triple RPG, improvized",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "NBC",
                    "params": ""
                },
                {
                    "rule": "Tercio",
                    "params": ""
                }
            ]
        },
        {
            "name": "Light Gun Team",
            "faction": [
                "santagri"
            ],
            "value": 5,
            "stats": [
                "H1",
                "S24\"",
                "M4\"",
                "Q1",
                "T1/1-/1-"
            ],
            "type": {
                "super": [
                    "Infantry"
                ],
                "sub": [
                    "Team",
                    "40x40"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "Rh-49 .305 Self-cycling Rifle",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Sb.1 1-lber Gun",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "NBC",
                    "params": ""
                }
            ]
        },
        {
            "name": "Grenadier Team",
            "faction": [
                "santagri"
            ],
            "value": 10,
            "stats": [
                "H1",
                "S16\"",
                "M4\"",
                "Q2",
                "T2/1+/1+"
            ],
            "type": {
                "super": [
                    "Infantry"
                ],
                "sub": [
                    "Team",
                    "40x40"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "Engram .32 Machine Pistol",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "S-5 40mm Grenade Pistol, sawn-off",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "NBC",
                    "params": ""
                },
                {
                    "rule": "Tercio",
                    "params": ""
                }
            ]
        },
        {
            "name": "Machine Gun Team",
            "faction": [
                "santagri"
            ],
            "value": 10,
            "stats": [
                "H1",
                "S16\"",
                "M4\"",
                "Q2",
                "T1/1-/1-"
            ],
            "type": {
                "super": [
                    "Infantry"
                ],
                "sub": [
                    "Team",
                    "40x40"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "Rh-49 .305 Self-cycling Rifle",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Depredador Cortes .455 MG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "NBC",
                    "params": ""
                },
                {
                    "rule": "Tercio",
                    "params": ""
                }
            ]
        },
        {
            "name": "Bombard Team",
            "faction": [
                "santagri"
            ],
            "value": 15,
            "stats": [
                "H1",
                "S24\"",
                "M4\"",
                "Q2",
                "T1-/1-/1-"
            ],
            "type": {
                "super": [
                    "Infantry"
                ],
                "sub": [
                    "Team",
                    "40x40"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "Rh-49 .305 Self-cycling Rifle",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Hi-14 Three-Quarters Bombard",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "NBC",
                    "params": ""
                }
            ]
        },
        {
            "name": "Groundsmen",
            "faction": [
                "santagri"
            ],
            "value": 10,
            "stats": [
                "H1",
                "S32\"",
                "M5\"",
                "Q3",
                "T1/1-/1-"
            ],
            "type": {
                "super": [
                    "Infantry"
                ],
                "sub": [
                    "Team",
                    "40x40"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "SMHH Combination Gun, .276 Barrel",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "12-gauge Slug Barrel",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "Fearless",
                    "params": ""
                },
                {
                    "rule": "NBC",
                    "params": ""
                },
                {
                    "rule": "Paradrop",
                    "params": ""
                },
                {
                    "rule": "Sense",
                    "params": "6\""
                },
                {
                    "rule": "Tercio",
                    "params": ""
                }
            ]
        },
        {
            "name": "Pages",
            "faction": [
                "santagri"
            ],
            "value": 10,
            "stats": [
                "H1",
                "S32\"",
                "M5\"",
                "Q2",
                "T1/1-/1-"
            ],
            "type": {
                "super": [
                    "Infantry"
                ],
                "sub": [
                    "Team",
                    "40x40"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "AFME-42/58 .439 Automatic Rifle",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Coincidence Rangefinder, craft-produced",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "Fearless",
                    "params": ""
                },
                {
                    "rule": "NBC",
                    "params": ""
                },
                {
                    "rule": "This unit may activate to call a plane mission during the Support Phase, replace a friendly TACOM's turn.",
                    "params": ""
                }
            ]
        },
        {
            "name": "Black Fangs",
            "faction": [
                "santagri"
            ],
            "value": 20,
            "stats": [
                "H1",
                "S24\"",
                "M4\"",
                "Q4",
                "T2/1+/1+"
            ],
            "type": {
                "super": [
                    "Infantry"
                ],
                "sub": [
                    "Team",
                    "40x40"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "LMG, various make and caliber",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Lerna 15-lber Rocket Pod",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "Assault Specialist",
                    "params": ""
                },
                {
                    "rule": "Fearless",
                    "params": ""
                },
                {
                    "rule": "NBC",
                    "params": ""
                }
            ]
        },
        {
            "name": "Atomic Pilgrims",
            "faction": [
                "santagri"
            ],
            "value": 60,
            "stats": [
                "H1",
                "S24\"",
                "M4\"",
                "Q4",
                "T1-/1-/1-"
            ],
            "type": {
                "super": [
                    "Infantry"
                ],
                "sub": [
                    "Team",
                    "40x40"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "Engram .32 Machine Pistol",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "\"Violet Mace\" Recoilless Gun, Nuclear",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "Fearless",
                    "params": ""
                },
                {
                    "rule": "NBC",
                    "params": ""
                }
            ]
        },
        {
            "name": "Steam Tractor",
            "faction": [
                "santagri"
            ],
            "value": 5,
            "stats": [
                "H2",
                "S16\"",
                "M6\"",
                "Q2",
                "T4/4/3"
            ],
            "type": {
                "super": [
                    "Vehicle"
                ],
                "sub": [
                    "Wheeled",
                    "40x60"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "MhL-42 .305 MG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "PC",
                    "params": "1, Any"
                },
                {
                    "rule": "NBC",
                    "params": ""
                },
                {
                    "rule": "Tow",
                    "params": "2"
                }
            ]
        },
        {
            "name": "War Wagon",
            "faction": [
                "santagri"
            ],
            "value": 5,
            "stats": [
                "H2",
                "S8\"",
                "M0\"",
                "Q1",
                "T3/3/3"
            ],
            "type": {
                "super": [
                    "Vehicle"
                ],
                "sub": [
                    "Carriage",
                    "40x60"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "Engram .32 Snub Nose, driver issue",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "NBC",
                    "params": ""
                },
                {
                    "rule": "PC",
                    "params": "4, Any"
                },
                {
                    "rule": "Resupply",
                    "params": "2"
                },
                {
                    "rule": "Tow",
                    "params": "Infinite"
                }
            ]
        },
        {
            "name": "CB.76 Misericorde",
            "faction": [
                "santagri"
            ],
            "value": 15,
            "stats": [
                "H1",
                "S24\"",
                "M8\"",
                "Q3",
                "T5/4/2"
            ],
            "type": {
                "super": [
                    "Vehicle"
                ],
                "sub": [
                    "Tracked",
                    "40x40"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "MhL-42 .305 MG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Sb.21 20-lber Mountain Gun",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "NBC",
                    "params": ""
                },
                {
                    "rule": "Paradrop",
                    "params": ""
                },
                {
                    "rule": "Tow",
                    "params": "2"
                },
                {
                    "rule": "May fire while carrying desanting infantry and can carry PC(3) desants instead of PC(2)",
                    "params": ""
                }
            ]
        },
        {
            "name": "Exto",
            "faction": [
                "santagri"
            ],
            "value": 25,
            "stats": [
                "H2",
                "S32\"",
                "M8\"",
                "Q2",
                "T4/4/4"
            ],
            "type": {
                "super": [
                    "Vehicle"
                ],
                "sub": [
                    "Tracked",
                    "40x60"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "Rh-49 .305 Self-cycling Rifle",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "SAE 2-lber AA Gun",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "Leviathan",
                    "params": "2"
                },
                {
                    "rule": "NBC",
                    "params": ""
                },
                {
                    "rule": "PC",
                    "params": "6, Side"
                },
                {
                    "rule": "Resupply",
                    "params": "4"
                },
                {
                    "rule": "Tow",
                    "params": "2"
                }
            ]
        },
        {
            "name": "Hexamer",
            "faction": [
                "santagri"
            ],
            "value": 10,
            "stats": [
                "H2",
                "S16\"",
                "M6\"",
                "Q22",
                "T4/4/3"
            ],
            "type": {
                "super": [
                    "Vehicle"
                ],
                "sub": [
                    "Tracked",
                    "40x60"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "MhL-42 .305 MG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Sb.1 1-lber Gun",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "NBC",
                    "params": ""
                },
                {
                    "rule": "Tow",
                    "params": "2"
                }
            ]
        },
        {
            "name": "VC.2 Veldjen",
            "faction": [
                "santagri"
            ],
            "value": 20,
            "stats": [
                "H2",
                "S32\"",
                "M6\"",
                "Q3",
                "T8/6/5"
            ],
            "type": {
                "super": [
                    "Vehicle"
                ],
                "sub": [
                    "Tracked",
                    "40x60"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "MhL-42 .305 MG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "MhL-60 .50 HMG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "14-lber Gun, various make",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "NBC",
                    "params": ""
                },
                {
                    "rule": "Tow",
                    "params": "2"
                }
            ]
        },
        {
            "name": "VC.44R Whirlwind",
            "faction": [
                "santagri"
            ],
            "value": 35,
            "stats": [
                "H2",
                "S32\"",
                "M10\"",
                "Q2",
                "T12/6/5"
            ],
            "type": {
                "super": [
                    "Vehicle"
                ],
                "sub": [
                    "Tracked",
                    "40x60"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "MhL-42 .305 MG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "24-lber Gun, local manufacture",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "NBC",
                    "params": ""
                },
                {
                    "rule": "Tow",
                    "params": "2"
                },
                {
                    "rule": "This unit pays an additional 1\" when rotating left. When rotating right, the rotation is free up to 180 degrees.",
                    "params": ""
                }
            ]
        },
        {
            "name": "VE.378 Cataphract",
            "faction": [
                "santagri"
            ],
            "value": 40,
            "stats": [
                "H2",
                "S32\"",
                "M6\"",
                "Q2",
                "T16/10/6"
            ],
            "type": {
                "super": [
                    "Vehicle"
                ],
                "sub": [
                    "Tracked",
                    "40x60"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "MhL-60 .50 HMG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Sb.1 1-lber Gun",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Sb.92 55-lber Gun",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "NBC",
                    "params": ""
                }
            ]
        },
        {
            "name": "Vauban",
            "faction": [
                "santagri"
            ],
            "value": 60,
            "stats": [
                "H2",
                "S32\"",
                "M6\"",
                "Q4",
                "T6/6/4"
            ],
            "type": {
                "super": [
                    "Vehicle"
                ],
                "sub": [
                    "Tracked",
                    "40x60"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "GAP-61 .61 CWIS",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "SAP 14-lber Naval Gun",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "VIM-4 \"Copa\" 90-lber VLS Missiles",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "Leviathan",
                    "params": "3"
                },
                {
                    "rule": "NBC",
                    "params": ""
                },
                {
                    "rule": "Takes pin as if it were a Tercio.",
                    "params": ""
                },
                {
                    "rule": "May desant at PC(4).",
                    "params": ""
                },
                {
                    "rule": "If the CWIS has not been destroyed this unit gains APS(6+, Infinite). This APS has infinite ammo but may only trigger once per round and only against Guided Missiles.",
                    "params": ""
                }
            ]
        },
        {
            "name": "Field Gun",
            "faction": [
                "santagri"
            ],
            "value": 10,
            "stats": [
                "H1",
                "S32\"",
                "M3\"",
                "Q2",
                "T2/1/1"
            ],
            "type": {
                "super": [
                    "Vehicle"
                ],
                "sub": [
                    "Carriage",
                    "40x40"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "Bolt Action Rifle, various make & caliber",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Field Gun, various make & caliber",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "NBC",
                    "params": ""
                }
            ]
        },
        {
            "name": "SB.15 1-lber Pom-Pom",
            "faction": [
                "santagri"
            ],
            "value": 10,
            "stats": [
                "H1",
                "S32\"",
                "M3\"",
                "Q2",
                "T2/1/1"
            ],
            "type": {
                "super": [
                    "Vehicle"
                ],
                "sub": [
                    "Carriage",
                    "40x40"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "Bolt Action Rifle, various make & caliber",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Sb.15 1-lber Autocannon",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "NBC",
                    "params": ""
                }
            ]
        },
        {
            "name": "CB.61 Galgo",
            "faction": [
                "santagri"
            ],
            "value": 15,
            "stats": [
                "H2",
                "S32\"",
                "M10\"",
                "Q3",
                "T4/3/2"
            ],
            "type": {
                "super": [
                    "Vehicle"
                ],
                "sub": [
                    "Wheeled",
                    "40x60"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "MhL-77 .61 HMG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "No.20 4-lb. Smoke Launchers",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "NBC",
                    "params": ""
                },
                {
                    "rule": "Paradrop",
                    "params": ""
                }
            ]
        },
        {
            "name": "SB.18 22-lber Retumbo",
            "faction": [
                "santagri"
            ],
            "value": 20,
            "stats": [
                "H2",
                "S32\"",
                "M2\"",
                "Q2",
                "T2/1/1"
            ],
            "type": {
                "super": [
                    "Vehicle"
                ],
                "sub": [
                    "Carriage",
                    "40x60"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "Bolt Action Rifle, various make & caliber",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Sb.18 22-lber Anti-Aircraft Gun",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "NBC",
                    "params": ""
                }
            ]
        },
        {
            "name": "OSM Mogul",
            "faction": [
                "santagri"
            ],
            "value": 40,
            "stats": [
                "H2",
                "S32\"",
                "M6\"",
                "Q2",
                "T18/12/8"
            ],
            "type": {
                "super": [
                    "Vehicle"
                ],
                "sub": [
                    "Tracked",
                    "40x60"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "MhL-42 .305 MG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "S-10 250-lber Siege Gun",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "NBC",
                    "params": ""
                },
                {
                    "rule": "Tow",
                    "params": "2"
                }
            ]
        },
        {
            "name": "LDAL Pietro",
            "faction": [
                "santagri"
            ],
            "value": 10,
            "stats": [
                "H2",
                "S16\"",
                "M8\"",
                "Q1",
                "T5/4/1+"
            ],
            "type": {
                "super": [
                    "Vehicle"
                ],
                "sub": [
                    "Watercraft",
                    "40x60"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "Sb.1 1-lber Dual Guns",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "PC",
                    "params": "8, Front"
                },
                {
                    "rule": "NBC",
                    "params": ""
                }
            ]
        },
        {
            "name": "PEG.60-11 Squire",
            "faction": [
                "santagri"
            ],
            "value": 20,
            "stats": [
                "H2",
                "S32\"",
                "M32\"",
                "Q3",
                "T1+/1+/1+"
            ],
            "type": {
                "super": [
                    "Helicopter"
                ],
                "sub": [
                    "40x60"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "MhL-42 .305 MG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Lerna 15-lber Rocket Pod",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "PC",
                    "params": "2, Rear"
                },
                {
                    "rule": "NBC",
                    "params": ""
                }
            ]
        },
        {
            "name": "PEG.80-01A Sambuca",
            "faction": [
                "santagri"
            ],
            "value": 25,
            "stats": [
                "H2",
                "S32\"",
                "M24\"",
                "Q3",
                "T3/3/3"
            ],
            "type": {
                "super": [
                    "Helicopter"
                ],
                "sub": [
                    "40x60"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "MhL-60 .50 HMG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Lerna 15-lber Rocket Pod",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "Chaff-Flares",
                    "params": "1"
                },
                {
                    "rule": "PC",
                    "params": "6, Rear"
                },
                {
                    "rule": "NBC",
                    "params": ""
                },
                {
                    "rule": "Tow",
                    "params": "2"
                }
            ]
        },
        {
            "name": "PEG.123-00 Knight-Errant",
            "faction": [
                "santagri"
            ],
            "value": 30,
            "stats": [
                "H1",
                "S32\"",
                "M36\"",
                "Q3",
                "T2/1/1"
            ],
            "type": {
                "super": [
                    "Helicopter"
                ],
                "sub": [
                    "40x60"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "SOAA Target Designator",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Chilon 30-lber High-Velocity Missile",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "Chaff-Flares",
                    "params": "2"
                },
                {
                    "rule": "NBC",
                    "params": ""
                }
            ]
        },
        {
            "name": "UNI.28-05 Conquistador",
            "faction": [
                "santagri"
            ],
            "value": 40,
            "stats": [
                "H2",
                "S32\"",
                "M24\"",
                "Q3",
                "T3/3/3"
            ],
            "type": {
                "super": [
                    "Helicopter"
                ],
                "sub": [
                    "40x60"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "Sb.38 20mm Autocannon",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Sarvara 46-lber Dual Rocket Pod",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Lerna 15-lber Rocket Pod",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "Leviathan",
                    "params": "2"
                },
                {
                    "rule": "NBC",
                    "params": ""
                }
            ]
        },
        {
            "name": "UNI.28-03 Man-At-Arms",
            "faction": [
                "santagri"
            ],
            "value": 50,
            "stats": [
                "H2",
                "S32\"",
                "M24\"",
                "Q4",
                "T4/3/3"
            ],
            "type": {
                "super": [
                    "Helicopter"
                ],
                "sub": [
                    "40x60"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "Allant 1.8-lber Rotary Cannon",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "9GR1M 125mm ATGM",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Lerna 15-lber Rocket Pod",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "Leviathan",
                    "params": "2"
                },
                {
                    "rule": "NBC",
                    "params": ""
                }
            ]
        },
        {
            "name": "UNI.28-08 Lancer",
            "faction": [
                "santagri"
            ],
            "value": 60,
            "stats": [
                "H2",
                "S32\"",
                "M24\"",
                "Q4",
                "T4/4/3"
            ],
            "type": {
                "super": [
                    "Helicopter"
                ],
                "sub": [
                    "40x60"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "SDV 6-lber High-Velocity Autocannon",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Lerna 15-lber Rocket Pod",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Silene 285-lber Dual WP Rocket Pod",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "Leviathan",
                    "params": "2"
                },
                {
                    "rule": "NBC",
                    "params": ""
                }
            ]
        },
        {
            "name": "MC.17-86 Spada-Fresco",
            "faction": [
                "santagri"
            ],
            "value": 20,
            "stats": [
                "H*",
                "S*\"",
                "M16\"",
                "Q3",
                "T2",
                "E2"
            ],
            "type": {
                "super": [
                    "Aircraft"
                ],
                "sub": [
                    "CAP",
                    "40x60"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "Sb.38 20mm Autocannons, dual",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "500-lber HE Bombs, various models",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "Afterburner",
                    "params": ""
                }
            ]
        },
        {
            "name": "MC.20-01C Rocinante",
            "faction": [
                "santagri"
            ],
            "value": 30,
            "stats": [
                "H*",
                "S*\"",
                "M18\"",
                "Q3",
                "T3",
                "E3"
            ],
            "type": {
                "super": [
                    "Aircraft"
                ],
                "sub": [
                    "CAP",
                    "40x60"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "Allant 1.8-lber Rotary Cannon",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Lerna 15-lber Rocket Pod",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "SUR-4 127mm Infrared AAM",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "Afterburner",
                    "params": ""
                },
                {
                    "rule": "Chaff-Flares",
                    "params": "1"
                },
                {
                    "rule": "Flower of the Atom",
                    "params": ""
                }
            ]
        },
        {
            "name": "DC/B.2K Jonquil",
            "faction": [
                "santagri"
            ],
            "value": 30,
            "stats": [
                "H*",
                "S*\"",
                "M14\"",
                "Q3",
                "T4",
                "E1"
            ],
            "type": {
                "super": [
                    "Aircraft"
                ],
                "sub": [
                    "CAP",
                    "40x60"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "Rb.12 9-lber Air-to-Air Rockets",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Mf.59 60-lber Semi-Active AAM",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "9GR3 275mm AGM",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "Afterburner",
                    "params": ""
                },
                {
                    "rule": "Flower of the Atom",
                    "params": ""
                }
            ]
        },
        {
            "name": "DC.4E Bavieca",
            "faction": [
                "santagri"
            ],
            "value": 40,
            "stats": [
                "H*",
                "S*\"",
                "M20\"",
                "Q4",
                "T3",
                "E2"
            ],
            "type": {
                "super": [
                    "Aircraft"
                ],
                "sub": [
                    "CAP",
                    "40x60"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "Allant 1.8-lber Rotary Cannon, modified",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Breakspear 60-lber Semi-Active AAM",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "SUR-4 127mm IR AAM, modified",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "Afterburner",
                    "params": ""
                },
                {
                    "rule": "Chaff-Flares",
                    "params": "2"
                },
                {
                    "rule": "Flower of the Atom",
                    "params": ""
                }
            ]
        }
]

export default santalist