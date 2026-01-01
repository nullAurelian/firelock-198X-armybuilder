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
const rygolist = [
    {
            "name": "Node Team (Additional)",
            "faction": [
                "rygolic"
            ],
            "value": 20,
            "stats": [
                "H1",
                "S24\"",
                "M5\"",
                "Q3",
                "T1+/1/1",
                "C2"
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
            "command": 2,
            "weapons": [
                {
                    "weaponName": "\"Snake Green\" 5mm Assault Rifle",
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
                    "weaponName": "\"Tread Curve\" 20mm Grenade Launcher",
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
                    "params": "Additional"
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
                    "rule": "Rygonet",
                    "params": "12\""
                },
                {
                    "rule": "Brigade",
                    "params": "2, 12\""
                },
                {
                    "rule": "One Node Team comes free per 100 points as a standard TACOM. Further Node Teams may be purchased for 20 points each at no limit.",
                    "params": ""
                }
            ]
        },
        {
            "name": "G1 Ganglion",
            "faction": [
                "rygolic"
            ],
            "value": 20,
            "stats": [
                "H1",
                "S0\"",
                "M0\"",
                "Q6",
                "T4/4/4",
                "C6"
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
            "command": 6,
            "weapons": [
                {
                    "weaponName": "",
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
                    "rule": "Amphibious",
                    "params": ""
                },
                {
                    "rule": "NBC",
                    "params": ""
                },
                {
                    "rule": "Rygonet",
                    "params": "24\""
                },
                {
                    "rule": "Brigade",
                    "params": "4, 12\""
                },
                {
                    "rule": "May activate in the Manuever Phase despite having M0\" to call Brigade move actions only.",
                    "params": ""
                },
                {
                    "rule": "This unit may not lend actions to friendly units via Rygonet.",
                    "params": ""
                }
            ]
        },
        {
            "name": "S3 Stoma",
            "faction": [
                "rygolic"
            ],
            "value": 30,
            "stats": [
                "H2",
                "S32\"",
                "M8\"",
                "Q3",
                "T6/6/5",
                "C4"
            ],
            "type": {
                "super": [
                    "Vehicle"
                ],
                "sub": [
                    "Strider",
                    "40x60"
                ]
            },
            "command": 4,
            "weapons": [
                {
                    "weaponName": "\"Drift Bar\" 5mm Coaxial MG",
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
                    "weaponName": "\"Pitch Break\" 25mm Autocannon",
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
                    "rule": "Rygonet",
                    "params": "12\""
                },
                {
                    "rule": "Brigade",
                    "params": "4,8\""
                },
                {
                    "rule": "When this unit activates in the Fire Phase, it may select one friendly Rygolic unit within Line of Sight up to 8\" away which has not already acted that round. The Stoma and the selected unit fire at the same target simultaneously. Units activated this way are treated as having already fired for the round.",
                    "params": ""
                }
            ]
        },
        {
            "name": "Tactical Team",
            "faction": [
                "rygolic"
            ],
            "value": 15,
            "stats": [
                "H1",
                "S32\"",
                "M5\"",
                "Q3",
                "T1+/1/1"
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
                    "weaponName": "\"Snake Green\" 5mm Assault Rifle",
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
                    "weaponName": "\"Tread Curve\" 20mm Grenade Launcher",
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
                    "weaponName": "\"Side Fast\" 140mm ATGM",
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
            "name": "Legionnaires",
            "faction": [
                "rygolic"
            ],
            "value": 25,
            "stats": [
                "H1",
                "S32\"",
                "M5\"",
                "Q3",
                "T1+/1/1"
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
                    "weaponName": "\"Snake Green\" 5mm Assault Rifle",
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
                    "weaponName": "\"Tread Curve\" 20mm Grenade Launcher",
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
                    "weaponName": "\"Side Fast\" 140mm ATGM",
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
            "name": "Smartgun Team Team",
            "faction": [
                "rygolic"
            ],
            "value": 15,
            "stats": [
                "H1",
                "S32\"",
                "M5\"",
                "Q3",
                "T1+/1/1"
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
                    "weaponName": "\"Snake Green\" 5mm Assault Rifle",
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
                    "weaponName": "\"Drift Cage\" 5mm Stabilized SAW",
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
            "name": "Laser Team",
            "faction": [
                "rygolic"
            ],
            "value": 15,
            "stats": [
                "H1",
                "S32\"",
                "M5\"",
                "Q3",
                "T1+/1/1"
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
                    "weaponName": "\"Snake Green\" 5mm Assault Rifle",
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
                    "weaponName": "\"Sun Point\" 6kW Laser Weapon",
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
            "name": "MANPADS Team",
            "faction": [
                "rygolic"
            ],
            "value": 20,
            "stats": [
                "H1",
                "S32\"",
                "M5\"",
                "Q3",
                "T1+/1/1"
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
                    "weaponName": "\"Snake Green\" 5mm Assault Rifle",
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
                    "weaponName": "\"Tread Curve\" 20mm Grenade Launcher",
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
                    "weaponName": "\"Pole Gaurd\" 70mm MANPADS",
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
            "name": "Chemical Team",
            "faction": [
                "rygolic"
            ],
            "value": 20,
            "stats": [
                "H1",
                "S24\"",
                "M4\"",
                "Q3",
                "T1+/1+/1+"
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
                    "weaponName": "\"Pike Jump\" 12-gauge Automatic Shotgun",
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
                    "weaponName": "\"Weave Liner\" 70mm Dual RPG",
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
                    "rule": "May always lose up to 3 pin during Upkeep, even when inside of Chemical Weapons.",
                    "params": ""
                }
            ]
        },
        {
            "name": "Guided Mortar Spider",
            "faction": [
                "rygolic"
            ],
            "value": 30,
            "stats": [
                "H1",
                "S24\"",
                "M5\"",
                "Q3",
                "T1+/1/1"
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
                    "weaponName": "\"Snake Green\" 5mm Assault Rifle",
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
                    "weaponName": "\"Trace Rung\" 80mm Guided Mortar",
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
            "name": "Carabiner Horse",
            "faction": [
                "rygolic"
            ],
            "value": 15,
            "stats": [
                "H1",
                "S32\"",
                "M6\"",
                "Q3",
                "T1/1/1"
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
                    "weaponName": "\"Bronze Lead\" Laser Designator",
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
            "name": "Capsule Squad",
            "faction": [
                "rygolic"
            ],
            "value": 25,
            "stats": [
                "H1",
                "S24\"",
                "M5\"",
                "Q3",
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
                    "weaponName": "\"Snake Green\" 5mm Assault Rifle",
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
                    "weaponName": "\"Tread Curve\" 20mm Grenade Launcher",
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
                    "rule": "Deploy this unit via a Capsule Insertion support mission during the Support Phase.",
                    "params": ""
                }
            ]
        },
        {
            "name": "Assassin",
            "faction": [
                "rygolic"
            ],
            "value": 30,
            "stats": [
                "H1",
                "S8\"",
                "M6\"",
                "Q4",
                "T1/1/1-"
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
                    "weaponName": "\"Frame Staff\" 10mm SMG, dual",
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
                    "weaponName": "\"Sphere Catch\" 12mm Pistol, subsonic",
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
                    "weaponName": "\"Site Cause\" Plastic Explosive Charge",
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
                    "rule": "Active Camoflauge",
                    "params": ""
                },
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
                    "rule": "Sense",
                    "params": "8\""
                }
            ]
        },
        {
            "name": "Simulacrum",
            "faction": [
                "rygolic"
            ],
            "value": 30,
            "stats": [
                "H1",
                "S32\"",
                "M4\"",
                "Q3",
                "T1/1/1"
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
                    "weaponName": "",
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
                    "rule": "This unit's base is always 40mmx40mm and always leaves a corpse token.",
                    "params": ""
                },
                {
                    "rule": "During the Support Phase this unit imitates the closest enemy infantry or vehicle that it can sport. While imitating this unit gains its enemy's weapons, statline and unit class but not any special rules, instead retaining Fearless and NBC and having infinite ammunition.",
                    "params": ""
                },
                {
                    "rule": "When entering Close Combat this unit may opt to copy any enemy unit that it would enter close combat with. If two or more Simulacrum units would enter Close Quarter with each other immediately kill them.",
                    "params": ""
                }
            ]
        },
        {
            "name": "C1 Candor",
            "faction": [
                "rygolic"
            ],
            "value": 25,
            "stats": [
                "H2",
                "S32\"",
                "M10\"",
                "Q3",
                "T6/4/4"
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
                    "weaponName": "\"Drift Bar\" 5mm Coaxial MG",
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
                    "weaponName": "\"Sun Point\" 6kW Laser Weapon",
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
                    "weaponName": "\"Tread Bus\" 65mm Smoke Launchers",
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
                    "params": "2, Rear"
                }
            ]
        },
        {
            "name": "P1 Parallax",
            "faction": [
                "rygolic"
            ],
            "value": 35,
            "stats": [
                "H2",
                "S32\"",
                "M10\"",
                "Q3",
                "T6/4/4"
            ],
            "type": {
                "super": [
                    "Vehicle"
                ],
                "sub": [
                    "Hovercraft",
                    "40x60"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "\"Drift Bar\" 5mm Coaxial MG",
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
                    "weaponName": "\"Pitch Break\" 25mm Autocannon",
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
                    "weaponName": "\"Side Judge\" 150mm ATGM",
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
                    "weaponName": "\"Tread Bus\" 65mm Smoke Launchers",
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
                    "rule": "Amphibious",
                    "params": ""
                },
                {
                    "rule": "NBC",
                    "params": ""
                },
                {
                    "rule": "PC",
                    "params": "2, Rear"
                }
            ]
        },
        {
            "name": "P2 Perigee",
            "faction": [
                "rygolic"
            ],
            "value": 35,
            "stats": [
                "H2",
                "S32\"",
                "M10\"",
                "Q3",
                "T6/4/4"
            ],
            "type": {
                "super": [
                    "Vehicle"
                ],
                "sub": [
                    "Hovercraft",
                    "40x60"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "\"Drift Bar\" 5mm Coaxial MG",
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
                    "weaponName": "\"Pitch Break\" 25mm Autocannon",
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
                    "weaponName": "",
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
                    "weaponName": "\"Tread Bus\" 65mm Smoke Launchers",
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
                    "rule": "Amphibious",
                    "params": ""
                },
                {
                    "rule": "NBC",
                    "params": ""
                },
                {
                    "rule": "PC",
                    "params": "2, Rear"
                }
            ]
        },
        {
            "name": "M1 Microwave",
            "faction": [
                "rygolic"
            ],
            "value": 20,
            "stats": [
                "H1",
                "S32\"",
                "M8\"",
                "Q*",
                "T4/2/2"
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
                    "weaponName": "\"Pitch Break\" 25mm Autocannon",
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
                    "rule": "Drone",
                    "params": ""
                },
                {
                    "rule": "NBC",
                    "params": ""
                }
            ]
        },
        {
            "name": "S1 Synod",
            "faction": [
                "rygolic"
            ],
            "value": 40,
            "stats": [
                "H2",
                "S32\"",
                "M8\"",
                "Q3",
                "T12/10/8"
            ],
            "type": {
                "super": [
                    "Vehicle"
                ],
                "sub": [
                    "Strider",
                    "40x60"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "\"Drift Fence\" 10mm HMG",
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
                    "weaponName": "\"Bridge Spike\" 75mm Rifled Gun",
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
                    "weaponName": "\"Tread Bus\" 65mm Smoke Launchers",
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
            "name": "C1 Cabal",
            "faction": [
                "rygolic"
            ],
            "value": 50,
            "stats": [
                "H2",
                "S32\"",
                "M10\"",
                "Q3",
                "T8/6/4"
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
                    "weaponName": "\"Drift Bar\" 5mm Coaxial MG",
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
                    "weaponName": "\"Bridge Dart\" 105mm Gun",
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
                    "weaponName": "\"Tread Bus\" 65mm Smoke Launchers",
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
                    "rule": "APS",
                    "params": "5+, 2"
                },
                {
                    "rule": "NBC",
                    "params": ""
                }
            ]
        },
        {
            "name": "X1 X-ray",
            "faction": [
                "rygolic"
            ],
            "value": 80,
            "stats": [
                "H2",
                "S32\"",
                "M10\"",
                "Q3",
                "T16/14/6"
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
                    "weaponName": "",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "\"Sun Point\" 6kW Laser Weapon",
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
                    "weaponName": "\"Bridge Dart\" 105mm Gun",
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
                    "weaponName": "\"Tread Bus\" 65mm Smoke Launchers",
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
                    "rule": "APS",
                    "params": "6+, 3"
                },
                {
                    "rule": "NBC",
                    "params": ""
                }
            ]
        },
        {
            "name": "Automated Sentry",
            "faction": [
                "rygolic"
            ],
            "value": 15,
            "stats": [
                "H1",
                "S32\"",
                "M0\"",
                "Q*",
                "T2/2/1"
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
                    "weaponName": "\"Yaw Post\" 10mm Minigun",
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
                    "rule": "Drone",
                    "params": ""
                },
                {
                    "rule": "NBC",
                    "params": ""
                },
                {
                    "rule": "Amphibious",
                    "params": ""
                }
            ]
        },
        {
            "name": "Automated ATGM",
            "faction": [
                "rygolic"
            ],
            "value": 20,
            "stats": [
                "H1",
                "S32\"",
                "M0\"",
                "Q*",
                "T2/2/1"
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
                    "weaponName": "\"Side Judge\" 150mm ATGM",
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
                    "rule": "Drone",
                    "params": ""
                },
                {
                    "rule": "NBC",
                    "params": ""
                },
                {
                    "rule": "Amphibious",
                    "params": ""
                }
            ]
        },
        {
            "name": "S2 Stochast",
            "faction": [
                "rygolic"
            ],
            "value": 40,
            "stats": [
                "H2",
                "S32\"",
                "M8\"",
                "Q3",
                "T12/10/8"
            ],
            "type": {
                "super": [
                    "Vehicle"
                ],
                "sub": [
                    "Strider",
                    "40x60"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "\"Drift Fence\" 10mm HMG",
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
                    "weaponName": "\"Ink Strake\" 55mm Thermobaric Rockets",
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
            "name": "C2 Chorus",
            "faction": [
                "rygolic"
            ],
            "value": 60,
            "stats": [
                "H2",
                "S32\"",
                "M10\"",
                "Q3",
                "T8/6/4"
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
                    "weaponName": "\"Drift Bar\" 5mm Coaxial MG",
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
                    "weaponName": "\"Star Call\" Laser Designator",
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
                    "weaponName": "\"Star Shelf\" 155mm Missile Launcher",
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
                    "weaponName": "\"Tread Bus\" 65mm Smoke Launchers",
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
            "name": "X2 Xiphos",
            "faction": [
                "rygolic"
            ],
            "value": 80,
            "stats": [
                "H2",
                "S32\"",
                "M10\"",
                "Q4",
                "T12/8/6"
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
                    "weaponName": "\"Drift Bar\" 5mm Coaxial MG",
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
                    "weaponName": "\"Bridge Arrow\" 155mm Howitzer",
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
                    "rule": "APS",
                    "params": "6+, 2"
                },
                {
                    "rule": "NBC",
                    "params": ""
                }
            ]
        },
        {
            "name": "X3 Xenon",
            "faction": [
                "rygolic"
            ],
            "value": 80,
            "stats": [
                "H2",
                "S32\"",
                "M10\"",
                "Q3",
                "T14/10/6"
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
                    "weaponName": "\"Drift Bar\" 5mm Coaxial MG",
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
                    "weaponName": "\"Sun Blind\" 20kW Laser Weapon Array",
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
                    "weaponName": "Shockwave Dispersal System",
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
                    "weaponName": "\"Tread Bus\" 65mm Smoke Launchers",
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
                    "rule": "APS",
                    "params": "6+, 2"
                },
                {
                    "rule": "NBC",
                    "params": ""
                }
            ]
        },
        {
            "name": "Y1 Yardfish",
            "faction": [
                "rygolic"
            ],
            "value": 30,
            "stats": [
                "H1",
                "S32\"",
                "M8\"",
                "Q3",
                "T3/3/2"
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
                    "weaponName": "\"Sun Line\" 6kW Laser Weapon Array",
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
                    "weaponName": "\"Dredge Top\" 149mm VLS Missiles",
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
                    "rule": "Active Camoflauge",
                    "params": ""
                },
                {
                    "rule": "NBC",
                    "params": ""
                }
            ]
        },
        {
            "name": "R1 Redstone",
            "faction": [
                "rygolic"
            ],
            "value": 20,
            "stats": [
                "H2",
                "S16\"",
                "M24\"",
                "Q3",
                "T3/3/3"
            ],
            "type": {
                "super": [
                    "Helicopter"
                ],
                "sub": [
                    "40x40"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "",
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
                    "rule": "NBC",
                    "params": ""
                },
                {
                    "rule": "PC",
                    "params": "2, Any"
                },
                {
                    "rule": "Resupply",
                    "params": "3"
                },
                {
                    "rule": "This unit may land in any occluding terrain.",
                    "params": ""
                },
                {
                    "rule": "If this unit falls back from close combat, choose one engaged enemy unit to take a Strength 1+ hit on it's rear arc.",
                    "params": ""
                }
            ]
        },
        {
            "name": "R2 Repeater",
            "faction": [
                "rygolic"
            ],
            "value": 30,
            "stats": [
                "H2",
                "S24\"",
                "M24\"",
                "Q3",
                "T3/3/3"
            ],
            "type": {
                "super": [
                    "Helicopter"
                ],
                "sub": [
                    "40x40"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "\"Yaw Shaft\" 15mm Minigun",
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
                    "rule": "NBC",
                    "params": ""
                },
                {
                    "rule": "PC",
                    "params": "1, Any"
                },
                {
                    "rule": "This unit may land in any occluding terrain.",
                    "params": ""
                },
                {
                    "rule": "If this unit falls back from close combat, choose one engaged enemy unit to take a Strength 1+ hit on it's rear arc.",
                    "params": ""
                }
            ]
        },
        {
            "name": "H1 Handler",
            "faction": [
                "rygolic"
            ],
            "value": 15,
            "stats": [
                "H1",
                "S32\"",
                "M32\"",
                "Q*",
                "T1/1/1"
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
                    "weaponName": "\"Star Call\" Laser Designator",
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
                    "weaponName": "\"Tread Plate\" 65mm Smoke Array",
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
                    "rule": "Drone",
                    "params": ""
                },
                {
                    "rule": "NBC",
                    "params": ""
                }
            ]
        },
        {
            "name": "H2 Hangman",
            "faction": [
                "rygolic"
            ],
            "value": 15,
            "stats": [
                "H1",
                "S32\"",
                "M32\"",
                "Q*",
                "T1/1/1"
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
                    "weaponName": "\"Bolt Fleck\" 100mm Flechette Gun",
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
                    "weaponName": "\"Weave Stalk\" 70mm Dual Rocket Pod",
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
                    "rule": "Drone",
                    "params": ""
                },
                {
                    "rule": "NBC",
                    "params": ""
                }
            ]
        },
        {
            "name": "T1 Tatter",
            "faction": [
                "rygolic"
            ],
            "value": 60,
            "stats": [
                "H2",
                "S32\"",
                "M32\"",
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
                    "weaponName": "\"Pitch Throat\" 35mm Autocannon",
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
                    "weaponName": "\"Ram Crutch\" 175mm Active AAM",
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
                    "weaponName": "\"Mark Pate\" 180mm AGM",
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
            "name": "Destroying Angel",
            "faction": [
                "rygolic"
            ],
            "value": 80,
            "stats": [
                "H2",
                "S32\"",
                "M18\"",
                "Q4",
                "T4/4/4"
            ],
            "type": {
                "super": [
                    "Helicopter"
                ],
                "sub": [
                    "40x40"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "\"Sun Door\" 20kW Pulsed Laser Battery",
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
                    "rule": "APS",
                    "params": "6+, 4"
                },
                {
                    "rule": "NBC",
                    "params": ""
                },
                {
                    "rule": "Sense",
                    "params": "12\""
                },
                {
                    "rule": "Rotating this unit costs 0\" and it cannot land.",
                    "params": ""
                },
                {
                    "rule": "Every time this unit uses APS, its weapon Dice statistic decreases by 1 for the rest of the round. If the Dice value hits 0 it cannot be fired this round and APS cannot be triggered again this round. During Upkeep the laser weapon's Dice value is reset to 4 regardless of how many munitions were intercepted last round.",
                    "params": ""
                }
            ]
        },
        {
            "name": "B1 Blindsight",
            "faction": [
                "rygolic"
            ],
            "value": 50,
            "stats": [
                "H*",
                "S*\"",
                "M20\"",
                "Q4",
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
                    "weaponName": "\"Sun Grid\" 20kW Laser Array",
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
                    "weaponName": "\"Ram Crutch\" 175mm Active AAM",
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
                    "weaponName": "\"Mark Pate\" 180mm AGM",
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
                }
            ]
        },
        {
            "name": "Z1 Zenith",
            "faction": [
                "rygolic"
            ],
            "value": 50,
            "stats": [
                "H*",
                "S*\"",
                "M16\"",
                "Q4",
                "T3",
                "E1"
            ],
            "type": {
                "super": [
                    "Aircraft"
                ],
                "sub": [
                    "CAS",
                    "40x60"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "\"Able Ivy\" 20t Guided Nuclear Bomb",
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
                    "rule": "Active Camoflauge",
                    "params": ""
                },
                {
                    "rule": "Afterburner",
                    "params": ""
                }
            ]
        },
        {
            "name": "A1 Apogee",
            "faction": [
                "rygolic"
            ],
            "value": 50,
            "stats": [
                "H*",
                "S*\"",
                "M14\"",
                "Q4",
                "T6",
                "E2"
            ],
            "type": {
                "super": [
                    "Aircraft"
                ],
                "sub": [
                    "CAS",
                    "40x60"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "\"Yaw Switch\" 40mm Rotary Cannon",
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
                    "weaponName": "\"Lake Brush\" 275mm Guided Bomb",
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
                }
            ]
        }
]

export default rygolist