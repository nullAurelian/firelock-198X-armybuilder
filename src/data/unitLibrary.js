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
const genericList = [
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

export default genericList