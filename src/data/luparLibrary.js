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
const luplist = [
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
                            "attackRange": "R32\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+/xx",
                            "attackStrength": "S[D3]",
                            "attackTags": [
                                "Air-Filling","Light Indirect (2)","No CC", "Radius (2\")"
                            ]
                        },
						{
                            "attackName": "3-inch Smoke",
                            "attackTargets": "Gnd",
                            "attackRange": "R32\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A++/xx",
                            "attackStrength": "",
                            "attackTags": [
                                "Light Indirect (2)","No CC","Smoke (3\")"
                            ]
                        },
						{
                            "attackName": "3-inch Signal Salt",
                            "attackTargets": "Gnd",
                            "attackRange": "R32\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A++/xx",
                            "attackStrength": "",
                            "attackTags": [
                                "Light Indirect (2)", "No CC", "Radius (3\")", "Rally (Salt)"
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
                    "weaponAmmo": "4",
                    "attacks": [
                        {
                            "attackName": "3-inch HEAT",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R24\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+/6+",
                            "attackStrength": "S8/1+",
                            "attackTags": [
                                "No CC (Inf.)","Shaped Charge"
                            ]
                        },
						{
                            "attackName": "3-inch Canister",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R12\"",
                            "attackDice": "D3",
                            "attackAccuracy": "A4+/6+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Defensive CC (Inf.)"
                            ]
                        },
						{
                            "attackName": "3-inch Smoke",
                            "attackTargets": "Gnd",
                            "attackRange": "R24\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A++/++",
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
                    "weaponAmmo": "4",
                    "attacks": [
                        {
                            "attackName": "ATGM Guidance Mode",
                            "attackTargets": "Vec",
                            "attackRange": "R6-60\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/xx",
                            "attackStrength": "S15/2",
                            "attackTags": [
                                "Guided Missile (2)","No CC","Shaped Charge"
                            ]
                        },
						{
                            "attackName": "MANPADS Guidance Mode",
                            "attackTargets": "Air",
                            "attackRange": "R60\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+/xx",
                            "attackStrength": "S15/2",
                            "attackTags": [
                                "Guided Missile (2)","No CC","Shaped Charge"
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
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R0\"",
                            "attackDice": "D3",
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
								"Multi-Gun",
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
                    "weaponAmmo": "4",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R32\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/xx",
                            "attackStrength": "S4/6",
                            "attackTags": [
                                "No CC (Inf.)","Scoped"
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
                            "attackTargets": "All",
                            "attackRange": "R20\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/6+",
                            "attackStrength": "S2/3",
                            "attackTags": [
                                "Turret"
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
                            "attackTargets": "All",
                            "attackRange": "R20\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/6+",
                            "attackStrength": "S2/3",
                            "attackTags": [
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
                            "attackTargets": "All",
                            "attackRange": "R20\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/6+",
                            "attackStrength": "S2/3",
                            "attackTags": [
                                "Turret"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "APX-30 1-inch Autocannon",
                    "weaponAmmo": "4",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R32\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/5+",
                            "attackStrength": "S4/6",
                            "attackTags": [
                                "No CC (Inf.)","Turret"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Mle. 254 2.3-inch Smoke Launchers",
                    "weaponAmmo": "1",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Gnd",
                            "attackRange": "R0\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A++/++",
                            "attackStrength": "",
                            "attackTags": [
                                "Light Indirect (0)","No CC","Smoke (2\")"
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
                                "Multi-Gun"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Mle. 254 2.3-inch Smoke Launchers",
                    "weaponAmmo": "1",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Gnd",
                            "attackRange": "R0\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A++/++",
                            "attackStrength": "",
                            "attackTags": [
                                "Light Indirect (0)","No CC","Smoke (2\")"
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
                            "attackTargets": "All",
                            "attackRange": "R12\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/6+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Turret"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "SA19 3-inch Gun",
                    "weaponAmmo": "6",
                    "attacks": [
                        {
                            "attackName": "3-inch APHE",
                            "attackTargets": "Vec",
                            "attackRange": "R32\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+/6+",
                            "attackStrength": "S8/12",
                            "attackTags": [
                                "No CC Inf.)","Turret"
                            ]
                        },
						{
                            "attackName": "3-inch HE-Frag",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R32\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+/6+",
                            "attackStrength": "S3/3",
                            "attackTags": [
                                "No CC Inf.)","Turret","Ignore Cover (1)"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "LF4 Sponson Flamethrower",
                    "weaponAmmo": "3",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R8\"",
                            "attackDice": "D3",
                            "attackAccuracy": "A3+/3+",
                            "attackStrength": "S1+/1+",
                            "attackTags": [
                                "Ignore Cover (2)","Multi-Gun","Rear Attack"
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
                            "attackTargets": "All",
                            "attackRange": "R12\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/5+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Thermal Sights", "Turret"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "SA19B 3-inch Dual Guns",
                    "weaponAmmo": "6",
                    "attacks": [
                        {
                            "attackName": "3-inch APHE",
                            "attackTargets": "Vec",
                            "attackRange": "R40\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/4+",
                            "attackStrength": "S8/12",
                            "attackTags": [
                                "Barrage (2)","Thermal Sights","Tracking","No CC (Inf.)","Turret"
                            ]
                        },
						{
                            "attackName": "3-inch HEAT",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R40\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/4+",
                            "attackStrength": "S8/1+",
                            "attackTags": [
                                "Barrage (2)","Thermal Sights","Tracking","Turret","No CC (Inf.)","Shaped Charge"
                            ]
                        },
						{
                            "attackName": "3-inch Canister",
                            "attackTargets": "All",
                            "attackRange": "R20\"",
                            "attackDice": "D3",
                            "attackAccuracy": "A3+/4+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Barrage (2)","Thermal Sights","Tracking","Turret","Defensive CC (Inf.)"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "Mle. 254 2.3-inch Smoke Launchers",
                    "weaponAmmo": "1",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Gnd",
                            "attackRange": "R0\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A++/++",
                            "attackStrength": "",
                            "attackTags": [
                                "Light Indirect (0)","No CC","Smoke (2\")"
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
                    "weaponAmmo": "4",
                    "attacks": [
                        {
                            "attackName": "3.3-inch APDS",
                            "attackTargets": "Vec",
                            "attackRange": "R40\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/xx",
                            "attackStrength": "S10/15",
                            "attackTags": [
                                "No CC","Thermal Sight"
                            ]
                        },
						{
                            "attackName": "3.3-inch HE-Frag",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R40\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/xx",
                            "attackStrength": "S3/3",
                            "attackTags": [
                                "No CC","Thermal Sight","Ignore Cover (1)"
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
                    "weaponAmmo": "4",
                    "attacks": [
                        {
                            "attackName": "4.2-inch HEAT",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R28\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+/6+",
                            "attackStrength": "S10/2",
                            "attackTags": [
                                "No CC (Inf.)","Shaped Charge"
                            ]
                        },
						{
                            "attackName": "4.2-inch Canister",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R14\"",
                            "attackDice": "D4",
                            "attackAccuracy": "A4+/6+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Defensive CC (Inf.)"
                            ]
                        },
						{
                            "attackName": "4.2-inch White Phosphorus",
                            "attackTargets": "Gnd",
                            "attackRange": "R28\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+/6+",
                            "attackStrength": "S1+/1+",
                            "attackTags": [
                                "Ignore Cover (2)", "No CC", "Rear Attack", "Smoke (3\")"
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
                            "attackTargets": "All",
                            "attackRange": "R20\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/6+",
                            "attackStrength": "S2/3",
                            "attackTags": [
                                "Turret"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "SA25 2.5-inch High Velocity Gun",
                    "weaponAmmo": "4",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Vec",
                            "attackRange": "R40\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+/6+",
                            "attackStrength": "S12/18",
                            "attackTags": [
                                "No CC (Inf.)"
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
                    "weaponAmmo": "3",
                    "attacks": [
                        {
                            "attackName": "7.8-inch HEAT",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R40\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/xx",
                            "attackStrength": "S16/3",
                            "attackTags": [
                                "No CC", "Shaped Charge"
                            ]
                        },
						{
                            "attackName": "7.8-inch Frag",
                            "attackTargets": "Gnd",
                            "attackRange": "R∞\"",
                            "attackDice": "D3",
                            "attackAccuracy": "A4+/xx",
                            "attackStrength": "S[D6]",
                            "attackTags": [
                                "No CC", "Air-Filling","Heavy Indirect (3)","Radius (3\")"
                            ]
                        },
						{
                            "attackName": "7.8-inch Canister",
                            "attackTargets": "All",
                            "attackRange": "R20\"",
                            "attackDice": "D6",
                            "attackAccuracy": "A4+/xx",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "No CC", "Radius (2\")"
                            ]
                        },
						{
                            "attackName": "7.8-inch Smoke",
                            "attackTargets": "Gnd",
                            "attackRange": "R∞\"",
                            "attackDice": "D4",
                            "attackAccuracy": "A++/xx",
                            "attackStrength": "",
                            "attackTags": [
                                "No CC","Heavy Indirect (3)","Smoke (5\")"
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
                    "weaponName": "TAP 25 4.2-inch  Recoilless Rifle Battery",
                    "weaponAmmo": "6",
                    "attacks": [
                        {
                            "attackName": "4.2-inch HEAT",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R28\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+/6+",
                            "attackStrength": "S10/2",
                            "attackTags": [
                                "Barrage (6, point)", "No CC (Inf.)","Shaped Charge"
                            ]
                        },
						{
                            "attackName": "4.2-inch Canister",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R14\"",
                            "attackDice": "D4",
                            "attackAccuracy": "A4+/6+",
                            "attackStrength": "S1/1+",
                            "attackTags": [
                                "Barrage (6, point)","Defensive CC (Inf.)"
                            ]
                        },
						{
                            "attackName": "4.2-inch White Phosphorus",
                            "attackTargets": "Gnd",
                            "attackRange": "R28\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+/6+",
                            "attackStrength": "S1+/1+",
                            "attackTags": [
                                "Barrage (6, point)","Ignore Cover (2)","No CC","Rear Attack","Smoke (3\")"
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
                    "weaponAmmo": "6",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R36\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/4+",
                            "attackStrength": "S5/7",
                            "attackTags": [
                                "No CC (Inf.)", "Radar Anti-Air","Tracking","Turret"
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
                    "weaponAmmo": "6",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Gnd",
                            "attackRange": "R12-∞\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/5+",
                            "attackStrength": "S6/6",
                            "attackTags": [
                                "Air-Filling","Ignore Cover (1)","Heavy Indirect (2)","No CC","Saturating (6)"
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
                            "attackTargets": "All",
                            "attackRange": "R20\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/6+",
                            "attackStrength": "S2/3",
                            "attackTags": [
                                "Turret"
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
                    "weaponAmmo": "4",
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
                    "weaponAmmo": "4",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R32\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A4+/5+",
                            "attackStrength": "S4/6",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "SD84 4.7-inch Missile Launcher",
                    "weaponAmmo": "2",
                    "attacks": [
                        {
                            "attackName": "ATGM Guidance Mode",
                            "attackTargets": "Vec",
                            "attackRange": "R6-60\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+/4+",
                            "attackStrength": "S15/2",
                            "attackTags": [
                                "Door Gun (Front, Sides)","Guided Missile (2)","No CC","Shaped Charge"
                            ]
                        },
						{
                            "attackName": "MANPAD Guidance Mode",
                            "attackTargets": "Air",
                            "attackRange": "R60\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+/4+",
                            "attackStrength": "S15/2",
                            "attackTags": [
                                "Door Gun (Front, Sides)","Guided Missile (2)","No CC","Shaped Charge"
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
                            "attackTargets": "All",
                            "attackRange": "R4\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A6+",
                            "attackStrength": "S2",
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
                            "attackTargets": "All",
                            "attackRange": "R40\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A++",
                            "attackStrength": "",
                            "attackTags": [
                                "Designator"
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
                            "attackTargets": "All",
                            "attackRange": "R4\"",
                            "attackDice": "D3",
                            "attackAccuracy": "A4+",
                            "attackStrength": "S2",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "LR-49 2.7-inch HEAT Rocket Pod",
                    "weaponAmmo": "2",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Inf/Vec",
                            "attackRange": "R6\"",
                            "attackDice": "D4",
                            "attackAccuracy": "A4+",
                            "attackStrength": "S6/1",
                            "attackTags": [
                                "Barrage (2)","Shaped Charge"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "BLG-64 500 lb. HE Cluster Bomb",
                    "weaponAmmo": "4",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Gnd",
                            "attackRange": "R0\"",
                            "attackDice": "D2",
                            "attackAccuracy": "A2+",
                            "attackStrength": "S4",
                            "attackTags": [
                                "Air-Filling","Rear Attack","Saturating (4)"
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
                    "weaponName": "MA-67 4.7-inch Infrared AAM",
                    "weaponAmmo": "2",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Air",
                            "attackRange": "R24\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+",
                            "attackStrength": "S6",
                            "attackTags": [
                                "Air-Filling","Guided Missile (1)","Homing"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "SD68 8-inch TV-Guided Bomb",
                    "weaponAmmo": "2",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Gnd",
                            "attackRange": "R40\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+",
                            "attackStrength": "S8",
                            "attackTags": [
                                "Air-Filling","Guided Missile (2)","Radius (3\")","Rear Attack"
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
                    "weaponAmmo": "3",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "All",
                            "attackRange": "R8\"",
                            "attackDice": "D3",
                            "attackAccuracy": "A3+",
                            "attackStrength": "S5",
                            "attackTags": [
                                ""
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "MA-67B 4.7-inch Infrared AAM",
                    "weaponAmmo": "2",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Air",
                            "attackRange": "R30\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A3+",
                            "attackStrength": "S6",
                            "attackTags": [
                                "Air-Fililng","Guided Missile (1)","Homing"
                            ]
                        }
                    ]
                },
                {
                    "weaponName": "MA-62 7.9-inch Semi-Active AAM",
                    "weaponAmmo": "4",
                    "attacks": [
                        {
                            "attackName": "",
                            "attackTargets": "Air",
                            "attackRange": "R60\"",
                            "attackDice": "D1",
                            "attackAccuracy": "A4+",
                            "attackStrength": "S8",
                            "attackTags": [
                                "Barrage (2, Point)","Guided Missile (1)","No CC"
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
        }
]

export default luplist