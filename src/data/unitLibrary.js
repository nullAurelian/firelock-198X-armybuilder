const list = {
	"units":[
		{
			"name":"Type 68C Appomattox",
			"faction":["federal"],
			"value":0,
			"stats":"",
			"type":"Tracked (40x60)",
			"weapons":["Pequod SA 11.5mm, commander issue","1M1V Target Bearing Transmitter","902V 81mm Smoke Launchers"],
			"tags":["TACOM", "NBC", "Amphibious", "Brigade(3, 12\")"]
		},
		{
			"name":"Expeditionary Command Squad",
			"faction":["federal"],
			"value":15,
			"stats":"",
			"type":"Infantry (Squad)",
			"weapons":["6G1A 7.76mm Automatic Rifle","6L3 10mm HEDP Grenade Launcher"],
			"tags":["TACOM", "Assault Dismount", "Fearless", "Paradrop", "Brigade(2,8\")", "All units targeted in a Brigade (including self) lose all pin tokens."]
		},
		{
			"name":"Type 40M Veldjen-MC",
			"faction":["federal"],
			"value":15,
			"stats":"",
			"type":"Tracked (40x60)",
			"weapons":["6G2 7.76mm MG","2K70 57mm High Velocity Gun", "2K15 40mm HE Grenade Launcher"],
			"tags":[ "TACOM", "NBC", "Steel Watchbands", "Brigade (4,6\")"]
		},
		{
			"name":"Type 52C Duck-C",
			"faction":["federal"],
			"value":15,
			"stats":"",
			"type":"Tracked (40x60)",
			"weapons":["6G2 7.76mm MG","2K81 152mm Gun-Launcher (152mm HEAT, 152mm Beehive)","902V 81mm Smoke Launchers"],
			"tags":[ "TACOM", "NBC", "Steel Watchbands", "Amphibious", "Brigade (4,6\")"]
		},
		{
			"name":"Type 52PC Mallard-C",
			"faction":["federal"],
			"value":15,
			"stats":"",
			"type":"Tracked (40x60)",
			"weapons":["2A76 7.76mm Minigun","2K56 76mm Gun (76mmHVAP, 76mm HE-Frag)","902V 81mm Smoke Launchers"],
			"tags":[ "TACOM", "NBC", "Steel Watchbands", "Paradrop", "Amphibious", "Brigade (4,6\")"]
		},
		{
			"name":"Type 55MC Razorback-MC",
			"faction":["federal"],
			"value":30,
			"stats":"",
			"type":"Tracked (40x60)",
			"weapons":["6G2 7.76mm MG, Hull","6GZ1 14,5mm HMG","2K41 100mm Gun (100mm APDS, 100mm HE-Frag)","902V 81mm Smoke Launchers"],
			"tags":[ "TACOM", "NBC", "Steel Watchbands", "Brigade (4,6\")"]
		},
		{
			"name":"Type 71C Tusker-KC",
			"faction":["federal"],
			"value":40,
			"stats":"",
			"type":"Tracked (40x60)",
			"weapons":["6GZ1 14.5mm HMG","2K43 115mm Gun (115mm Sabot, 115mm HEAT)","902V 81mm Smoke Launchers"],
			"tags":[ "TACOM", "NBC", "Steel Watchbands", "Brigade (4,6\")"]
		},
		{
			"name":"Type 71BC Tusker-GMC",
			"faction":["federal"],
			"value":70,
			"stats":"",
			"type":"Tracked (40x60)",
			"weapons":["6GZ1 14.5mm HMG","2K81 152mm Gun-Launcher (152mm Gun-Launched ATGM, 152mm Gun-Launched Thermobaric, 152mm Tandem HEAT)","902V 81mm Smoke Launchers"],
			"tags":[ "TACOM", "NBC", "Steel Watchbands", "Brigade (4,6\")"]
		},
		{
			"name":"Reservists",
			"faction":["federal"],
			"value":5,
			"stats":"",
			"type":"Infantry (Squad)",
			"weapons":["6P3 11.5mm SMG","6L4 73mm RPG"],
			"tags":[""]
		},
		{
			"name":"States-Grenadiers",
			"faction":["federal"],
			"value":10,
			"stats":"",
			"type":"Infantry (Squad)",
			"weapons":["6G1 7.76mm Battle Rifle","6G2 7.76mm GPMG","6L1 85mm RPG"],
			"tags":[ "Assault Dismount"]
		},
		{
			"name":"Federal Expeditionaries",
			"faction":["federal"],
			"value":15,
			"stats":"",
			"type":"Infantry (Squad)",
			"weapons":["6G1A 7.76mm Automatic Rifle","6L3 40mm HEDP Grenade Launcher"],
			"tags":["Assault Dismount", "Fearless", "Paradrop"]
		},
		{
			"name":"Mortar Team",
			"faction":["federal"],
			"value":10,
			"stats":"",
			"type":"Infantry (Team)",
			"weapons":["6G1 7.76mm Battle Rifle","6L2 60mm Knee Mortar (60mm Frag, 60mm Smoke)"],
			"tags":[ "Assault Dismount"]
		},
		{
			"name":"ATGM Team",
			"faction":["federal"],
			"value":10,
			"stats":"",
			"type":"Infantry (Team)",
			"weapons":["6G1 7.76mm Battle Rifle","9GR1 125mm ATGM"],
			"tags":[ "Assault Dismount"]
		},
		{
			"name":"MANPADS Team",
			"faction":["federal"],
			"value":10,
			"stats":"",
			"type":"Infantry (Team)", 
			"weapons":["6G1 7.76mm Battle Rifle","9GR2 85mm MANPADS"],
			"tags":["Assault Dismount"]
		},
		{
			"name":"Recoilless Rifle Team",
			"faction":["federal"],
			"value":15,
			"stats":"",
			"type":"Infantry (Team)",
			"weapons":["6G1 7.76mm Battle Rifle","6L5 73mm Recoilless Rifle (73mm HEAT, 73mm Incendiary, 73mm Smoke)"],
			"tags":[ "Assault Dismount"]
		},
		{
			"name":"Expeditionary R.R. Team",
			"faction":["federal"],
			"value":15,
			"stats":"",
			"type":"Infantry (Team)", 
			"weapons":["6G1A 7.76mm Automatic Rifle","6L6 57mm Light Recoilless Rifle (57mm HEAT, 57mm Canister)"],
			"tags":["Assault Dismount", "Fearless", "Paradrop"]
		},
		{
			"name":"Pup Carson Scouts",
			"faction":["federal"],
			"value":10,
			"stats":"",
			"type":"Infantry (Team)",
			"weapons":["6G1 7.76mm Battle Rifle", "Teeth & Claws"],
			"tags":[ "Sense(6\")", "Any Tracked with at least M6\" which this unit embarks or desants on can make a \"pathfinder move\" during Maneuver Phase which is only M6\" but ignores terrain entrance/exit costs and all terrain multipliers."]
		},
		{
			"name":"Intermarine Rangers",
			"faction":["federal"],
			"value":15,
			"stats":"",
			"type":"Infantry (Team)",
			"weapons":["6G5 7.76mm Sniper Rifle","6P3 11.5mm SMG","1A5P MVSO Acquisition Laser"],
			"tags":[ "Assault Dismount", "Fearless","This Unit does not lose accuracy from pin tokens while it is not identified."]
		},
		{
			"name":"LaF-30 Ox",
			"faction":["federal"],
			"value":10,
			"stats":"",
			"type":"Wheeled (40x60)", 
			"weapons":["6G1 7.76mm Battle Rifle"],
			"tags":["Resupply(6)", "PC(2, Rear)", "Tow(3)"]
		},
		{
			"name":"Type 60 Grumble",
			"faction":["federal"],
			"value":10,
			"stats":"",
			"type":"Wheeled (40x60)",
			"weapons":["6G2 7.76mm MG","2K15 40mm HE Grenade Launcher"],
			"tags":[ "Amphibious", "PC(3, Rear)", "NBC"]
		},
		{
			"name":"Type 68 Bantam",
			"faction":["federal"],
			"value":20,
			"stats":"",
			"type":"Tracked (40x60)",
			"weapons":["6G2 7.76mm MG","2K28 73mm Low-Pressure Gun (73mm HEAT, 73mm HE-Frag)","9GR1 125mm ATGM","902V 81mm Smoke Launchers"],
			"tags":[ "Amphibious", "PC(2, Rear)", "NBC","Steel Watchbands"]
		},
		{
			"name":"Type 68B Bantam-MK",
			"faction":["federal"],
			"value":25,
			"stats":"",
			"type":"Tracked (40x60)",
			"weapons":["6G2 7.76mm MG","2A34 23mm Autocannon","9GR1 125mm ATGM","902V 81mm Smoke Launchers"],
			"tags":[ "Amphibious", "PC(2, Rear)", "NBC","Steel Watchbands"]
		},
		{
			"name":"Type 40 Veldjen-M",
			"faction":["federal"],
			"value":20,
			"stats":"",
			"type":"Tracked (40x60)",
			"weapons":["6G2 7.76mm MG","2K70 57mm High Velocity Gun", "2K15 40mm HE Grenade Launcher"],
			"tags":[ "NBC", "Steel Watchbands"]
		},
		{
			"name":"Type 52 Duck",
			"faction":["federal"],
			"value":20,
			"stats":"",
			"type":"Tracked (40x60)",
			"weapons":["6G2 7.76mm MG","2K81 152mm Gun-Launcher (152mm HEAT, 152mm Beehive)","902V 81mm Smoke Launchers"],
			"tags":[ "Amphibious", "NBC", "Steel Watchbands"]
		},
		{
			"name":"Type 52P Mallard",
			"faction":["federal"],
			"value":20,
			"stats":"",
			"type":"Tracked (40x60)",
			"weapons":["2A76 7.76mm Minigun","2K56 76mm Gun (76mmHVAP, 76mm HE-Frag)","902V 81mm Smoke Launchers"],
			"tags":[ "Amphibious", "NBC","Paradrop", "Steel Watchbands"]
		},
		{
			"name":"Type 55M Razorback-M",
			"faction":["federal"],
			"value":40,
			"stats":"",
			"type":"Tracked (40x60)",
			"weapons":["6G2 7.76mm MG, Hull","6GZ1 14,5mm HMG","2K41 100mm Gun (100mm APDS, 100mm HE-Frag)","902V 81mm Smoke Launchers"],
			"tags":[ "NBC", "Steel Watchbands"]
		},
		{
			"name":"Type 71 Tusker-K",
			"faction":["federal"],
			"value":50,
			"stats":"",
			"type":"Tracked (40x60)", 
			"weapons":["6GZ1 14.5mm HMG","2K43 115mm Gun (115mm Sabot, 115mm HEAT)","902V 81mm Smoke Launchers"],
			"tags":["NBC", "Steel Watchbands"]
		},
		{
			"name":"Type 71B Tusker-GM",
			"faction":["federal"],
			"value":80,
			"stats":"",
			"type":"Tracked (40x60)", 
			"weapons":["6GZ1 14.5mm HMG","2K81 152mm Gun-Launcher (152mm Gun-Launched ATGM, 152mm Gun-Launched Thermobaric, 152mm Tandem HEAT)","902V 81mm Smoke Launchers"],
			"tags":["NBC", "Steel Watchbands"]
		},
		{
			"name":"2M9 Korenbloem",
			"faction":["federal"],
			"value":25,
			"stats":"",
			"type":"Carriage (40x60)",
			"weapons":["6G1 7.76mm Battle Rifle","2M9 82mm Automatic Mortar (82mm HEAT, 82mm Frag, 82mm Chemical-SP, 82mm Smoke)"],
			"tags":[""]
		},
		{
			"name":"2K52 Wheat",
			"faction":["federal"],
			"value":25,
			"stats":"",
			"type":"Carriage (40x60)",
			"weapons":["6G1 7.76mm Battle Rifle","2K52 152mm Howitzer(152mm HEAT, 152mm Frag, 152mm Chemical-SP, 152mm Smoke)"],
			"tags":[""]
		},
		{
			"name":"Type 60AT Runner",
			"faction":["federal"],
			"value":25,
			"stats":"",
			"type":"Wheeled (40x60)",
			"weapons":["6G2 7.76mm MG","9GR1M 125mm ATGM Rack"],
			"tags":[ "Amphibious", "PC(1, Rear)"]
		},
		{
			"name":"Type 52LW Firehose",
			"faction":["federal"],
			"value":30,
			"stats":"",
			"type":"Tracked (40x60)",
			"weapons":["6P3 11.5mm SMG","2A37 37mm Rotary Cannon"],
			"tags":[ "Amphibious", "NBC"]
		},
		{
			"name":"Type 60MD Wave",
			"faction":["federal"],
			"value":30,
			"stats":"",
			"type":"Wheeled (40x60)",
			"weapons":["6G2 7.76mm MG","2M9 82mm Automatic Mortar (82mm Frag, 82mm Chemical-SP, 82mm Smoke)"],
			"tags":[ "Amphibious", "PC(1, Rear)"]
		},
		{
			"name":"Type 71H Tusker-AV",
			"faction":["federal"],
			"value":50,
			"stats":"",
			"type":"Tracked (40x60)",
			"weapons":["6GZ1 14.5mm HMG","2K52 152mm Howitzer(152mm HEAT, 152mm Frag, 152mm Chemical-SP, 152mm Smoke)"],
			"tags":["NBC","Steel Watchbands"]
		},
		{
			"name":"S36 Paddle",
			"faction":["federal"],
			"value":15,
			"stats":"",
			"type":"Watercraft (40x60)",
			"weapons":["6GN3 14.5mm HMG","6G2 7.76mm MG","2K15 40mm HE Grenade Launchers"],
			"tags":[ "PC(3, Any)"]
		},
		{
			"name":"HzN-18 Moose",
			"faction":["federal"],
			"value":15,
			"stats":"",
			"type":"Helicopter (40x60)",
			"weapons":["6G2 7.76mm MG"],
			"tags":[ "PC(2, Sides)"]
		},
		{
			"name":"HzN-22 Hugag",
			"faction":["federal"],
			"value":20,
			"stats":"",
			"type":"Helicopter (40x60)",
			"weapons":["2A76 7.76mm Minigun"],
			"tags":[ "PC(6, Sides)", "Resupply(6)","Tow(2)"]
		},
		{
			"name":"HzN-18B Bison",
			"faction":["federal"],
			"value":25,
			"stats":"",
			"type":"Helicopter (40x60)",
			"weapons":["2A76 7.76mm Minigun","2K15 40mm Grenade Launcher", "9GR1 125mm ATGM"],
			"tags":[ "Chaff-Flares(1)","PC(1, Sides)"]
		},
		{
			"name":"SiG-17 Hardnose",
			"faction":["federal"],
			"value":20,
			"stats":"",
			"type":"Aircraft (40x60)",
			"weapons":["6G2 7.76mm MG, octet","4BB2 350kg Dual-Purpose Cluster Bomb","9GR6 200mm Beam-Riding AAM"],
			"tags":[ "CAS"]
		},
		{
			"name":"SiG-16 Rufe",
			"faction":["federal"],
			"value":20,
			"stats":"",
			"type":"Aircraft (40x60)",
			"weapons":["2A34 23mm Autocannons, triplet", "4BN2 350kg Napalm Bomb","9GR4 120mm Infrared AAM"],
			"tags":[ "CAP", "Sprint Motor"]
		},
		{
			"name":"SiG-16B Schroef",
			"faction":["federal"],
			"value":30,
			"stats":"",
			"type":"Aircraft (40x60)",
			"weapons":["2A40 37mm Autocannons, triplet","4BE1 500kg HE Bomb","9GR3 275mm AGM"],
			"tags":[ "CAS","Chaff-Flares(2)","Sprint Motor"]
		},
		{
			"name":"Company Chief",
			"faction":["lupar"],
			"value":0,
			"stats":"",
			"type":"Infantry (Team)",
			"weapons":[""],
			"tags":[ "TACOM",	"Bloodlust", "Infiltrator", "Sense (6\")", "Brigade (4, 8\")"]
		},
		{
			"name":"Internal Security Escort",
			"faction":["lupar"],
			"value":15,
			"stats":"",
			"type":"Infantry (Squad)",
			"weapons":[""],
			"tags":[ "TACOM","Assault Specialist", "Brigade (3, 4\")", "NBC"]
		},
		{
			"name":"Waykeeper Judge",
			"faction":["lupar"],
			"value":20,
			"stats":"",
			"type":"Infantry (Team)",
			"weapons":[""],
			"tags":[ "TACOM",	"Amphibious","Guidance(12\")", "Infiltrator", "Sense (8\")", "Brigade (3, 12\")", "While this unit is alive, no unit in this army can willingly go Berserk. Only Judges may call Exhortation support Missions."]
		},
		{
			"name":"Territorials",
			"faction":["lupar"],
			"value":5,
			"stats":"",
			"type":"Infantry (Squad)",
			"weapons":[""],
			"tags":[ "Amphibious","Bloodlust", "Infiltrator", "Sense (6\")"]
		},
		{
			"name":"Chasseurs",
			"faction":["lupar"],
			"value":10,
			"stats":"",
			"type":"Infantry (Squad)",
			"weapons":[""],
			"tags":[ "Bloodlust", "Infiltrator", "Sense (6\")"]
		},
		{
			"name":"White Gloves",
			"faction":["lupar"],
			"value":20,
			"stats":"",
			"type":"Infantry (Squad)",
			"weapons":[""],
			"tags":[ "Bloodlust", "Fearless", "Sense (6\")"]
		},
		{
			"name":"Internal Security",
			"faction":["lupar"],
			"value":20,
			"stats":"",
			"type":"Infantry (Squad)",
			"weapons":[""],
			"tags":[ "Assault Specialist","NBC"]
		},
		{
			"name":"Machine Gun Team",
			"faction":["lupar"],
			"value":10,
			"stats":"",
			"type":"Infantry (Team)",
			"weapons":[""],
			"tags":["Bloodlust", "Infiltrator", "Sense (6\")"]
		},
		{
			"name":"Hima Team",
			"faction":["lupar"],
			"value":15,
			"stats":"",
			"type":"Infantry (Team)",
			"weapons":[""],
			"tags":["Bloodlust","Sense (6\")"]
		},
		{
			"name":"Recoilless Rifle Team",
			"faction":["lupar"],
			"value":15,
			"stats":"",
			"type":"Infantry (Team)",
			"weapons":[""],
			"tags":["Bloodlust", "Infiltrator", "Sense (6\")"]
		},
		{
			"name":"Guided Missile Team",
			"faction":["lupar"],
			"value":20,
			"stats":"",
			"type":"Infantry (Team)",
			"weapons":[""],
			"tags":["Bloodlust","Sense (6\")"]
		},
		{
			"name":"Subaltern Team",
			"faction":["lupar"],
			"value":10,
			"stats":"",
			"type":"Infantry (Team)",
			"weapons":[""],
			"tags":["Bloodlust", "Infiltrator", "Sense (6\")", "Brigade (2, 4\")"]
		},
		{
			"name":"Made-To-Orders",
			"faction":["lupar"],
			"value":10,
			"stats":"",
			"type":"Infantry (Squad)",
			"weapons":[""],
			"tags":[ "Amphibious","Bloodlust", "Tow(2)", "Sense (6\")","If depleted, loses its depletion token at the end of round after winning a close combat."]
		},
		{
			"name":"Waykeepers",
			"faction":["lupar"],
			"value":15,
			"stats":"",
			"type":"Infantry (Team)",
			"weapons":[""],
			"tags":[ "Amphibious","Guidance(12\")", "Infiltrator", "Sense (8\")"]
		},
		{
			"name":"Bounders",
			"faction":["lupar"],
			"value":20,
			"stats":"",
			"type":"Infantry (Team)",
			"weapons":[""],
			"tags":[ "Amphibious","Bloodlust", "Infiltrator", "Sense (6\")"]
		},
		{
			"name":"CdS-F1 Kennel",
			"faction":["lupar"],
			"value":10,
			"stats":"",
			"type":"Wheeled (40x60)",
			"weapons":[""],
			"tags":[ "PC(2, Rear)", "Resupply(6)", "Tow(3)"]
		},
		{
			"name":"VBD-U Denmother",
			"faction":["lupar"],
			"value":5,
			"stats":"",
			"type":"Tracked (40x40)",
			"weapons":[""],
			"tags":[ "PC(1)","This unit cannot have embarked units and desants at the same time.","Embarked Units can fire any non-Melee weapon as if it were a Small Arm and are identified with the vehicle.","Units embarked may spot and be spotted by Sense."]
		},
		{
			"name":"VBD-1 Tanner",
			"faction":["lupar"],
			"value":10,
			"stats":"",
			"type":"Tracked (40x60)",
			"weapons":[""],
			"tags":[ "Amphibious","NBC", "PC(3, Rear)"]
		},
		{
			"name":"VBD-2 Rawhide",
			"faction":["lupar"],
			"value":20,
			"stats":"",
			"type":"Tracked (40x60)",
			"weapons":[""],
			"tags":[ "NBC", "PC(2, Rear)"]
		},
		{
			"name":"VBD-3 Motte",
			"faction":["lupar"],
			"value":20,
			"stats":"",
			"type":"Tracked (40x60)",
			"weapons":[""],
			"tags":["NBC", "PC(2, Rear, Front)"]
		},
		{
			"name":"Char 30 Veldjen",
			"faction":["lupar"],
			"value":20,
			"stats":"",
			"type":"Tracked (40x60)",
			"weapons":[""],
			"tags":["NBC"]
		},
		{
			"name":"Char 38 Borvo",
			"faction":["lupar"],
			"value":40,
			"stats":"",
			"type":"Tracked (40x60)",
			"weapons":[""],
			"tags":["NBC"]
		},
		{
			"name":"DAG-8 Blossom",
			"faction":["lupar"],
			"value":15,
			"stats":"",
			"type":"Carriage (40x60)",
			"weapons":[""],
			"tags":[""]
		},
		{
			"name":"VBD-1b Tanner-R",
			"faction":["lupar"],
			"value":15,
			"stats":"",
			"type":"Tracked (40x60)",
			"weapons":[""],
			"tags":["Amphibious","NBC","PC(1, Rear)"]
		},
		{
			"name":"CdA-25 Saucer",
			"faction":["lupar"],
			"value":20,
			"stats":"",
			"type":"Tracked (40x60)",
			"weapons":[""],
			"tags":["NBC"]
		},
		{
			"name":"DAG-16 Cherry",
			"faction":["lupar"],
			"value":25,
			"stats":"",
			"type":"Carriage (40x60)",
			"weapons":[""],
			"tags":[""]
		},
		{
			"name":"VBD Special Lugus",
			"faction":["lupar"],
			"value":25,
			"stats":"",
			"type":"Tracked (40x40)",
			"weapons":[""],
			"tags":[]
		},
		{
			"name":"CdA-36 Broomcloud",
			"faction":["lupar"],
			"value":25,
			"stats":"",
			"type":"Tracked (40x60)",
			"weapons":[""],
			"tags":[""]
		},
		{
			"name":"CdS-F2  Aurora",
			"faction":["lupar"],
			"value":30,
			"stats":"",
			"type":"Wheeled (40x60)",
			"weapons":[""],
			"tags":[""]
		},
		{
			"name":"VdIM-K Karve",
			"faction":["lupar"],
			"value":10,
			"stats":"",
			"type":"Watercraft (40x60)", 
			"weapons":[""],
			"tags":["PC(4, Any)"]
		},
		{
			"name":"VZ61 Chariots",
			"faction":["lupar"],
			"value":15,
			"stats":"",
			"type":"Helicopter (40x40)",
			"weapons":[""],
			"tags":[ "This unit may depleted as if it were an Infantry Squad.","When landed this unit counts as an Infantry Squad.", "This unit may fire all weapons and enter Close Combat as if were Infantry","This unit may land in Forests and inside Buildings as a squad-sized garrison."]
		},
		{
			"name":"AES514 Backbone",
			"faction":["lupar"],
			"value":20,
			"stats":"",
			"type":"Helicopter (40x60)", 
			"weapons":[""],
			"tags":["Chaff-Flares(3)","PC(2, Sides)", "Tow(10)", "Embarked units can fire any one non-Melee Weapon as if it were a Small Arm and are identified with the vehicle.","Units embarked may spot and be spotted by Sense."]
		},
		{
			"name":"AES805 Tornado",
			"faction":["lupar"],
			"value":30,
			"stats":"",
			"type":"Helicopter (40x60)", 
			"weapons":[""],
			"tags":["Chaff-Flares(2)"]
		},
		{
			"name":"R-2 Chien De Chasse",
			"faction":["lupar"],
			"value":10,
			"stats":"",
			"type":"Aircraft (40x60)",
			"weapons":[""],
			"tags":["CAS", "Loiter","Does not break Designation when it moves. Designation is broken when target leaves frontal arc.","Has E3 in dogfights."]
		},
		{
			"name":"AD-48 Falconet",
			"faction":["lupar"],
			"value":20,
			"stats":"",
			"type":"Aircraft (40x60)",
			"weapons":[""],
			"tags":["CAS", "Chaff-Flares(2)"]
		},
		{
			"name":"AP-IV Grognard",
			"faction":["lupar"],
			"value":40,
			"stats":"",
			"type":"Aircraft (40x60)",
			"weapons":[""],
			"tags":[ "CAP","Afterburner", "Chaff-Flares(2)"]
		},
		{
			"name":"MD-II Mist",
			"faction":["lupar"],
			"value":40,
			"stats":"",
			"type":"Aircraft (40x60)",
			"weapons":[""],
			"tags":[ "CAP","Afterburner", "Chaff-Flares(2)"]
		},
		{
			"name":"Node Team",
			"faction":["rygolic"],
			"value":0,
			"stats":"",
			"type":"Infantry (Team)",
			"weapons":[""],
			"tags":[ "TACOM", "Fearless", "NBC", "Rygonet (12\"), Brigade(2, 12\")"]
		},
		{
			"name":"Node Team (Additional)",
			"faction":["rygolic"],
			"value":20,
			"stats":"",
			"type":"Infantry (Team)",
			"weapons":[""],
			"tags":[ "TACOM ", "Fearless", "NBC", "Rygonet (12\"), Brigade(2, 12\")", "One Node Team comes free per 100 points as a standard TACOM. Further Node Teams may be purchased for 20 points each at no limit."]
		},
		{
			"name":"G1 Ganglion",
			"faction":["rygolic"],
			"value":20,
			"stats":"",
			"type":"Vehicle (40x40)",
			"weapons":[""],
			"tags":[ "TACOM", "Paradrop", "NBC", "Rygonet (24\"), Brigade(4, 12\")", "May activate in the Manuever Phase despite having M0\" to call Brigade move actions only.", "May not lend actions to friendly untis via Rygonet."]
		},
		{
			"name":"S3 Stoma",
			"faction":["rygolic"],
			"value":30,
			"stats":"",
			"type":"Strider (40x40)",
			"weapons":[""],
			"tags":["TACOM", "NBC", "Rygonet (12\"), Brigade(4, 8\")", "When this unit activates in the Fire Phase, it may select one friendly Rygolic unit within Line of Sight up to 8\" away which has not already acted that round. The Stoma and the selected unit fire at the same target simultaneously. Units activated this way are treated as having already fired for the round."]
		},
		{
			"name":"Tactical Team",
			"faction":["rygolic"],
			"value":15,
			"stats":"",
			"type":"Infantry (Team)",
			"weapons":[""],
			"tags":["Infantry (Team)", "Fearless", "NBC"]
		},
		{
			"name":"Legionnaires",
			"faction":["rygolic"],
			"value":25,
			"stats":"",
			"type":"Infantry (Squad)",
			"weapons":[""],
			"tags":["Fearless", "NBC"]
		},
		{
			"name":"Smartgun Team Team",
			"faction":["rygolic"],
			"value":15,
			"stats":"",
			"type":"Infantry (Team)",
			"weapons":[""],
			"tags":["Fearless", "NBC"]
		},
		{
			"name":"Laser Team",
			"faction":["rygolic"],
			"value":15,
			"stats":"",
			"type":"Infantry (Team)",
			"weapons":[""],
			"tags":["Fearless", "NBC"]
		},
		{
			"name":"MANPADS Team",
			"faction":["rygolic"],
			"value":20,
			"stats":"",
			"type":"Infantry (Team)",
			"weapons":[""],
			"tags":["Fearless", "NBC"]
		},
		{
			"name":"Chemical Team",
			"faction":["rygolic"],
			"value":20,
			"stats":"",
			"type":"Infantry (Team)",
			"weapons":[""],
			"tags":["Fearless", "NBC","May always lose up to 3 pin during Upkeep, even when inside of Chemical Weapons."]
		},
		{
			"name":"Guided Mortar Spider",
			"faction":["rygolic"],
			"value":30,
			"stats":"",
			"type":"Infantry (Team)",
			"weapons":[""],
			"tags":["Fearless", "NBC"]
		},
		{
			"name":"Carabiner Horse",
			"faction":["rygolic"],
			"value":15,
			"stats":"",
			"type":"Infantry (Team)",
			"weapons":[""],
			"tags":["Fearless", "NBC", "Resupply(4)","Tow(2)"]
		},
		{
			"name":"Capsule Squad",
			"faction":["rygolic"],
			"value":25,
			"stats":"",
			"type":"Infantry (Squad)", 
			"weapons":[""],
			"tags":["Fearless", "NBC","Deploy this unit via a Capsule Insertion support mission during the Support Phase."]
		},
		{
			"name":"Assassin",
			"faction":["rygolic"],
			"value":30,
			"stats":"",
			"type":"Infantry (Team)",
			"weapons":[""],
			"tags":["Active Camoflauge","Assault Specialist","Fearless","NBC","Sense(8\""]
		},
		{
			"name":"Simulacrum",
			"faction":["rygolic"],
			"value":30,
			"stats":"",
			"type":"Infantry (Team)",
			"weapons":[""],
			"tags":["Fearless", "NBC", "This unit's base is always 40mmx40mm and always leaves a corpse token.","During the Support Phase this unit imitates the closest enemy infantry or vehicle that it can sport. While imitating this unit gains its enemy's weapons, statline and unit class but not any special rules, instead retaining Fearless and NBC and having infinite ammunition.","When entering Close Combat this unit may opt to copy any enemy unit that it would enter close combat with. If two or more Simulacrum units would enter Close Quarter with each other immediately kill them."]
		},
		{
			"name":"C1 Candor",
			"faction":["rygolic"],
			"value":25,
			"stats":"",
			"type":"Wheeled (40x60)",
			"weapons":[""],
			"tags":[ "NBC","PC(2, Rear)"]
		},
		{
			"name":"P1 Parallax",
			"faction":["rygolic"],
			"value":35,
			"stats":"",
			"type":"Hovercraft (40x60)", 
			"weapons":[""],
			"tags":["Amphibious","NBC","PC(2, Rear)"]
		},
		{
			"name":"P2 Perigee",
			"faction":["rygolic"],
			"value":35,
			"stats":"",
			"type":"Hovercraft (40x60)", 
			"weapons":[""],
			"tags":["Amphibious","NBC","PC(2, Rear)"]
		},
		{
			"name":"M1 Microwave",
			"faction":["rygolic"],
			"value":20,
			"stats":"",
			"type":"Tracked (40x40)",
			"weapons":[""],
			"tags":[ "Drone","NBC"]
		},
		{
			"name":"S1 Synod",
			"faction":["rygolic"],
			"value":40,
			"stats":"",
			"type":"Strider (40x40)",
			"weapons":[""],
			"tags":[ "NBC"]
		},
		{
			"name":"C1 Cabal",
			"faction":["rygolic"],
			"value":50,
			"stats":"",
			"type":"Wheeled (40x60)",
			"weapons":[""],
			"tags":[ "APS(5+, 2", "NBC"]
		},
		{
			"name":"X1 X-ray",
			"faction":["rygolic"],
			"value":80,
			"stats":"",
			"type":"Tracked (40x60)",
			"weapons":[""],
			"tags":["APS(6+,3)","NBC"]
		},
		{
			"name":"Automated Sentry",
			"faction":["rygolic"],
			"value":15,
			"stats":"",
			"type":"Carriage (40x40)", 
			"weapons":[""],
			"tags":["Drone","NBC","Paradrop"]
		},
		{
			"name":"Automated ATGM",
			"faction":["rygolic"],
			"value":20,
			"stats":"",
			"type":"Carriage (40x40)", 
			"weapons":[""],
			"tags":["Drone","NBC","Paradrop"]
		},
		{
			"name":"S2 Stochast",
			"faction":["rygolic"],
			"value":40,
			"stats":"",
			"type":"Strider (40x40)",
			"weapons":[""],
			"tags":["NBC"]
		},
		{
			"name":"C2 Chorus",
			"faction":["rygolic"],
			"value":60,
			"stats":"",
			"type":"Wheeled (40x60)",
			"weapons":[""],
			"tags":[ "NBC"]
		},
		{
			"name":"X2 Xiphos",
			"faction":["rygolic"],
			"value":80,
			"stats":"",
			"type":"Tracked (40x60)",
			"weapons":[""],
			"tags":[ "APS(6+, 2)", "NBC"]
		},
		{
			"name":"X3 Xenon",
			"faction":["rygolic"],
			"value":80,
			"stats":"",
			"type":"Tracked (40x60)",
			"weapons":[""],
			"tags":[ "APS(6+, 2)", "NBC"]
		},
		{
			"name":"Y1 Yardfish",
			"faction":["rygolic"],
			"value":30,
			"stats":"",
			"type":"Watercraft (40x60)", 
			"weapons":[""],
			"tags":["Active Camoflauge","NBC"]
		},
		{
			"name":"R1 Redstone",
			"faction":["rygolic"],
			"value":20,
			"stats":"",
			"type":"Helicopter (40x40)",
			"weapons":[""],
			"tags":["Chaff-Flares(1)","NBC","PC(2, Any)","Resupply(3)"]
		},
		{
			"name":"R2 Repeater",
			"faction":["rygolic"],
			"value":30,
			"stats":"",
			"type":"Helicopter (40x40)",
			"weapons":[""],
			"tags":["Chaff-Flares(1)","NBC","PC(1, Any)"]
		},
		{
			"name":"H1 Handler",
			"faction":["rygolic"],
			"value":15,
			"stats":"",
			"type":"Helicopter (40x60)", 
			"weapons":[""],
			"tags":["Drone","NBC"]
		},
		{
			"name":"H2 Hangman",
			"faction":["rygolic"],
			"value":15,
			"stats":"",
			"type":"Helicopter (40x60)", 
			"weapons":[""],
			"tags":["Chaff-Flares(1)","Drone", "NBC"]
		},
		{
			"name":"T1 Tatter",
			"faction":["rygolic"],
			"value":60,
			"stats":"",
			"type":"Helicopter (40x60)", 
			"weapons":[""],
			"tags":["Chaff-Flares(2)","NBC"]
		},
		{
			"name":"Destroying Angel",
			"faction":["rygolic"],
			"value":80,
			"stats":"",
			"type":"Helicopter (40x40)",
			"weapons":[""],
			"tags":["APS(6+, 4)","NBC","Sense(12\")","Rotating this unit costs 0\" and it cannot land.","Every time this unit uses APS, its weapon Dice statistic decreases by 1 for the rest of the round. If the Dice value hits 0 it cannot be fired this round and APS cannot be triggered again this round. During Upkeep the laser weapon's Dice value is reset to 4 regardless of how many munitions were intercepted last round."]
		},
		{
			"name":"B1 Blindsight",
			"faction":["rygolic"],
			"value":50,
			"stats":"",
			"type":"Aircraft (40x60)",
			"weapons":[""],
			"tags":["CAP","Afterburner","Chaff-Flares(2)"]
		},
		{
			"name":"Z1 Zenith",
			"faction":["rygolic"],
			"value":50,
			"stats":"",
			"type":"Aircraft (40x60)",
			"weapons":[""],
			"tags":["CAS","Active Camoflauge","Afterburner"]
		},
		{
			"name":"A1 Apogee",
			"faction":["rygolic"],
			"value":50,
			"stats":"",
			"type":"Aircraft (40x60)",
			"weapons":[""],
			"tags":["CAS","Chaff-Flares(2)"]
		},
		{
			"name":"PEG.123-AC Graf",
			"faction":["santagri"],
			"value":0,
			"stats":"",
			"type":"Helicopter (40x60)", 
			"weapons":[""],
			"tags":["TACOM", "Chaff-Flares(1)","NBC","Brigade (4, 16\")"]
		},
		{
			"name":"UNI.28-AC Don",
			"faction":["santagri"],
			"value":25,
			"stats":"",
			"type":"Helicopter (40x60)", 
			"weapons":[""],
			"tags":["TACOM","NBC","Brigade (3, 12\")","Leviathan(2)"]
		},
		{
			"name":"VBD.127-DB Castellan",
			"faction":["santagri"],
			"value":40,
			"stats":"",
			"type":"Tracked (40x60)",
			"weapons":[""],
			"tags":["TACOM","NBC","Brigade (2, 8\")","Whenever this unit scores a kill on an enemy Vehicle, it may Rally a friendly unit within 8\"."]
		},
		{
			"name":"Santagrine Militia",
			"faction":["santagri"],
			"value":5,
			"stats":"",
			"type":"Infantry (Squad)", 
			"weapons":[""],
			"tags":["NBC","Tercio"]
		},
		{
			"name":"Mounted Serjeants",
			"faction":["santagri"],
			"value":10,
			"stats":"",
			"type":"Infantry (Squad)", 
			"weapons":[""],
			"tags":["Fearless","NBC"]
		},
		{
			"name":"Yeoman Paras",
			"faction":["santagri"],
			"value":15,
			"stats":"",
			"type":"Infantry (Squad)", 
			"weapons":[""],
			"tags":["Assault Specialist","Fearless","NBC","Paradrop","Tercio"]
		},
		{
			"name":"Volley Team",
			"faction":["santagri"],
			"value":5,
			"stats":"",
			"type":"Infantry (Team)",
			"weapons":[""],
			"tags":["NBC","Tercio"]
		},
		{
			"name":"Light Gun Team",
			"faction":["santagri"],
			"value":5,
			"stats":"",
			"type":"Infantry (Team)",
			"weapons":[""],
			"tags":["NBC"]
		},
		{
			"name":"Grenadier Team",
			"faction":["santagri"],
			"value":10,
			"stats":"",
			"type":"Infantry (Team)",
			"weapons":[""],
			"tags":["NBC","Tercio"]
		},
		{
			"name":"Machine Gun Team",
			"faction":["santagri"],
			"value":10,
			"stats":"",
			"type":"Infantry (Team)",
			"weapons":[""],
			"tags":["NBC","Tercio"]
		},
		{
			"name":"Bombard Team",
			"faction":["santagri"],
			"value":15,
			"stats":"",
			"type":"Infantry (Team)",
			"weapons":[""],
			"tags":["NBC"]
		},
		{
			"name":"Groundsmen",
			"faction":["santagri"],
			"value":10,
			"stats":"",
			"type":"Infantry (Team)",
			"weapons":[""],
			"tags":["Fearless","NBC","Paradrop","Sense(6\")","Tercio"]
		},
		{
			"name":"Pages",
			"faction":["santagri"],
			"value":10,
			"stats":"",
			"type":"Infantry (Team)",
			"weapons":[""],
			"tags":["Fearless","NBC","This unit may activate to call a plane mission during the Support Phase, replace a friendly TACOM's turn."]
		},
		{
			"name":"Black Fangs",
			"faction":["santagri"],
			"value":20,
			"stats":"",
			"type":"Infantry (Team)",
			"weapons":[""],
			"tags":["Assault Specialist","Fearless","NBC"]
		},
		{
			"name":"Atomic Pilgrims",
			"faction":["santagri"],
			"value":60,
			"stats":"",
			"type":"Infantry (Team)",
			"weapons":[""],
			"tags":["Fearless","NBC"]
		},
		{
			"name":"Steam Tractor",
			"faction":["santagri"],
			"value":5,
			"stats":"",
			"type":"Wheeled (40x60)",
			"weapons":[""],
			"tags":[ "PC(1, Any)","NBC","Tow(16)"]
		},
		{
			"name":"War Wagon",
			"faction":["santagri"],
			"value":5,
			"stats":"",
			"type":"Carriage (40x60)",
			"weapons":[""],
			"tags":["NBC","PC(4, Any)","Resupply(2)","Tow(Infinite)"]
		},
		{
			"name":"CB.76 Misericorde",
			"faction":["santagri"],
			"value":15,
			"stats":"",
			"type":"Tracked (40x40)",
			"weapons":[""],
			"tags":["NBC","Paradrop","Tow(2)","May fire while carrying desanting infantry and can carry PC(3) desants instead of PC(2)"]
		},
		{
			"name":"Exto",
			"faction":["santagri"],
			"value":25,
			"stats":"",
			"type":"Tracked (40x60)",
			"weapons":[""],
			"tags":["Leviathan(2)","NBC","PC(6, Sides)","Resupply(4)","Tow(3)"]
		},
		{
			"name":"Hexamer",
			"faction":["santagri"],
			"value":10,
			"stats":"",
			"type":"Tracked (40x60)",
			"weapons":[""],
			"tags":["NBC","Tow(6)"]
		},
		{
			"name":"VC.2 Veldjen",
			"faction":["santagri"],
			"value":20,
			"stats":"",
			"type":"Tracked (40x60)",
			"weapons":[""],
			"tags":["NBC","Tow(3)"]
		},
		{
			"name":"VC.44R Whirlwind",
			"faction":["santagri"],
			"value":35,
			"stats":"",
			"type":"Tracked (40x60)",
			"weapons":[""],
			"tags":["NBC","Tow(5)","This unit pays an additional 1\" when rotating left. When rotating right, the rotation is free up to 180 degrees."]
		},
		{
			"name":"VE.378 Cataphract",
			"faction":["santagri"],
			"value":40,
			"stats":"",
			"type":"Tracked (40x60)",
			"weapons":[""],
			"tags":["NBC"]
		},
		{
			"name":"Vauban",
			"faction":["santagri"],
			"value":60,
			"stats":"",
			"type":"Tracked (40x60)",
			"weapons":[""],
			"tags":["Leviathan(3)", "NBC","Takes pin as if it were a Tercio.","May desant at PC(4).","If the CWIS has not been destroyed this unit gains APS(6+, Infinite). This APS has infintie ammo but may only trigger once per round and only against Guided Missiles."]
		},
		{
			"name":"Field Gun",
			"faction":["santagri"],
			"value":10,
			"stats":"",
			"type":"Carriage (40x40)",
			"weapons":[""],
			"tags":["NBC"]
		},
		{
			"name":"SB.15 1-lber Pom-Pom",
			"faction":["santagri"],
			"value":10,
			"stats":"",
			"type":"Carriage (40x40)",
			"weapons":[""],
			"tags":["NBC"]
		},
		{
			"name":"CB.61 Galgo",
			"faction":["santagri"],
			"value":15,
			"stats":"",
			"type":"Wheeled (40x60)",
			"weapons":[""],
			"tags":[ "NBC","Paradrop"]
		},
		{
			"name":"SB.18 22-lber Retumbo",
			"faction":["santagri"],
			"value":20,
			"stats":"",
			"type":"Carriage (40x60)",
			"weapons":[""],
			"tags":["NBC"]
		},
		{
			"name":"OSM Mogul",
			"faction":["santagri"],
			"value":40,
			"stats":"",
			"type":"Tracked (40x60)",
			"weapons":[""],
			"tags":["NBC","Tow(5)"]
		},
		{
			"name":"LDAL Pietro",
			"faction":["santagri"],
			"value":10,
			"stats":"",
			"type":"Watercraft (40x60)", 
			"weapons":[""],
			"tags":["PC(8, Front)","NBC"]
		},
		{
			"name":"PEG.60-11 Squire",
			"faction":["santagri"],
			"value":20,
			"stats":"",
			"type":"Helicopter (40x60)", 
			"weapons":[""],
			"tags":["PC(2, Rear)","NBC"]
		},
		{
			"name":"PEG.80-01A Sambuca",
			"faction":["santagri"],
			"value":25,
			"stats":"",
			"type":"Helicopter (40x60)", 
			"weapons":[""],
			"tags":["Chaff-Flares(1)","PC(6, Rear)","NBC","Tow(2)"]
		},
		{
			"name":"PEG.123-00 Knight-Errant",
			"faction":["santagri"],
			"value":30,
			"stats":"",
			"type":"Helicopter (40x60)", 
			"weapons":[""],
			"tags":["Chaff-Flares(2)","NBC"]
		},
		{
			"name":"UNI.28-05 Conquistador",
			"faction":["santagri"],
			"value":40,
			"stats":"",
			"type":"Helicopter (40x60)", 
			"weapons":[""],
			"tags":["Leviathan(2)","NBC"]
		},
		{
			"name":"UNI.28-03 Man-At-Arms",
			"faction":["santagri"],
			"value":50,
			"stats":"",
			"type":"Helicopter (40x60)", 
			"weapons":[""],
			"tags":["Leviathan(2)","NBC"]
		},
		{
			"name":"UNI.28-08 Lancer",
			"faction":["santagri"],
			"value":60,
			"stats":"",
			"type":"Helicopter (40x60)", 
			"weapons":[""],
			"tags":["Leviathan(2)","NBC"]
		},
		{
			"name":"MC.17-86 Spada-Fresco",
			"faction":["santagri"],
			"value":20,
			"stats":"",
			"type":"Aircraft (40x60)",
			"weapons":[""],
			"tags":["CAP","Afterburner"]
		},
		{
			"name":"MC.20-01C Rocinante",
			"faction":["santagri"],
			"value":30,
			"stats":"",
			"type":"Aircraft (40x60)",
			"weapons":[""],
			"tags":[ "CAP","Afterburner", "Chaff-Flares(1)","Flower of the Atom"]
		},
		{
			"name":"DC/B.2K Jonquil",
			"faction":["santagri"],
			"value":30,
			"stats":"",
			"type":"Aircraft (40x60)",
			"weapons":[""],
			"tags":[ "CAP","Afterburner", "Flower of the Atom"]
		},
		{
			"name":"DC.4E Bavieca",
			"faction":["santagri"],
			"value":40,
			"stats":"",
			"type":"Aircraft (40x60)",
			"weapons":[""],
			"tags":[ "CAP","Afterburner", "Chaff-Flares(2)","Flower of the Atom"]
		},
		{
			"name":"Dummy",
			"faction":["federal","lupar","rygolic","santagri"],
			"value":5,
			"stats":"Dummy (any)",
			"type":"Dummy (any)",
			"weapons":[""],
			"tags":["Unit blind is removed from the battlefield on being identified or being hit by any attack."]
		}
	]
}

export default list