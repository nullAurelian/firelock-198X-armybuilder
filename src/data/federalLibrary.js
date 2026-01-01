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
const fedlist = [
    {
            "name": "Type 68C Appomattox",
            "faction": [
                "federal"
            ],
            "value": 0,
            "stats": [
                "H2",
                "S32\"",
                "M8\"",
                "Q3",
                "T6/4/4",
                "C3"
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
            "command": 3,
            "weapons": [
                {
                    "weaponName": "Pequod SA 11.5mm, commander issue",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R2\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A5+/5+",
                            "attackStrength": "S1+/1+",
                            "attackTags": [
                                "Small Arm"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "1M1V Target Bearing Transmitter",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R32\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A++/xx",
                            "attackStrength": "",
                            "attackTags": [
                                "Designator",
                                "Discreet"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "902V 81mm Smoke Launchers",
                    "weaponAmmo": "1",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Gnd",
                            "attackRange": "R6\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A++/++",
                            "attackStrength": "",
                            "attackTags": [
                                "Light Indirect(1)",
                                "No CC",
                                "Smoke (3\")"
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
                    "rule": "Amphibious",
                    "params": ""
                },
                {
                    "rule": "Brigade",
                    "params": "3, 12\""
                }
            ]
        },
        {
            "name": "Expeditionary Command Squad",
            "faction": [
                "federal"
            ],
            "value": 15,
            "stats": [
                "H1",
                "S24\"",
                "M5\"",
                "Q4",
                "T1/1-/1-",
                "C5"
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
            "command": 5,
            "weapons": [
                {
                    "weaponName": "6G1A 7.76mm Automatic Rifle",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R8\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/4+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Small Arm"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "6L3 10mm HEDP Grenade Launcher",
                    "weaponAmmo": "4",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R8\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A*",
                            "attackStrength": "S5/1+",
                            "attackTags": [
                                "Shaped Charge",
                                "Underbarrel (6G1A)"
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
                    "rule": "Assault Dismount",
                    "params": ""
                },
                {
                    "rule": "Fearless",
                    "params": ""
                },
                {
                    "rule": "Paradrop",
                    "params": ""
                },
                {
                    "rule": "Brigade",
                    "params": "2, 8\""
                },
                {
                    "rule": "All units targeted in a Brigade (including self) lose all pin tokens.",
                    "params": ""
                }
            ]
        },
        {
            "name": "Type 40M Veldjen-MC",
            "faction": [
                "federal"
            ],
            "value": 15,
            "stats": [
                "H2",
                "S32\"",
                "M6\"",
                "Q3",
                "T8/6/5",
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
                    "weaponName": "6G2 7.76mm MG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R12\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/4+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Turret"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "2K70 57mm High Velocity Gun",
                    "weaponAmmo": "6",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Vec",
                            "attackRange": "R40\"",
                            "attackDice": "1",
                            "attackAccuracy": "A4+/4+",
                            "attackStrength": "S12/18",
                            "attackTags": [
                                "Turret"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "2K15 40mm HE Grenade Launcher",
                    "weaponAmmo": "4",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R14\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/5+",
                            "attackStrength": "S1+/2",
                            "attackTags": [
                                "Ignore Cover (1)",
                                "Multi-Gun"
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
                    "rule": "Steel Watchbands",
                    "params": ""
                },
                {
                    "rule": "Brigade",
                    "params": "4, 6\""
                }
            ]
        },
        {
            "name": "Type 52C Duck-C",
            "faction": [
                "federal"
            ],
            "value": 15,
            "stats": [
                "H2",
                "S32\"",
                "M10\"",
                "Q3",
                "T6/4/4",
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
                    "weaponName": "6G2 7.76mm MG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R12\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/5+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Turret"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "2K81 152mm Gun-Launcher",
                    "weaponAmmo": "4",
                    "attacks": [
                        {
                            "attackName": "152mm HEAT",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R32\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+/5+",
                            "attackStrength": "S14/2",
                            "attackTags": [
                                "No CC (Inf.)", "Shaped Charge"
                            ]
                        },
                        {
                            "attackName": "152mm Beehive",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R16\"",
                            "attackDice": "D5",
                            "attackAccuracy": "A4+/5+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Defensive CC (Inf.)"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "902V 81mm Smoke Launchers",
                    "weaponAmmo": "1",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Gnd",
                            "attackRange": "R6\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A++/++",
                            "attackStrength": "",
                            "attackTags": [
                                "Light Indirect(1)",
                                "No CC",
                                "Smoke (3\")",
								"Turret"
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
                    "rule": "Steel Watchbands",
                    "params": ""
                },
                {
                    "rule": "Amphibious",
                    "params": ""
                },
                {
                    "rule": "Brigade",
                    "params": "4, 6\""
                }
            ]
        },
        {
            "name": "Type 52PC Mallard-C",
            "faction": [
                "federal"
            ],
            "value": 15,
            "stats": [
                "H2",
                "S32\"",
                "M10\"",
                "Q4",
                "T4/3/3",
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
                    "weaponName": "2A76 7.76mm Minigun",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R12\"",
                            "attackDice": "D4",
                            "attackAccuracy": "A4+/6+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Turret"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "2K56 76mm Gun",
                    "weaponAmmo": "3",
                    "attacks": [
                        {
                            "attackName": "76mm HVAP",
                            "attackTargets": "Vec",
                            "attackRange": "R32\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+/5+",
                            "attackStrength": "S8/15",
                            "attackTags": [
                                "No CC (Inf.)",
								"Turret"
                            ]
                        },
                        {
                            "attackName": "76mm HE-Frag",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R32\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+/5+",
                            "attackStrength": "S3/3",
                            "attackTags": [
                                "No CC (Inf.)",
								"Turret",
								"Ignore Cover (1)"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "902V 81mm Smoke Launchers",
                    "weaponAmmo": "1",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Gnd",
                            "attackRange": "R6\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A++/++",
                            "attackStrength": "",
                            "attackTags": [
                                "Light Indirect(1)",
                                "No CC",
                                "Smoke (3\")",
								"Turret"
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
                    "rule": "Steel Watchbands",
                    "params": ""
                },
                {
                    "rule": "Paradrop",
                    "params": ""
                },
                {
                    "rule": "Amphibious",
                    "params": ""
                },
                {
                    "rule": "Brigade",
                    "params": "4, 6\""
                }
            ]
        },
        {
            "name": "Type 55MC Razorback-MC",
            "faction": [
                "federal"
            ],
            "value": 30,
            "stats": [
                "H2",
                "S32\"",
                "M8\"",
                "Q3",
                "T14/7/5",
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
                    "weaponName": "6G2 7.76mm MG, Hull",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R12\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/5+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Multi-Gun"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "6GZ1 14,5mm HMG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R24\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/6+",
                            "attackStrength": "S3/4",
                            "attackTags": [
                                "Turret"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "2K41 100mm Gun",
                    "weaponAmmo": "4",
                    "attacks": [
                        {
                            "attackName": "100mm APDS",
                            "attackTargets": "Vec",
                            "attackRange": "R40\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/4+",
                            "attackStrength": "S12/18",
                            "attackTags": [
                                "No CC (Inf.)",
								"Thermal Sights",
								"Turret"
                            ]
                        },
						{
                            "attackName": "100mm HE-Frag",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R40\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/4+",
                            "attackStrength": "S4/4",
                            "attackTags": [
								"No CC (Inf.)",
								"Thermal Sights",
								"Turret",
                                "Ignore Cover (1)"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "902V 81mm Smoke Launchers",
                    "weaponAmmo": "1",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Gnd",
                            "attackRange": "R6\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A++/++",
                            "attackStrength": "",
                            "attackTags": [
                                "Light Indirect(1)",
                                "No CC",
                                "Smoke (3\")",
								"Turret"
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
                    "rule": "Steel Watchbands",
                    "params": ""
                },
                {
                    "rule": "Brigade",
                    "params": "4, 6\""
                }
            ]
        },
        {
            "name": "Type 71C Tusker-KC",
            "faction": [
                "federal"
            ],
            "value": 40,
            "stats": [
                "H2",
                "S32\"",
                "M8\"",
                "Q4",
                "T16/8/6",
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
                    "weaponName": "6GZ1 14,5mm HMG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R24\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/6+",
                            "attackStrength": "S3/4",
                            "attackTags": [
                                "Turret"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "2K43 115mm Gun",
                    "weaponAmmo": "4",
                    "attacks": [
                        {
                            "attackName": "115mm Sabot",
                            "attackTargets": "Vec",
                            "attackRange": "R40\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A2+/3+",
                            "attackStrength": "S14/21",
                            "attackTags": [
                                "No CC (Inf.)", "Thermal Sights", "Turret"
                            ]
                        },
						{
                            "attackName": "115mm HEAT",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R40\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A2+/3+",
                            "attackStrength": "S11/2",
                            "attackTags": [
                                "Shaped Charge"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "902V 81mm Smoke Launchers",
                    "weaponAmmo": "1",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Gnd",
                            "attackRange": "R6\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A++/++",
                            "attackStrength": "",
                            "attackTags": [
                                "Light Indirect(1)",
                                "No CC",
                                "Smoke (3\")",
								"Turret"
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
                    "rule": "Steel Watchbands",
                    "params": ""
                },
                {
                    "rule": "Brigade",
                    "params": "4, 6\""
                }
            ]
        },
        {
            "name": "Type 71BC Tusker-GMC",
            "faction": [
                "federal"
            ],
            "value": 70,
            "stats": [
                "H2",
                "S32\"",
                "M8\"",
                "Q5",
                "T24/12/8",
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
                    "weaponName": "6GZ1 14,5mm HMG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R24\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/6+",
                            "attackStrength": "S3/4",
                            "attackTags": [
								"Thermal Sights",
                                "Turret"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "2K81 152mm Gun-Launcher",
                    "weaponAmmo": "4",
                    "attacks": [
                        {
                            "attackName": "152mm Gun-Launched ATGM",
                            "attackTargets": "Vec",
                            "attackRange": "R12-60\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A2+/xx",
                            "attackStrength": "S18/3",
                            "attackTags": [
                                "No CC (Inf.)","Thermal Sights","Turret","Guided Missile (1)","Shaped Charge"
                            ]
                        },
						{
                            "attackName": "152mm Gun-Launched Thermobaric",
                            "attackTargets": "Gnd",
                            "attackRange": "R12-60\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/xx",
                            "attackStrength": "S3/3",
                            "attackTags": [
                                "No CC (Inf.)","Thermal Sights","Turret","Guided Missile (1)","Ignore Cover (2)", "Radius (2\")","Rear Attack"
                            ]
                        },
						{
                            "attackName": "152mm Tandem Heat",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R40\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A2+/3+",
                            "attackStrength": "S18/3",
                            "attackTags": [
                                "No CC (Inf.)","Thermal Sights","Turret","Shaped Charge"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "902V 81mm Smoke Launchers",
                    "weaponAmmo": "1",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Gnd",
                            "attackRange": "R6\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A++/++",
                            "attackStrength": "",
                            "attackTags": [
                                "Light Indirect(1)",
                                "No CC",
                                "Smoke (3\")",
								"Turret"
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
                    "rule": "Steel Watchbands",
                    "params": ""
                },
                {
                    "rule": "Brigade",
                    "params": "4, 6\""
                }
            ]
        },
        {
            "name": "Reservists",
            "faction": [
                "federal"
            ],
            "value": 5,
            "stats": [
                "H1",
                "S16\"",
                "M4\"",
                "Q1",
                "T1-/1-/1-"
            ],
            "command": 0,
            "type": {
                "super": [
                    "Infantry"
                ],
                "sub": [
                    "Squad",
                    "40x40"
                ]
            },
            "weapons": [
                {
                    "weaponName": "6P3 11.5mm SMG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R8\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A5+/5+",
                            "attackStrength": "S1-/1",
                            "attackTags": [
                                "Small Arm"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "6L4 73mm RPG",
                    "weaponAmmo": "3",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R8\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A5+/6+",
                            "attackStrength": "S6/1",
                            "attackTags": [
                                "Shaped Charge","Small Arm"
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "",
                    "params": ""
                }
            ]
        },
        {
            "name": "States-Grenadiers",
            "faction": [
                "federal"
            ],
            "value": 10,
            "stats": [
                "H1",
                "S16\"",
                "M4\"",
                "Q2",
                "T1/1-/1-"
            ],
            "command": 0,
            "type": {
                "super": [
                    "Infantry"
                ],
                "sub": [
                    "Squad",
                    "40x40"
                ]
            },
            "weapons": [
                {
                    "weaponName": "6G1 7.76mm Battle Rifle",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R8\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/4+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Small Arm"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "6G2 7.76mm GPMG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R12\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/xx",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Defensive CC"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "6L1 85mm RPG",
                    "weaponAmmo": "3",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R8\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+/6+",
                            "attackStrength": "S8/1+",
                            "attackTags": [
                                "Shaped Charge","Small Arm"
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "Assault Dismount",
                    "params": ""
                }
            ]
        },
        {
            "name": "Federal Expeditionaries",
            "faction": [
                "federal"
            ],
            "value": 15,
            "stats": [
                "H1",
                "S16\"",
                "M5\"",
                "Q3",
                "T1/1-/1-"
            ],
            "command": 0,
            "type": {
                "super": [
                    "Infantry"
                ],
                "sub": [
                    "Squad",
                    "40x40"
                ]
            },
            "weapons": [
                {
                    "weaponName": "6G1A 7.76mm Automatic Rifle",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R8\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/4+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Small Arm"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "6L3 10mm HEDP Grenade Launcher",
                    "weaponAmmo": "4",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R8\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A*",
                            "attackStrength": "S5/1+",
                            "attackTags": [
                                "Shaped Charge",
                                "Underbarrel (6G1A)"
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "Assault Dismount",
                    "params": ""
                },
                {
                    "rule": "Fearless",
                    "params": ""
                },
                {
                    "rule": "Paradrop",
                    "params": ""
                }
            ]
        },
        {
            "name": "Mortar Team",
            "faction": [
                "federal"
            ],
            "value": 10,
            "stats": [
                "H1",
                "S16\"",
                "M4\"",
                "Q2",
                "T1-/1-/1-"
            ],
            "command": 0,
            "type": {
                "super": [
                    "Infantry"
                ],
                "sub": [
                    "Team",
                    "40x40"
                ]
            },
            "weapons": [
               {
                    "weaponName": "6G1 7.76mm Battle Rifle",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R8\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/4+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Small Arm"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "6L2 60mm Knee Mortar",
                    "weaponAmmo": "6",
                    "attacks": [
                        {
                            "attackName": "60mm Frag",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R16\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/xx",
                            "attackStrength": "S1+/1+",
                            "attackTags": [
                                "Light Indirect (1)","No CC","Air-Filling"
                            ]
                        },
						{
                            "attackName": "60mm Smoke",
                            "attackTargets": "Gnd",
                            "attackRange": "R16\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A++/xx",
                            "attackStrength": "",
                            "attackTags": [
                                "Smoke (3\")"
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "Assault Dismount",
                    "params": ""
                }
            ]
        },
        {
            "name": "ATGM Team",
            "faction": [
                "federal"
            ],
            "value": 10,
            "stats": [
                "H1",
                "S32\"",
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
                    "weaponName": "6G1 7.76mm Battle Rifle",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R8\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/4+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Small Arm"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "9GR1 125mm ATGM",
                    "weaponAmmo": "2",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Vec",
                            "attackRange": "R12-60\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/4+",
                            "attackStrength": "S14/2",
                            "attackTags": [
                                "Guided Missile (2)","MCLOS","Shaped Charge"
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "Assault Dismount",
                    "params": ""
                }
            ]
        },
        {
            "name": "MANPADS Team",
            "faction": [
                "federal"
            ],
            "value": 10,
            "stats": [
                "H1",
                "S32\"",
                "M4\"",
                "Q2",
                "T1-/1-/1-"
            ],
            "command": 0,
            "type": {
                "super": [
                    "Infantry"
                ],
                "sub": [
                    "Team",
                    "40x40"
                ]
            },
            "weapons": [
               {
                    "weaponName": "6G1 7.76mm Battle Rifle",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R8\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/4+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Small Arm"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "9GR2 85mm MANPADS",
                    "weaponAmmo": "2",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Air",
                            "attackRange": "R60\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+/xx",
                            "attackStrength": "S5/5",
                            "attackTags": [
                                "Air-Filling","Guided Missle (2)","Homing","Small Arm"
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "Assault Dismount",
                    "params": ""
                }
            ]
        },
        {
            "name": "Recoilless Rifle Team",
            "faction": [
                "federal"
            ],
            "value": 15,
            "stats": [
                "H1",
                "S24\"",
                "M4\"",
                "Q2",
                "T1-/1-/1-"
            ],
            "command": 0,
            "type": {
                "super": [
                    "Infantry"
                ],
                "sub": [
                    "Team",
                    "40x40"
                ]
            },
            "weapons": [
                {
                    "weaponName": "6G1 7.76mm Battle Rifle",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R8\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/4+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Small Arm"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "6L5 73mm Recoilless Rifle",
                    "weaponAmmo": "4",
                    "attacks": [
                        {
                            "attackName": "73mm HEAT",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R24\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/xx",
                            "attackStrength": "S8/1+",
                            "attackTags": [
                                "No CC (Inf.)","Shaped Charge"
                            ]
                        },
                        {
                            "attackName": "73mm Incendiary",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R24\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/xx",
                            "attackStrength": "S1+/1+",
                            "attackTags": [
                                "Ignore Cover (2)","No CC (Inf.)","Rear Attack"
                            ]
                        },
                        {
                            "attackName": "73mm Smoke",
                            "attackTargets": "Gnd",
                            "attackRange": "R24\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/xx",
                            "attackStrength": "",
                            "attackTags": [
                                "No CC","Smoke (3\")"
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "Assault Dismount",
                    "params": ""
                }
            ]
        },
        {
            "name": "Expeditionary R.R. Team",
            "faction": [
                "federal"
            ],
            "value": 15,
            "stats": [
                "H1",
                "S24\"",
                "M5\"",
                "Q3",
                "T1/1-/1-"
            ],
            "command": 0,
            "type": {
                "super": [
                    "Infantry"
                ],
                "sub": [
                    "Team",
                    "40x40"
                ]
            },
            "weapons": [
                {
                    "weaponName": "6G1A 7.76mm Automatic Rifle",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R8\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/4+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Small Arm"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "6L6 57mm Light Recoilless Rifle",
                    "weaponAmmo": "4",
                    "attacks": [
                        {
                            "attackName": "57mm HEAT",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R24\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/5+",
                            "attackStrength": "S6/1",
                            "attackTags": [
                                "Small Arm","Shaped Charge"
                            ]
                        }, 
						{
                            "attackName": "57mm Canister",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R12\"",
                            "attackDice": "D3",
                            "attackAccuracy": "A3+/5+",
                            "attackStrength": "S1/1",
                            "attackTags": [
                                "Small Arm"
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "Assault Dismount",
                    "params": ""
                },
                {
                    "rule": "Fearless",
                    "params": ""
                },
                {
                    "rule": "Paradrop",
                    "params": ""
                }
            ]
        },
        {
            "name": "Pup Carson Scouts",
            "faction": [
                "federal"
            ],
            "value": 10,
            "stats": [
                "H1",
                "S24\"",
                "M5\"",
                "Q2",
                "T1/1-/1-"
            ],
            "command": 0,
            "type": {
                "super": [
                    "Infantry"
                ],
                "sub": [
                    "Team",
                    "40x40"
                ]
            },
            "weapons": [
               {
                    "weaponName": "6G1 7.76mm Battle Rifle",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R8\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/4+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Small Arm"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Teeth & Claws",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R0\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A1+/1+",
                            "attackStrength": "S1/1",
                            "attackTags": [
                                "Melee"
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "Sense",
                    "params": "6\""
                },
                {
                    "rule": "Any Tracked with at least M6\" which this unit embarks or desants on can make a \"pathfinder move\" during Maneuver Phase which is only M6\" but ignores terrain entrance/exit costs and all terrain multipliers.",
                    "params": ""
                }
            ]
        },
        {
            "name": "Intermarine Rangers",
            "faction": [
                "federal"
            ],
            "value": 15,
            "stats": [
                "H1",
                "S32\"",
                "M5\"",
                "Q4",
                "T1/1-/1-"
            ],
            "command": 0,
            "type": {
                "super": [
                    "Infantry"
                ],
                "sub": [
                    "Team",
                    "40x40"
                ]
            },
            "weapons": [
                {
                    "weaponName": "6G5 7.76mm Sniper Rifle",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R16\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A2+/xx",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Discreet","No CC","Scoped","Small Arm","Thermal Sight"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "6P3 11.5mm SMG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R8\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A5+/5+",
                            "attackStrength": "S1-/1",
                            "attackTags": [
                                "Small Arm"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "1A5P MVSO Acquisition Laser",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R40\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A++/xx",
                            "attackStrength": "",
                            "attackTags": [
                                "Designator","Discreet"
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "Assault Dismount",
                    "params": ""
                },
                {
                    "rule": "Fearless",
                    "params": ""
                },
                {
                    "rule": "This Unit does not lose accuracy from pin tokens while it is not identified.",
                    "params": ""
                }
            ]
        },
        {
            "name": "LaF-30 Ox",
            "faction": [
                "federal"
            ],
            "value": 10,
            "stats": [
                "H2",
                "S16\"",
                "M8\"",
                "Q2",
                "T1/1/1"
            ],
            "command": 0,
            "type": {
                "super": [
                    "Vehicle"
                ],
                "sub": [
                    "Wheeled",
                    "40x60"
                ]
            },
            "weapons": [
                {
                    "weaponName": "6G1 7.76mm Battle Rifle",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R8\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/4+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Small Arm"
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "Resupply",
                    "params": "6"
                },
                {
                    "rule": "PC",
                    "params": "2, Rear"
                },
                {
                    "rule": "Tow",
                    "params": "2"
                }
            ]
        },
        {
            "name": "Type 60 Grumble",
            "faction": [
                "federal"
            ],
            "value": 10,
            "stats": [
                "H2",
                "S24\"",
                "M8\"",
                "Q2",
                "T4/4/3"
            ],
            "command": 0,
            "type": {
                "super": [
                    "Vehicle"
                ],
                "sub": [
                    "Wheeled",
                    "40x60"
                ]
            },
            "weapons": [
                {
                    "weaponName": "6G2 7.76mm MG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R12\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/4+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Turret"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "2K15 40mm HE Grenade Launcher",
                    "weaponAmmo": "4",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R14\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/5+",
                            "attackStrength": "S1+/2",
                            "attackTags": [
                                "Ignore Cover (1)",
                                "Turret"
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
            "name": "Type 68 Bantam",
            "faction": [
                "federal"
            ],
            "value": 20,
            "stats": [
                "H2",
                "S32\"",
                "M8\"",
                "Q3",
                "T6/4/4"
            ],
            "command": 0,
            "type": {
                "super": [
                    "Vehicle"
                ],
                "sub": [
                    "Tracked",
                    "40x60"
                ]
            },
            "weapons": [
                {
                    "weaponName": "6G2 7.76mm MG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R12\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/4+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Turret"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "2K28 73mm Low-Pressure Gun (73mm HEAT, 73mm HE-Frag)",
                    "weaponAmmo": "4",
                    "attacks": [
                        {
                            "attackName": "73mm HEAT",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R22\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+/4+",
                            "attackStrength": "S8/1+",
                            "attackTags": [
                                "No CC (Inf.)","Turret","Shaped Charge"
                            ]
                        },
						{
                            "attackName": "73mm HE-Frag",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R22\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+/4+",
                            "attackStrength": "S3/3",
                            "attackTags": [
                                "No CC (Inf.)","Turret","Ignore Cover (1)"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "9GR1 125mm ATGM",
                    "weaponAmmo": "2",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Vec",
                            "attackRange": "R12-60\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/4+",
                            "attackStrength": "S14/2",
                            "attackTags": [
                                "Guided Missile (2)","MCLOS","Shaped Charge","Turret"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "902V 81mm Smoke Launchers",
                    "weaponAmmo": "1",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Gnd",
                            "attackRange": "R6\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A++/++",
                            "attackStrength": "",
                            "attackTags": [
                                "Light Indirect(1)",
                                "No CC",
                                "Smoke (3\")",
								"Turret"
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
                    "rule": "PC",
                    "params": "2, Rear"
                },
                {
                    "rule": "NBC",
                    "params": ""
                },
                {
                    "rule": "Steel Watchbands",
                    "params": ""
                }
            ]
        },
        {
            "name": "Type 68B Bantam-MK",
            "faction": [
                "federal"
            ],
            "value": 25,
            "stats": [
                "H2",
                "S32\"",
                "M8\"",
                "Q3",
                "T6/4/4"
            ],
            "command": 0,
            "type": {
                "super": [
                    "Vehicle"
                ],
                "sub": [
                    "Tracked",
                    "40x60"
                ]
            },
            "weapons": [
                {
                    "weaponName": "6G2 7.76mm MG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R12\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/4+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Turret"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "2A34 23mm Autocannon",
                    "weaponAmmo": "4",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R32\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/4+",
                            "attackStrength": "S4/6",
                            "attackTags": [
                                "No CC (Inf.)","Turret"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "9GR1 125mm ATGM",
                    "weaponAmmo": "2",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Vec",
                            "attackRange": "R12-60\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/4+",
                            "attackStrength": "S14/2",
                            "attackTags": [
                                "Guided Missile (2)","MCLOS","Shaped Charge","Turret"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "902V 81mm Smoke Launchers",
                    "weaponAmmo": "1",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Gnd",
                            "attackRange": "R6\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A++/++",
                            "attackStrength": "",
                            "attackTags": [
                                "Light Indirect(1)",
                                "No CC",
                                "Smoke (3\")",
								"Turret"
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
                    "rule": "PC",
                    "params": "2, Rear"
                },
                {
                    "rule": "NBC",
                    "params": ""
                },
                {
                    "rule": "Steel Watchbands",
                    "params": ""
                }
            ]
        },
        {
            "name": "Type 40 Veldjen-M",
            "faction": [
                "federal"
            ],
            "value": 20,
            "stats": [
                "H2",
                "S32\"",
                "M6\"",
                "Q2",
                "T8/6/5"
            ],
            "command": 0,
            "type": {
                "super": [
                    "Vehicle"
                ],
                "sub": [
                    "Tracked",
                    "40x60"
                ]
            },
            "weapons": [
                {
                    "weaponName": "6G2 7.76mm MG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R12\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/4+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Turret"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "2K70 57mm High Velocity Gun",
                    "weaponAmmo": "6",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Vec",
                            "attackRange": "R40\"",
                            "attackDice": "1",
                            "attackAccuracy": "A4+/4+",
                            "attackStrength": "S12/18",
                            "attackTags": [
                                "Turret"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "2K15 40mm HE Grenade Launcher",
                    "weaponAmmo": "4",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R14\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/5+",
                            "attackStrength": "S1+/2",
                            "attackTags": [
                                "Ignore Cover (1)",
                                "Multi-Gun"
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
                    "rule": "Steel Watchbands",
                    "params": ""
                }
            ]
        },
        {
            "name": "Type 52 Duck",
            "faction": [
                "federal"
            ],
            "value": 20,
            "stats": [
                "H2",
                "S32\"",
                "M10\"",
                "Q2",
                "T6/4/4"
            ],
            "command": 0,
            "type": {
                "super": [
                    "Vehicle"
                ],
                "sub": [
                    "Tracked",
                    "40x60"
                ]
            },
            "weapons": [
                {
                    "weaponName": "6G2 7.76mm MG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R12\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/4+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Turret"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "2K81 152mm Gun-Launcher",
                    "weaponAmmo": "4",
                    "attacks": [
                        {
                            "attackName": "152mm HEAT",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R32\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+/5+",
                            "attackStrength": "S14/2",
                            "attackTags": [
                                "No CC (Inf.)", "Shaped Charge"
                            ]
                        },
                        {
                            "attackName": "152mm Beehive",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R16\"",
                            "attackDice": "D5",
                            "attackAccuracy": "A4+/5+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Defensive CC (Inf.)"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "902V 81mm Smoke Launchers",
                    "weaponAmmo": "1",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Gnd",
                            "attackRange": "R6\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A++/++",
                            "attackStrength": "",
                            "attackTags": [
                                "Light Indirect(1)",
                                "No CC",
                                "Smoke (3\")",
								"Turret"
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
                    "rule": "Steel Watchbands",
                    "params": ""
                }
            ]
        },
        {
            "name": "Type 52P Mallard",
            "faction": [
                "federal"
            ],
            "value": 20,
            "stats": [
                "H2",
                "S32\"",
                "M10\"",
                "Q3",
                "T4/3/3"
            ],
            "command": 0,
            "type": {
                "super": [
                    "Vehicle"
                ],
                "sub": [
                    "Tracked",
                    "40x60"
                ]
            },
            "weapons": [
                {
                    "weaponName": "2A76 7.76mm Minigun",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R12\"",
                            "attackDice": "D4",
                            "attackAccuracy": "A4+/6+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Turret"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "2K56 76mm Gun",
                    "weaponAmmo": "3",
                    "attacks": [
                        {
                            "attackName": "76mm HVAP",
                            "attackTargets": "Vec",
                            "attackRange": "R32\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+/5+",
                            "attackStrength": "S8/15",
                            "attackTags": [
                                "No CC (Inf.)",
								"Turret"
                            ]
                        },
                        {
                            "attackName": "76mm HE-Frag",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R32\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+/5+",
                            "attackStrength": "S3/3",
                            "attackTags": [
                                "No CC (Inf.)",
								"Turret",
								"Ignore Cover (1)"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "902V 81mm Smoke Launchers",
                    "weaponAmmo": "1",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Gnd",
                            "attackRange": "R6\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A++/++",
                            "attackStrength": "",
                            "attackTags": [
                                "Light Indirect(1)",
                                "No CC",
                                "Smoke (3\")",
								"Turret"
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
                    "rule": "Paradrop",
                    "params": ""
                },
                {
                    "rule": "Steel Watchbands",
                    "params": ""
                }
            ]
        },
        {
            "name": "Type 55M Razorback-M",
            "faction": [
                "federal"
            ],
            "value": 40,
            "stats": [
                "H2",
                "S32\"",
                "M8\"",
                "Q2",
                "T14/7/5"
            ],
            "command": 0,
            "type": {
                "super": [
                    "Vehicle"
                ],
                "sub": [
                    "Tracked",
                    "40x60"
                ]
            },
            "weapons": [
                {
                    "weaponName": "6G2 7.76mm MG, Hull",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R12\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/4+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "6GZ1 14,5mm HMG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R24\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/6+",
                            "attackStrength": "S3/4",
                            "attackTags": [
                                "Turret"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "2K41 100mm Gun",
                    "weaponAmmo": "4",
                    "attacks": [
                        {
                            "attackName": "100mm APDS",
                            "attackTargets": "Vec",
                            "attackRange": "R40\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/4+",
                            "attackStrength": "S12/18",
                            "attackTags": [
                                "No CC (Inf.)",
								"Thermal Sights",
								"Turret"
                            ]
                        },
						{
                            "attackName": "100mm HE-Frag",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R40\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/4+",
                            "attackStrength": "S4/4",
                            "attackTags": [
								"No CC (Inf.)",
								"Thermal Sights",
								"Turret",
                                "Ignore Cover (1)"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "902V 81mm Smoke Launchers",
                    "weaponAmmo": "1",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Gnd",
                            "attackRange": "R6\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A++/++",
                            "attackStrength": "",
                            "attackTags": [
                                "Light Indirect(1)",
                                "No CC",
                                "Smoke (3\")",
								"Turret"
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
                    "rule": "Steel Watchbands",
                    "params": ""
                }
            ]
        },
        {
            "name": "Type 71 Tusker-K",
            "faction": [
                "federal"
            ],
            "value": 50,
            "stats": [
                "H2",
                "S32\"",
                "M8\"",
                "Q3",
                "T16/8/6"
            ],
            "command": 0,
            "type": {
                "super": [
                    "Vehicle"
                ],
                "sub": [
                    "Tracked",
                    "40x60"
                ]
            },
            "weapons": [
                {
                    "weaponName": "6GZ1 14,5mm HMG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R24\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/6+",
                            "attackStrength": "S3/4",
                            "attackTags": [
                                "Turret"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "2K43 115mm Gun",
                    "weaponAmmo": "4",
                    "attacks": [
                        {
                            "attackName": "115mm Sabot",
                            "attackTargets": "Vec",
                            "attackRange": "R40\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A2+/3+",
                            "attackStrength": "S14/21",
                            "attackTags": [
                                "No CC (Inf.)", "Thermal Sights", "Turret"
                            ]
                        },
						{
                            "attackName": "115mm HEAT",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R40\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A2+/3+",
                            "attackStrength": "S11/2",
                            "attackTags": [
                                "Shaped Charge"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "902V 81mm Smoke Launchers",
                    "weaponAmmo": "1",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Gnd",
                            "attackRange": "R6\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A++/++",
                            "attackStrength": "",
                            "attackTags": [
                                "Light Indirect(1)",
                                "No CC",
                                "Smoke (3\")",
								"Turret"
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
                    "rule": "Steel Watchbands",
                    "params": ""
                }
            ]
        },
        {
            "name": "Type 71B Tusker-GM",
            "faction": [
                "federal"
            ],
            "value": 80,
            "stats": [
                "H2",
                "S32\"",
                "M8\"",
                "Q4",
                "T24/12/8"
            ],
            "command": 0,
            "type": {
                "super": [
                    "Vehicle"
                ],
                "sub": [
                    "Tracked",
                    "40x60"
                ]
            },
            "weapons": [
                {
                    "weaponName": "6GZ1 14,5mm HMG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R24\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/6+",
                            "attackStrength": "S3/4",
                            "attackTags": [
								"Thermal Sights",
                                "Turret"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "2K81 152mm Gun-Launcher",
                    "weaponAmmo": "4",
                    "attacks": [
                        {
                            "attackName": "152mm Gun-Launched ATGM",
                            "attackTargets": "Vec",
                            "attackRange": "R12-60\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A2+/xx",
                            "attackStrength": "S18/3",
                            "attackTags": [
                                "No CC (Inf.)","Thermal Sights","Turret","Guided Missile (1)","Shaped Charge"
                            ]
                        },
						{
                            "attackName": "152mm Gun-Launched Thermobaric",
                            "attackTargets": "Gnd",
                            "attackRange": "R12-60\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/xx",
                            "attackStrength": "S3/3",
                            "attackTags": [
                                "No CC (Inf.)","Thermal Sights","Turret","Guided Missile (1)","Ignore Cover (2)", "Radius (2\")","Rear Attack"
                            ]
                        },
						{
                            "attackName": "152mm Tandem Heat",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R40\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A2+/3+",
                            "attackStrength": "S18/3",
                            "attackTags": [
                                "No CC (Inf.)","Thermal Sights","Turret","Shaped Charge"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "902V 81mm Smoke Launchers",
                    "weaponAmmo": "1",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Gnd",
                            "attackRange": "R6\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A++/++",
                            "attackStrength": "",
                            "attackTags": [
                                "Light Indirect(1)",
                                "No CC",
                                "Smoke (3\")",
								"Turret"
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
                    "rule": "Steel Watchbands",
                    "params": ""
                }
            ]
        },
        {
            "name": "2M9 Korenbloem",
            "faction": [
                "federal"
            ],
            "value": 25,
            "stats": [
                "H1",
                "S24\"",
                "M2\"",
                "Q2",
                "T1/1-/1-"
            ],
            "command": 0,
            "type": {
                "super": [
                    "Vehicle"
                ],
                "sub": [
                    "Carriage",
                    "40x60"
                ]
            },
            "weapons": [
                {
                    "weaponName": "6G1 7.76mm Battle Rifle",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R8\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/4+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Small Arm"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "2M9 82mm Automatic Mortar",
                    "weaponAmmo": "6",
                    "attacks": [
                        {
                            "attackName": "82mm HEAT",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R28\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/xx",
                            "attackStrength": "S8/1+",
                            "attackTags": [
                                "Barrage (3)", "No CC", "Shaped Charge"
                            ]
                        },
						{
                            "attackName": "82mm Frag",
                            "attackTargets": "Gnd",
                            "attackRange": "R40\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+/xx",
                            "attackStrength": "S[D3]",
                            "attackTags": [
                                "Barrage (3)", "No CC", "Air-Filling", "Light Indirect (3)","Radius (2\")"
                            ]
                        },
						{
                            "attackName": "82mm Chemical-SP",
                            "attackTargets": "Gnd",
                            "attackRange": "R40\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A++/xx",
                            "attackStrength": "",
                            "attackTags": [
                                "Barrage (3)", "No CC", "Light Indirect (3)","Chemical-SP (2\")"
                            ]
                        },
						{
                            "attackName": "82mm Smoke",
                            "attackTargets": "Gnd",
                            "attackRange": "R40\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A++/xx",
                            "attackStrength": "",
                            "attackTags": [
                                "Barrage (3)", "No CC", "Light Indirect (3)", "Smoke (3\")"
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "",
                    "params": ""
                }
            ]
        },
        {
            "name": "2K52 Wheat",
            "faction": [
                "federal"
            ],
            "value": 25,
            "stats": [
                "H1",
                "S24\"",
                "M2\"",
                "Q2",
                "T2/1-/1-"
            ],
            "command": 0,
            "type": {
                "super": [
                    "Vehicle"
                ],
                "sub": [
                    "Carriage",
                    "40x60"
                ]
            },
            "weapons": [
                {
                    "weaponName": "6G1 7.76mm Battle Rifle",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R8\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/4+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Small Arm"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "2K52 152mm Howitzer",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "152mm HEAT",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R40\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/xx",
                            "attackStrength": "S14/2",
                            "attackTags": [
                                "No CC","Shaped Charge"
                            ]
                        },
						{
                            "attackName": "152mm Frag",
                            "attackTargets": "Gnd",
                            "attackRange": "R∞\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4++/xx",
                            "attackStrength": "S[D6]",
                            "attackTags": [
                                "No CC", "Air-Filling","Heavy Indirect (3)","Radius (3\")"
                            ]
                        },
						{
                            "attackName": "152mm Chemical-SP",
                            "attackTargets": "Gnd",
                            "attackRange": "R∞\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A++/xx",
                            "attackStrength": "",
                            "attackTags": [
                                "No CC", "Chemical-SP (4\")","Heavy Indirect (3)"
                            ]
                        },
						{
                            "attackName": "152mm Smoke",
                            "attackTargets": "Gnd",
                            "attackRange": "R∞\"",
                            "attackDice": "D4",
                            "attackAccuracy": "A++/xx",
                            "attackStrength": "",
                            "attackTags": [
                                "No CC", "Heavy Indirect (3)", "Smoke (3\")"
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "",
                    "params": ""
                }
            ]
        },
        {
            "name": "Type 60AT Runner",
            "faction": [
                "federal"
            ],
            "value": 25,
            "stats": [
                "H2",
                "S32\"",
                "M8\"",
                "Q2",
                "T4/4/3"
            ],
            "command": 0,
            "type": {
                "super": [
                    "Vehicle"
                ],
                "sub": [
                    "Wheeled",
                    "40x60"
                ]
            },
            "weapons": [
                {
                    "weaponName": "6G2 7.76mm MG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R12\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/4+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Turret"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "9GR1M 125mm ATGM Rack",
                    "weaponAmmo": "6",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Vec",
                            "attackRange": "R12-60\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/xx",
                            "attackStrength": "S16/3",
                            "attackTags": [
                                "Barrage (3, point)","Guided Missile (2)","MCLOS","Shaped Charge","Turret"
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
                    "rule": "PC",
                    "params": "2, Rear"
                }
            ]
        },
        {
            "name": "Type 52LW Firehose",
            "faction": [
                "federal"
            ],
            "value": 30,
            "stats": [
                "H2",
                "S32\"",
                "M10\"",
                "Q3",
                "T6/4/4"
            ],
            "command": 0,
            "type": {
                "super": [
                    "Vehicle"
                ],
                "sub": [
                    "Tracked",
                    "40x60"
                ]
            },
            "weapons": [
                {
                    "weaponName": "6P3 11.5mm SMG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R8\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A5+/5+",
                            "attackStrength": "S1-/1",
                            "attackTags": [
                                "Small Arm"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "2A37 37mm Rotary Cannon",
                    "weaponAmmo": "4",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R36\"",
                            "attackDice": "D3",
                            "attackAccuracy": "A4+/4+",
                            "attackStrength": "S5/7",
                            "attackTags": [
                                "No CC (Inf.)","Radar Anti-Air","Tracking","Turret"
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
                }
            ]
        },
        {
            "name": "Type 60MD Wave",
            "faction": [
                "federal"
            ],
            "value": 30,
            "stats": [
                "H2",
                "S24\"",
                "M8\"",
                "Q2",
                "T4/4/3"
            ],
            "command": 0,
            "type": {
                "super": [
                    "Vehicle"
                ],
                "sub": [
                    "Wheeled",
                    "40x60"
                ]
            },
            "weapons": [
                {
                    "weaponName": "6G2 7.76mm MG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R12\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/4+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Turret"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "2M9 82mm Automatic Mortar (82mm Frag, 82mm Chemical-SP, 82mm Smoke)",
                    "weaponAmmo": "6",
                    "attacks": [
                        {
                            "attackName": "82mm Frag",
                            "attackTargets": "Gnd",
                            "attackRange": "R40\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+/5+",
                            "attackStrength": "S[D3]",
                            "attackTags": [
                                "Barrage (3)","Light Indirect (3)","No CC","Air-Filling","Radius (2\")"
                            ]
                        },
						{
                            "attackName": "82mm Chemical-SP",
                            "attackTargets": "Gnd",
                            "attackRange": "R40\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A++/++",
                            "attackStrength": "",
                            "attackTags": [
                                "Barrage (3)","Light Indirect (3)","No CC","Chemical-SP(2\")"
                            ]
                        },
						{
                            "attackName": "82mm Smoke",
                            "attackTargets": "Gnd",
                            "attackRange": "R40\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A++/++",
                            "attackStrength": "",
                            "attackTags": [
                                "Barrage (3)","Light Indirect (3)","No CC","Smoke {3\")"
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
                    "rule": "PC",
                    "params": "2, Rear"
                }
            ]
        },
        {
            "name": "Type 71H Tusker-AV",
            "faction": [
                "federal"
            ],
            "value": 50,
            "stats": [
                "H2",
                "S32\"",
                "M8\"",
                "Q3",
                "T14/6/6"
            ],
            "command": 0,
            "type": {
                "super": [
                    "Vehicle"
                ],
                "sub": [
                    "Tracked",
                    "40x60"
                ]
            },
            "weapons": [
                {
                    "weaponName": "6GZ1 14,5mm HMG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R24\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/6+",
                            "attackStrength": "S3/4",
                            "attackTags": [
                                "Turret"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "2K52 152mm Howitzer",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "152mm HEAT",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R40\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/xx",
                            "attackStrength": "S14/2",
                            "attackTags": [
                                "No CC","Shaped Charge"
                            ]
                        },
						{
                            "attackName": "152mm Frag",
                            "attackTargets": "Gnd",
                            "attackRange": "R∞\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4++/xx",
                            "attackStrength": "S[D6]",
                            "attackTags": [
                                "No CC", "Air-Filling","Heavy Indirect (3)","Radius (3\")"
                            ]
                        },
						{
                            "attackName": "152mm Chemical-SP",
                            "attackTargets": "Gnd",
                            "attackRange": "R∞\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A++/xx",
                            "attackStrength": "",
                            "attackTags": [
                                "No CC", "Chemical-SP (4\")","Heavy Indirect (3)"
                            ]
                        },
						{
                            "attackName": "152mm Smoke",
                            "attackTargets": "Gnd",
                            "attackRange": "R∞\"",
                            "attackDice": "D4",
                            "attackAccuracy": "A++/xx",
                            "attackStrength": "",
                            "attackTags": [
                                "No CC", "Heavy Indirect (3)", "Smoke (3\")"
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
                    "rule": "Steel Watchbands",
                    "params": ""
                }
            ]
        },
        {
            "name": "S36 Paddle",
            "faction": [
                "federal"
            ],
            "value": 15,
            "stats": [
                "H2",
                "S32\"",
                "M8\"",
                "Q2",
                "T3/3/1+"
            ],
            "command": 0,
            "type": {
                "super": [
                    "Vehicle"
                ],
                "sub": [
                    "Watercraft",
                    "40x60"
                ]
            },
            "weapons": [
                {
                    "weaponName": "6GZ1 14,5mm HMG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R24\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/6+",
                            "attackStrength": "S3/4",
                            "attackTags": [
                                "Turret"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "6G2 7.76mm MG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R12\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/4+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
								"Multi-Gun",
                                "Turret"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "2K15 40mm HE Grenade Launcher",
                    "weaponAmmo": "4",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R14\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/5+",
                            "attackStrength": "S1+/2",
                            "attackTags": [
                                "Ignore Cover (1)",
                                "Multi-Gun", "Turret"
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "PC",
                    "params": "3, Any"
                }
            ]
        },
        {
            "name": "HzN-18 Moose",
            "faction": [
                "federal"
            ],
            "value": 15,
            "stats": [
                "H2",
                "S32\"",
                "M32\"",
                "Q2",
                "T1+/1+/1+"
            ],
            "command": 0,
            "type": {
                "super": [
                    "Helicopter"
                ],
                "sub": [
                    "40x60"
                ]
            },
            "weapons": [
                {
                    "weaponName": "6G2 7.76mm MG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R12\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/4+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Door Gun (Sides)"
                            ]
                        }
                    ]
                },
            ],
            "tags": [
                {
                    "rule": "PC",
                    "params": "2, Sides"
                }
            ]
        },
        {
            "name": "HzN-22 Hugag",
            "faction": [
                "federal"
            ],
            "value": 20,
            "stats": [
                "H2",
                "S32\"",
                "M24\"",
                "Q2",
                "T2/2/2"
            ],
            "command": 0,
            "type": {
                "super": [
                    "Helicopter"
                ],
                "sub": [
                    "40x60"
                ]
            },
            "weapons": [
                {
                    "weaponName": "2A76 7.76mm Minigun",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R12\"",
                            "attackDice": "D4",
                            "attackAccuracy": "A4+/6+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Door Gun (Sides)"
                            ]
                        }
                    ]
                },
            ],
            "tags": [
                {
                    "rule": "PC",
                    "params": "6, Sides"
                },
                {
                    "rule": "Resupply",
                    "params": "6"
                },
                {
                    "rule": "Tow",
                    "params": "2"
                }
            ]
        },
        {
            "name": "HzN-18B Bison",
            "faction": [
                "federal"
            ],
            "value": 25,
            "stats": [
                "H2",
                "S32\"",
                "M32\"",
                "Q3",
                "T2/2/2"
            ],
            "command": 0,
            "type": {
                "super": [
                    "Helicopter"
                ],
                "sub": [
                    "40x60"
                ]
            },
            "weapons": [
                {
                    "weaponName": "2A76 7.76mm Minigun",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R12\"",
                            "attackDice": "D4",
                            "attackAccuracy": "A4+/6+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Turret"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "2K15 40mm HEDP Grenade Launcher",
                    "weaponAmmo": "3",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R14\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/5+",
                            "attackStrength": "S5/1+",
                            "attackTags": [
                                "Shaped Charge"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "9GR1 125mm ATGM",
                    "weaponAmmo": "2",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Vec",
                            "attackRange": "R12-60\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/4+",
                            "attackStrength": "S14/2",
                            "attackTags": [
                                "Guided Missile (2)","MCLOS","Shaped Charge"
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
                    "params": "1, Sides"
                }
            ]
        },
        {
            "name": "SiG-17 Hardnose",
            "faction": [
                "federal"
            ],
            "value": 20,
            "stats": [
                "H*",
                "S*\"",
                "M10\"",
                "Q2",
                "T3",
                "E0"
            ],
            "command": 0,
            "type": {
                "super": [
                    "Aircraft"
                ],
                "sub": [
                    "CAS",
                    "40x60"
                ]
            },
            "weapons": [
                {
                    "weaponName": "6G2 7.76mm MG, octet",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R2\"",
                            "attackDice": "D3",
                            "attackAccuracy": "A4+",
                            "attackStrength": "S1",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "4BB2 350kg Dual-Purpose Cluster Bomb",
                    "weaponAmmo": "6",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Gnd",
                            "attackRange": "R0\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A2+",
                            "attackStrength": "S6/1",
                            "attackTags": [
                                "Rear Attack", "Saturating (6\")","Shaped Charge"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "9GR6 200mm Beam-Riding AAM",
                    "weaponAmmo": "4",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Air",
                            "attackRange": "R50\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A5+",
                            "attackStrength": "S6",
                            "attackTags": [
                                "Air-Filling","Guided Missile (2)","Barrage (2)", "No CC"
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "",
                    "params": ""
                }
            ]
        },
        {
            "name": "SiG-16 Rufe",
            "faction": [
                "federal"
            ],
            "value": 20,
            "stats": [
                "H*",
                "S*\"",
                "M10\"",
                "Q2",
                "T4",
                "E1"
            ],
            "command": 0,
            "type": {
                "super": [
                    "Aircraft"
                ],
                "sub": [
                    "CAP",
                    "40x60"
                ]
            },
            "weapons": [
                {
                    "weaponName": "2A34 23mm Autocannons, triplet",
                    "weaponAmmo": "3",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R8\"",
                            "attackDice": "D3",
                            "attackAccuracy": "A4+",
                            "attackStrength": "S4",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "4BN2 350kg Napalm Bomb",
                    "weaponAmmo": "2",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Gnd",
                            "attackRange": "R0\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A3+",
                            "attackStrength": "S1+",
                            "attackTags": [
                                "Barrage (2)","Ignore Cover (2)","Lingering","Radius (2\")", "Rear Attack"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "9GR4 120mm Infrared AAM",
                    "weaponAmmo": "2",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Air",
                            "attackRange": "R24\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+",
                            "attackStrength": "S6",
                            "attackTags": [
                                "Air-Filling",
								"Guided Missile (1)",
								"Homing"
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "Sprint Motor",
                    "params": ""
                }
            ]
        },
        {
            "name": "SiG-16B Schroef",
            "faction": [
                "federal"
            ],
            "value": 30,
            "stats": [
                "H*",
                "S*\"",
                "M10\"",
                "Q2",
                "T4",
                "E0"
            ],
            "command": 0,
            "type": {
                "super": [
                    "Aircraft"
                ],
                "sub": [
                    "CAS",
                    "40x60"
                ]
            },
            "weapons": [
                {
                    "weaponName": "2A40 37mm Autocannons, triplet",
                    "weaponAmmo": "3",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R8\"",
                            "attackDice": "D3",
                            "attackAccuracy": "A4+",
                            "attackStrength": "S5",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "4BE1 500kg HE Bomb",
                    "weaponAmmo": "2",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Gnd",
                            "attackRange": "R0\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+",
                            "attackStrength": "S8",
                            "attackTags": [
                                "Air-Filling","Barrage (2)","Radius (3\")","Rear Attack"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "9GR3 275mm AGM",
                    "weaponAmmo": "2",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Vec",
                            "attackRange": "R50\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+",
                            "attackStrength": "S24/8",
                            "attackTags": [
                                "Guided Missile (2)", "MCLOS", "Shaped Charge", "Thermal Sights"
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
                    "rule": "Sprint Motor",
                    "params": ""
                }
            ]
        }
]

export default fedlist