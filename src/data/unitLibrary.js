const list = {
    "units": [
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
        },
        {
            "name": "Company Chief",
            "faction": [
                "lupar"
            ],
            "value": 0,
            "stats": [
                "H1",
                "S24\"",
                "M5\"",
                "Q4",
                "T1+/1/1",
                "C3"
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
            "command": 3,
            "weapons": [
                {
                    "weaponName": "Mle. 38 .30 LMG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R10\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/5+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Small Arm"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Mle. 44 3.5-inch RPG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R8\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+/6+",
                            "attackStrength": "S8/1",
                            "attackTags": [
                                "Shaped Charge","Small Arm"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "OtPv. 9 30-inch Machete",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Inf",
                            "attackRange": "R0\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A1+/1+",
                            "attackStrength": "S1/1",
                            "attackTags": [
                                "Melee"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Stimulant-Laced Bomb, \"Signal Salt\"",
                    "weaponAmmo": "1",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Gnd",
                            "attackRange": "R6\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A++/++",
                            "attackStrength": "",
                            "attackTags": [
                                "Light Indirect (0)","Radius(3\")","Rally(Salt)","Small Arm"
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
                    "rule": "Bloodlust",
                    "params": ""
                },
                {
                    "rule": "Infiltrator",
                    "params": ""
                },
                {
                    "rule": "Sense",
                    "params": "6\""
                },
                {
                    "rule": "Brigade",
                    "params": "4, 8\""
                }
            ]
        },
        {
            "name": "Internal Security Escort",
            "faction": [
                "lupar"
            ],
            "value": 15,
            "stats": [
                "H1",
                "S16\"",
                "M4\"",
                "Q5",
                "T2/1+/1+",
                "C4"
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
            "command": 4,
            "weapons": [
                {
                    "weaponName": "FdcL 63 4-gauge Shotgun",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "4-Gauage Houndshot",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R6\"",
                            "attackDice": "D3",
                            "attackAccuracy": "A4+/4+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Small Arm"
                            ]
                        },
						{
                            "attackName": "4-Gauge Rifled Slug",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R6\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/3+",
                            "attackStrength": "S2/3",
                            "attackTags": [
                                "Small Arm"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "PtDs. 13 Tactical Breaching Charge",
                    "weaponAmmo": "2",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Vec",
                            "attackRange": "R0\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A1+/1+",
                            "attackStrength": "S12/12",
                            "attackTags": [
                                "Melee"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "OtPv. 9 30-inch Machete",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Inf",
                            "attackRange": "R0\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A1+/1+",
                            "attackStrength": "S1/1",
                            "attackTags": [
                                "Melee"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Stimulant-Laced Filter \"Signal Snuff\"",
                    "weaponAmmo": "1",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Inf (Self)",
                            "attackRange": "R0\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A++/++",
                            "attackStrength": "",
                            "attackTags": [
                                "Discreet","Rally","This attack may only target self."
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
                    "rule": "Assault Specialist",
                    "params": ""
                },
                {
                    "rule": "Brigade",
                    "params": "3, 4\""
                },
                {
                    "rule": "NBC",
                    "params": ""
                }
            ]
        },
        {
            "name": "Waykeeper Judge",
            "faction": [
                "lupar"
            ],
            "value": 20,
            "stats": [
                "H1",
                "S24\"",
                "M4\"",
                "Q5",
                "T1/1/1",
                "C5"
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
            "command": 5,
            "weapons": [
                {
                    "weaponName": "Mle. 32 .30 Self-Loading Rifle",
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
                                "Multi-Gun","Small Arm"
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
                            "attackTargets": "Inf",
                            "attackRange": "R0\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A1+/1+",
                            "attackStrength": "S1/1",
                            "attackTags": [
                                "Melee"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Stimulant-Laced Bomb, \"Signal Salt\"",
                    "weaponAmmo": "1",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Gnd",
                            "attackRange": "R6\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A++/++",
                            "attackStrength": "",
                            "attackTags": [
                                "Light Indirect (0)","Radius(3\")","Rally(Salt)","Small Arm"
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
                    "rule": "Guidance",
                    "params": "12\""
                },
                {
                    "rule": "Infiltrator",
                    "params": ""
                },
                {
                    "rule": "Sense",
                    "params": "8\""
                },
                {
                    "rule": "Brigade",
                    "params": "3, 12\""
                },
                {
                    "rule": "While this unit is alive, no unit in this army can willingly go Berserk. Only Judges may call Exhortation support Missions.",
                    "params": ""
                }
            ]
        },
        {
            "name": "Territorials",
            "faction": [
                "lupar"
            ],
            "value": 5,
            "stats": [
                "H1",
                "S24\"",
                "M5\"",
                "Q2",
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
                    "weaponName": "Mle. 32 .30 Self-Loading Rifle",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R8\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+/4+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Small Arm"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "OtPv. 9 30-inch Machete",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Inf",
                            "attackRange": "R0\"",
                            "attackDice": "D2",
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
                    "rule": "Amphibious",
                    "params": ""
                },
                {
                    "rule": "Bloodlust",
                    "params": ""
                },
                {
                    "rule": "Infiltrator",
                    "params": ""
                },
                {
                    "rule": "Sense",
                    "params": "6\""
                }
            ]
        },
        {
            "name": "Chasseurs",
            "faction": [
                "lupar"
            ],
            "value": 10,
            "stats": [
                "H1",
                "S24\"",
                "M5\"",
                "Q2",
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
                    "weaponName": "Mle. 38 .30 LMG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R10\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/5+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Small Arm"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Mle. 44 3.5-inch RPG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R8\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+/6+",
                            "attackStrength": "S8/1",
                            "attackTags": [
                                "Shaped Charge","Small Arm"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "OtPv. 9 30-inch Machete",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Inf",
                            "attackRange": "R0\"",
                            "attackDice": "D2",
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
                    "rule": "Bloodlust",
                    "params": ""
                },
                {
                    "rule": "Infiltrator",
                    "params": ""
                },
                {
                    "rule": "Sense",
                    "params": "6\""
                }
            ]
        },
        {
            "name": "White Gloves",
            "faction": [
                "lupar"
            ],
            "value": 20,
            "stats": [
                "H1",
                "S24\"",
                "M5\"",
                "Q4",
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
                    "weaponName": "Mle. 52F .30 Automatic Rifle",
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
                    "weaponName": "Lacra 3.5-inch Shouldered R.R.",
                    "weaponAmmo": "4",
                    "attacks": [
                        {
                            "attackName": "3.5-inch Rocket-Assisted Sabot",
                            "attackTargets": "Vec",
                            "attackRange": "R20\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/5+",
                            "attackStrength": "S8/12",
                            "attackTags": [
                                "Small Arm"
                            ]
                        },
						{
                            "attackName": "3.5-inch HEAT",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R16\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/5+",
                            "attackStrength": "S9/1+",
                            "attackTags": [
                                "Small Arm", "Shaped Charge"
                            ]
                        },
						{
                            "attackName": "3.5-inch Incendiary",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R16\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/5+",
                            "attackStrength": "S1+/1+",
                            "attackTags": [
                                "Small Arm", "Ignore Cover (2)","Rear Attack"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Mle. 7 Laser Designator",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R40\"",
                            "attackDice": "",
                            "attackAccuracy": "A++/xx",
                            "attackStrength": "",
                            "attackTags": [
                                "Designator","Discreet"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Mle. 313 26-inch Side Saber",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Inf",
                            "attackRange": "R0\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A1+/1+",
                            "attackStrength": "S1+/1+",
                            "attackTags": [
                                "Melee"
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "Bloodlust",
                    "params": ""
                },
                {
                    "rule": "Fearless",
                    "params": ""
                },
                {
                    "rule": "Sense",
                    "params": "6\""
                }
            ]
        },
        {
            "name": "Internal Security",
            "faction": [
                "lupar"
            ],
            "value": 20,
            "stats": [
                "H1",
                "S16\"",
                "M4\"",
                "Q4",
                "T2/1+/1+"
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
                    "weaponName": "FdcL 63 4-gauge Shotgun",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "4-Gauage Houndshot",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R6\"",
                            "attackDice": "D3",
                            "attackAccuracy": "A4+/4+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Small Arm"
                            ]
                        },
						{
                            "attackName": "4-Gauge Rifled Slug",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R6\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/3+",
                            "attackStrength": "S2/3",
                            "attackTags": [
                                "Small Arm"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "PtDs. 13 Tactical Breaching Charge",
                    "weaponAmmo": "2",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Vec",
                            "attackRange": "R0\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A1+/1+",
                            "attackStrength": "S12/12",
                            "attackTags": [
                                "Melee"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "OtPv. 9 30-inch Machete",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Inf",
                            "attackRange": "R0\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A1+/1+",
                            "attackStrength": "S1/1",
                            "attackTags": [
                                "Melee"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Stimulant-Laced Filter \"Signal Snuff\"",
                    "weaponAmmo": "1",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Inf (Self)",
                            "attackRange": "R0\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A++/++",
                            "attackStrength": "",
                            "attackTags": [
                                "Discreet","Rally","This attack may only target self."
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
                    "rule": "NBC",
                    "params": ""
                }
            ]
        },
        {
            "name": "Machine Gun Team",
            "faction": [
                "lupar"
            ],
            "value": 10,
            "stats": [
                "H1",
                "S24\"",
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
                    "weaponName": "Mle. 32 .30 Self-Loading Rifle",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R8\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+/4+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Small Arm"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Mtl. 19 .50 HMG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R20\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/6+",
                            "attackStrength": "S2/3",
                            "attackTags": [
                                "Defensive CC"
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "Bloodlust",
                    "params": ""
                },
                {
                    "rule": "Infiltrator",
                    "params": ""
                },
                {
                    "rule": "Sense",
                    "params": "6\""
                }
            ]
        },
        {
            "name": "Hima Team",
            "faction": [
                "lupar"
            ],
            "value": 15,
            "stats": [
                "H1",
                "S24\"",
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
                    "weaponName": "Mle. 32 .30 Self-Loading Rifle",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R8\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+/4+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Small Arm"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Lacra-76 \"Hima\" 3-inch Launcher",
                    "weaponAmmo": "4",
                    "attacks": [
                        {
                            "attackName": "3-inch HEAT",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R8\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+/xx",
                            "attackStrength": "S8/1+",
                            "attackTags": [
                                "Shaped Charge"
                            ]
                        },
						{
                            "attackName": "3-inch Frag",
                            "attackTargets": "Gnd",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        },
						{
                            "attackName": "3-inch Smoke",
                            "attackTargets": "Gnd",
                            "attackRange": "",
                            "attackDice": "",
                            "attackAccuracy": "",
                            "attackStrength": "",
                            "attackTags": [
                                ""
                            ]
                        },
						{
                            "attackName": "3-inch Signal Salt",
                            "attackTargets": "Gnd",
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
                    "rule": "Bloodlust",
                    "params": ""
                },
                {
                    "rule": "Sense",
                    "params": "6\""
                }
            ]
        },
        {
            "name": "Recoilless Rifle Team",
            "faction": [
                "lupar"
            ],
            "value": 15,
            "stats": [
                "H1",
                "S24\"",
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
                    "weaponName": "Mle. 32 .30 Self-Loading Rifle",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R8\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+/4+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Small Arm"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "TAP 20 3-inch Recoilless Rifle",
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
                    "rule": "Bloodlust",
                    "params": ""
                },
                {
                    "rule": "Infiltrator",
                    "params": ""
                },
                {
                    "rule": "Sense",
                    "params": "6\""
                }
            ]
        },
        {
            "name": "Guided Missile Team",
            "faction": [
                "lupar"
            ],
            "value": 20,
            "stats": [
                "H1",
                "S32\"",
                "M8\"",
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
                    "weaponName": "Mle. 32 .30 Self-Loading Rifle",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R8\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+/4+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Small Arm"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "SD84 4.7-inch Missile Launcher",
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
                    "rule": "Bloodlust",
                    "params": ""
                },
                {
                    "rule": "Sense",
                    "params": "6\""
                }
            ]
        },
        {
            "name": "Subaltern Team",
            "faction": [
                "lupar"
            ],
            "value": 10,
            "stats": [
                "H1",
                "S32\"",
                "M8\"",
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
                    "weaponName": "Mle. 32 .30 Self-Loading Rifle",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R8\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+/4+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Small Arm"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "OtPv. 9 30-inch Machete",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Inf",
                            "attackRange": "R0\"",
                            "attackDice": "D2",
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
                    "rule": "Bloodlust",
                    "params": ""
                },
                {
                    "rule": "Infiltrator",
                    "params": ""
                },
                {
                    "rule": "Sense",
                    "params": "6\""
                },
                {
                    "rule": "Brigade",
                    "params": "2, 4\""
                }
            ]
        },
        {
            "name": "Made-To-Orders",
            "faction": [
                "lupar"
            ],
            "value": 10,
            "stats": [
                "H1",
                "S32\"",
                "M8\"",
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
                    "weaponName": "Mutated Teeth & Claws",
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
                    "rule": "Bloodlust",
                    "params": ""
                },
                {
                    "rule": "Tow",
                    "params": "2"
                },
                {
                    "rule": "Sense",
                    "params": "6\""
                },
                {
                    "rule": "If depleted, loses its depletion token at the end of round after winning a close combat.",
                    "params": ""
                }
            ]
        },
        {
            "name": "Waykeepers",
            "faction": [
                "lupar"
            ],
            "value": 15,
            "stats": [
                "H1",
                "S24\"",
                "M5\"",
                "Q4",
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
                    "weaponName": "Mle. 32 .30 Self-Loading Rifle",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R8\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+/4+",
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
                    "weaponName": "Stimulant-Laced Bomb, \"Signal Salt\"",
                    "weaponAmmo": "1",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Gnd",
                            "attackRange": "R6\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A++/++",
                            "attackStrength": "",
                            "attackTags": [
                                "Light Indirect (0)","Radius(3\")","Rally(Salt)","Small Arm"
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
                    "rule": "Guidance",
                    "params": "12\""
                },
                {
                    "rule": "Infiltrator",
                    "params": ""
                },
                {
                    "rule": "Sense",
                    "params": "8\""
                }
            ]
        },
        {
            "name": "Bounders",
            "faction": [
                "lupar"
            ],
            "value": 20,
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
                    "weaponName": "Mle. 32 .30 Self-Loading Rifle",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R8\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+/4+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Small Arm"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "APX-25 1-inch Anti-Tank Rifle",
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
                    "rule": "Bloodlust",
                    "params": ""
                },
                {
                    "rule": "Infiltrator",
                    "params": ""
                },
                {
                    "rule": "Sense",
                    "params": "6\""
                }
            ]
        },
        {
            "name": "CdS-F1 Kennel",
            "faction": [
                "lupar"
            ],
            "value": 10,
            "stats": [
                "H2",
                "S16\"",
                "M8\"",
                "Q2",
                "T2/2/1"
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
                    "weaponName": "Mtl. 19 .50 HMG",
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
            "name": "VBD-U Denmother",
            "faction": [
                "lupar"
            ],
            "value": 5,
            "stats": [
                "H1",
                "S16\"",
                "M8\"",
                "Q2",
                "T3/2/1+"
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
                    "weaponName": "Lenus Automatic .45, driver issue",
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
                    "rule": "This unit cannot have embarked units and desants at the same time.",
                    "params": ""
                },
                {
                    "rule": "Embarked Units can fire any non-Melee weapon as if it were a Small Arm and are identified with the vehicle.",
                    "params": ""
                },
                {
                    "rule": "Units embarked may spot and be spotted by Sense.",
                    "params": ""
                }
            ]
        },
        {
            "name": "VBD-1 Tanner",
            "faction": [
                "lupar"
            ],
            "value": 10,
            "stats": [
                "H2",
                "S32\"",
                "M8\"",
                "Q2",
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
                    "weaponName": "Mtl. 19 .50 HMG",
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
            "name": "VBD-2 Rawhide",
            "faction": [
                "lupar"
            ],
            "value": 20,
            "stats": [
                "H2",
                "S32\"",
                "M8\"",
                "Q2",
                "T5/4/4"
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
                    "weaponName": "Mtl. 19 .50 HMG",
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
                    "weaponName": "APX-30 1-inch Autocannon",
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
                    "weaponName": "Mle. 254 2.3-inch Smoke Launchers",
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
            "name": "VBD-3 Motte",
            "faction": [
                "lupar"
            ],
            "value": 20,
            "stats": [
                "H2",
                "S32\"",
                "M8\"",
                "Q3",
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
                    "weaponName": "Mle. 38C .30 MG, swivels",
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
                    "weaponName": "Mtl. 19 .50-HMG",
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
                    "weaponName": "Mle. 254 2.3-inch Smoke Launchers",
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
                    "params": "2, Rear, Front"
                }
            ]
        },
        {
            "name": "Char 30 Veldjen",
            "faction": [
                "lupar"
            ],
            "value": 20,
            "stats": [
                "H2",
                "S32\"",
                "M8\"",
                "Q2",
                "T10/6/5"
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
                    "weaponName": "Mle. 38C .30 MG",
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
                    "weaponName": "SA19 3-inch Gun",
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
                    "weaponName": "LF4 Sponson Flamethrower",
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
            "name": "Char 38 Borvo",
            "faction": [
                "lupar"
            ],
            "value": 40,
            "stats": [
                "H2",
                "S32\"",
                "M8\"",
                "Q2",
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
                    "weaponName": "Mle. 38C .30 MG",
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
                    "weaponName": "SA19B 3-inch Dual Guns",
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
                    "weaponName": "Mle. 254 2.3-inch Smoke Launchers",
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
            "name": "DAG-8 Blossom",
            "faction": [
                "lupar"
            ],
            "value": 15,
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
                    "40x60"
                ]
            },
            "command": 0,
            "weapons": [
                {
                    "weaponName": "Mle. 38 .30 LMG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R10\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/5+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Small Arm"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "DAG-8 3.3-inch Gun",
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
                    "rule": "",
                    "params": ""
                }
            ]
        },
        {
            "name": "VBD-1b Tanner-R",
            "faction": [
                "lupar"
            ],
            "value": 15,
            "stats": [
                "H2",
                "S32\"",
                "M8\"",
                "Q2",
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
                    "weaponName": "TAP 30 4.2-inch Recoilless Rifle",
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
            "name": "CdA-25 Saucer",
            "faction": [
                "lupar"
            ],
            "value": 20,
            "stats": [
                "H1",
                "S32\"",
                "M8\"",
                "Q2",
                "T6/3/2"
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
                    "weaponName": "Mtl. 19 .50 HMG",
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
                    "weaponName": "SA25 2.5-inch High Velocity Gun",
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
            "name": "DAG-16 Cherry",
            "faction": [
                "lupar"
            ],
            "value": 25,
            "stats": [
                "H1",
                "S24\"",
                "M2\"",
                "Q2",
                "T1/1-/1-"
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
                    "weaponName": "Mle. 32 .30 Self-Loading Rifle",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R8\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+/4+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Small Arm"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "DAG-16 7.8-inch Howitzer",
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
                    "rule": "",
                    "params": ""
                }
            ]
        },
        {
            "name": "VBD Special Lugus",
            "faction": [
                "lupar"
            ],
            "value": 25,
            "stats": [
                "H1",
                "S32\"",
                "M8\"",
                "Q3",
                "T3/2/1+"
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
                    "weaponName": "Lenus Automatic .45, driver issue",
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
                    "weaponName": "TAP 25 4.2-inch  Recoilless Rifle Battery",
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
                    "rule": "",
                    "params": ""
                }
            ]
        },
        {
            "name": "CdA-36 Broomcloud",
            "faction": [
                "lupar"
            ],
            "value": 25,
            "stats": [
                "H2",
                "S32\"",
                "M10\"",
                "Q3",
                "T5/3/1+"
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
                    "weaponName": "Mle. 32 .30 Self-Loading Rifle",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R8\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+/4+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Small Arm"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "APX-40 1.5-inch Autocannon",
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
                    "rule": "",
                    "params": ""
                }
            ]
        },
        {
            "name": "CdS-F2  Aurora",
            "faction": [
                "lupar"
            ],
            "value": 30,
            "stats": [
                "H2",
                "S16\"",
                "M8\"",
                "Q2",
                "T2/2/1"
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
                    "weaponName": "Mle. 32 .30 Self-Loading Rifle",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R8\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+/4+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Small Arm"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Mle. 13 5.2-inch Rocket Rack",
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
                    "rule": "",
                    "params": ""
                }
            ]
        },
        {
            "name": "VdIM-K Karve",
            "faction": [
                "lupar"
            ],
            "value": 10,
            "stats": [
                "H1",
                "S32\"",
                "M12\"",
                "Q2",
                "T2/2/1"
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
                    "weaponName": "Mtl. 19 .50 HMG",
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
                    "params": "4, Any"
                }
            ]
        },
        {
            "name": "VZ61 Chariots",
            "faction": [
                "lupar"
            ],
            "value": 15,
            "stats": [
                "H1",
                "S24\"",
                "M18\"",
                "Q2",
                "T1+/1/1"
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
                    "weaponName": "Mle. 38 .30 LMG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R10\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/5+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Small Arm"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Mle. 44 3.5-inch RPG",
                    "weaponAmmo": "",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R8\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+/6+",
                            "attackStrength": "S8/1",
                            "attackTags": [
                                "Shaped Charge","Small Arm"
                            ]
                        }
                    ]
                }
            ],
            "tags": [
                {
                    "rule": "This unit may depleted as if it were an Infantry Squad.",
                    "params": ""
                },
                {
                    "rule": "When landed this unit counts as an Infantry Squad.",
                    "params": ""
                },
                {
                    "rule": "This unit may fire all weapons and enter Close Combat as if were Infantry",
                    "params": ""
                },
                {
                    "rule": "This unit may land in Forests and inside Buildings as a squad-sized garrison.",
                    "params": ""
                }
            ]
        },
        {
            "name": "AES514 Backbone",
            "faction": [
                "lupar"
            ],
            "value": 20,
            "stats": [
                "H2",
                "S32\"",
                "M24\"",
                "Q2",
                "T3/2/3"
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
                    "params": "3"
                },
                {
                    "rule": "PC",
                    "params": "2, Sides"
                },
                {
                    "rule": "Tow",
                    "params": "10"
                },
                {
                    "rule": "Embarked units can fire any one non-Melee Weapon as if it were a Small Arm and are identified with the vehicle.",
                    "params": ""
                },
                {
                    "rule": "Units embarked may spot and be spotted by Sense.",
                    "params": ""
                }
            ]
        },
        {
            "name": "AES805 Tornado",
            "faction": [
                "lupar"
            ],
            "value": 30,
            "stats": [
                "H1",
                "S32\"",
                "M32\"",
                "Q3",
                "T2/2/2"
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
                    "weaponName": "APX-30 1-inch Autocannon",
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
                    "weaponName": "SD84 4.7-inch Missile Launcher",
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
        },
        {
            "name": "R-2 Chien De Chasse",
            "faction": [
                "lupar"
            ],
            "value": 10,
            "stats": [
                "H*",
                "S*\"",
                "M10\"",
                "Q2",
                "T2",
                "E0"
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
                    "weaponName": "Mtl. 19 .50 HMGs, dual",
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
                    "weaponName": "Mle. 7 Laser Designator",
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
                    "rule": "Loiter",
                    "params": ""
                },
                {
                    "rule": "Does not break Designation when it moves. Designation is broken when target leaves frontal arc.",
                    "params": ""
                },
                {
                    "rule": "Has E3 in dogfights.",
                    "params": ""
                }
            ]
        },
        {
            "name": "AD-48 Falconet",
            "faction": [
                "lupar"
            ],
            "value": 20,
            "stats": [
                "H*",
                "S*\"",
                "M14\"",
                "Q3",
                "T2",
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
                    "weaponName": "Mtl. 19 .50 HMG, octet",
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
                    "weaponName": "LR-49 2.7-inch HEAT Rocket Pod",
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
                    "weaponName": "BLG-64 500 lb. HE Cluster Bomb",
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
        },
        {
            "name": "AP-IV Grognard",
            "faction": [
                "lupar"
            ],
            "value": 40,
            "stats": [
                "H*",
                "S*\"",
                "M16\"",
                "Q3",
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
                    "weaponName": "APX-50 1.4-inch Revolver Cannon",
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
                    "weaponName": "MA-67 4.7-inch Infrared AAM",
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
                    "weaponName": "SD68 8-inch TV-Guided Bomb",
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
            "name": "MD-II Mist",
            "faction": [
                "lupar"
            ],
            "value": 40,
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
                    "weaponName": "APX-50 1.4-inch Revolver Cannon",
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
                    "weaponName": "MA-67B 4.7-inch Infrared AAM",
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
                    "weaponName": "MA-62 7.9-inch Semi-Active AAM",
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
            "name": "Node Team",
            "faction": [
                "rygolic"
            ],
            "value": 0,
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
        },
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
        },
        {
            "name": "Dummy",
            "faction": [],
            "value": 5,
            "stats": "Variable",
            "type": {
                "super": [
                    "Dummy"
                ],
                "sub": [
                    ""
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
                    "rule": "Unit blind is removed from the battlefield on being identified or being hit by any attack.",
                    "params": ""
                }
            ]
        }
    ]
}

export default list