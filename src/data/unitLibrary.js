const list = {
	"units":[
		{
			"name":"Type 68C Appomattox",
			"faction":["federal"],
			"value":0,
			"stats":["H2","S32\"","M8\"","Q3","T6/4/4","C3"],
			"type":"Tracked (40x60)",
			"weapons":["Pequod SA 11.5mm, commander issue","1M1V Target Bearing Transmitter","902V 81mm Smoke Launchers"],
			"tags":["TACOM", "NBC", "Amphibious", "Brigade(3, 12\")"],
			"command":3
		},
		{
			"name":"Expeditionary Command Squad",
			"faction":["federal"],
			"value":15,
			"stats":["H1","S24\"","M5\"","Q4", "T1/1-/1-", "C5"],
			"type":"Infantry (Squad)",
			"weapons":["6G1A 7.76mm Automatic Rifle","6L3 10mm HEDP Grenade Launcher"],
			"tags":["TACOM", "Assault Dismount", "Fearless", "Paradrop", "Brigade(2,8\")", "All units targeted in a Brigade (including self) lose all pin tokens."],
			"command":5
		},
		{
			"name":"Type 40M Veldjen-MC",
			"faction":["federal"],
			"value":15,
			"stats":["H2","S32\"","M6\"","Q3","T8/6/5","C4"],
			"type":"Tracked (40x60)",
			"command":4,
			"weapons":["6G2 7.76mm MG","2K70 57mm High Velocity Gun", "2K15 40mm HE Grenade Launcher"],
			"tags":[ "TACOM", "NBC", "Steel Watchbands", "Brigade (4,6\")"]
		},
		{
			"name":"Type 52C Duck-C",
			"faction":["federal"],
			"value":15,
			"stats":["H2","S32\"","M10\"","Q3","T6/4/4","C4"],
			"type":"Tracked (40x60)",
			"command":4,
			"weapons":["6G2 7.76mm MG","2K81 152mm Gun-Launcher (152mm HEAT, 152mm Beehive)","902V 81mm Smoke Launchers"],
			"tags":[ "TACOM", "NBC", "Steel Watchbands", "Amphibious", "Brigade (4,6\")"]
		},
		{
			"name":"Type 52PC Mallard-C",
			"faction":["federal"],
			"value":15,
			"stats":["H2","S32\"","M10\"","Q4","T4/3/3","C4"],
			"type":"Tracked (40x60)",
			"command":4,
			"weapons":["2A76 7.76mm Minigun","2K56 76mm Gun (76mmHVAP, 76mm HE-Frag)","902V 81mm Smoke Launchers"],
			"tags":[ "TACOM", "NBC", "Steel Watchbands", "Paradrop", "Amphibious", "Brigade (4,6\")"]
		},
		{
			"name":"Type 55MC Razorback-MC",
			"faction":["federal"],
			"value":30,
			"stats":["H2","S32\"","M8\"","Q3","T14/7/5","C4"],
			"type":"Tracked (40x60)",
			"command":4,
			"weapons":["6G2 7.76mm MG, Hull","6GZ1 14,5mm HMG","2K41 100mm Gun (100mm APDS, 100mm HE-Frag)","902V 81mm Smoke Launchers"],
			"tags":[ "TACOM", "NBC", "Steel Watchbands", "Brigade (4,6\")"]
		},
		{
			"name":"Type 71C Tusker-KC",
			"faction":["federal"],
			"value":40,
			"stats":["H2","S32\"","M8\"","Q4","T16/8/6","C4"],
			"type":"Tracked (40x60)",
			"command":4,
			"weapons":["6GZ1 14.5mm HMG","2K43 115mm Gun (115mm Sabot, 115mm HEAT)","902V 81mm Smoke Launchers"],
			"tags":[ "TACOM", "NBC", "Steel Watchbands", "Brigade (4,6\")"]
		},
		{
			"name":"Type 71BC Tusker-GMC",
			"faction":["federal"],
			"value":70,
			"stats":["H2","S32\"","M8\"","Q5","T24/12/8","C4"],
			"type":"Tracked (40x60)",
			"command":4,
			"weapons":["6GZ1 14.5mm HMG","2K81 152mm Gun-Launcher (152mm Gun-Launched ATGM, 152mm Gun-Launched Thermobaric, 152mm Tandem HEAT)","902V 81mm Smoke Launchers"],
			"tags":[ "TACOM", "NBC", "Steel Watchbands", "Brigade (4,6\")"]
		},
		{
			"name":"Reservists",
			"faction":["federal"],
			"value":5,
			"stats":["H1","S16\"","M4\"","Q1","T1-/1-/1-"],
			"command":0,
			"type":"Infantry (Squad)",
			"weapons":["6P3 11.5mm SMG","6L4 73mm RPG"],
			"tags":[""]
		},
		{
			"name":"States-Grenadiers",
			"faction":["federal"],
			"value":10,
			"stats":["H1","S16\"","M4\"","Q2","T1/1-/1-"],
			"command":0,
			"type":"Infantry (Squad)",
			"weapons":["6G1 7.76mm Battle Rifle","6G2 7.76mm GPMG","6L1 85mm RPG"],
			"tags":[ "Assault Dismount"]
		},
		{
			"name":"Federal Expeditionaries",
			"faction":["federal"],
			"value":15,
			"stats":["H1","S16\"","M5\"","Q3","T1/1-/1-"],
			"command":0,
			"type":"Infantry (Squad)",
			"weapons":["6G1A 7.76mm Automatic Rifle","6L3 40mm HEDP Grenade Launcher"],
			"tags":["Assault Dismount", "Fearless", "Paradrop"]
		},
		{
			"name":"Mortar Team",
			"faction":["federal"],
			"value":10,
			"stats":["H1","S16\"","M4\"","Q2","T1-/1-/1-"],
			"command":0,
			"type":"Infantry (Team)",
			"weapons":["6G1 7.76mm Battle Rifle","6L2 60mm Knee Mortar (60mm Frag, 60mm Smoke)"],
			"tags":[ "Assault Dismount"]
		},
		{
			"name":"ATGM Team",
			"faction":["federal"],
			"value":10,
			"stats":["H1","S32\"","M4\"","Q2","T1-/1-/1-"],
			"type":"Infantry (Team)",
			"command":0,
			"weapons":["6G1 7.76mm Battle Rifle","9GR1 125mm ATGM"],
			"tags":[ "Assault Dismount"]
		},
		{
			"name":"MANPADS Team",
			"faction":["federal"],
			"value":10,
			"stats":["H1","S32\"","M4\"","Q2","T1-/1-/1-"],
			"command":0,
			"type":"Infantry (Team)", 
			"weapons":["6G1 7.76mm Battle Rifle","9GR2 85mm MANPADS"],
			"tags":["Assault Dismount"]
		},
		{
			"name":"Recoilless Rifle Team",
			"faction":["federal"],
			"value":15,
			"stats":["H1","S24\"","M4\"","Q2","T1-/1-/1-"],
			"command":0,
			"type":"Infantry (Team)",
			"weapons":["6G1 7.76mm Battle Rifle","6L5 73mm Recoilless Rifle (73mm HEAT, 73mm Incendiary, 73mm Smoke)"],
			"tags":[ "Assault Dismount"]
		},
		{
			"name":"Expeditionary R.R. Team",
			"faction":["federal"],
			"value":15,
			"stats":["H1","S24\"","M5\"","Q3","T1/1-/1-"],
			"command":0,
			"type":"Infantry (Team)", 
			"weapons":["6G1A 7.76mm Automatic Rifle","6L6 57mm Light Recoilless Rifle (57mm HEAT, 57mm Canister)"],
			"tags":["Assault Dismount", "Fearless", "Paradrop"]
		},
		{
			"name":"Pup Carson Scouts",
			"faction":["federal"],
			"value":10,
			"stats":["H1","S24\"","M5\"","Q2","T1/1-/1-"],
			"command":0,
			"type":"Infantry (Team)",
			"weapons":["6G1 7.76mm Battle Rifle", "Teeth & Claws"],
			"tags":[ "Sense(6\")", "Any Tracked with at least M6\" which this unit embarks or desants on can make a \"pathfinder move\" during Maneuver Phase which is only M6\" but ignores terrain entrance/exit costs and all terrain multipliers."]
		},
		{
			"name":"Intermarine Rangers",
			"faction":["federal"],
			"value":15,
			"stats":["H1","S32\"","M5\"","Q4","T1/1-/1-"],
			"command":0,
			"type":"Infantry (Team)",
			"weapons":["6G5 7.76mm Sniper Rifle","6P3 11.5mm SMG","1A5P MVSO Acquisition Laser"],
			"tags":[ "Assault Dismount", "Fearless","This Unit does not lose accuracy from pin tokens while it is not identified."]
		},
		{
			"name":"LaF-30 Ox",
			"faction":["federal"],
			"value":10,
			"stats":["H2","S16\"","M8\"","Q2","T1/1/1"],
			"command":0,
			"type":"Wheeled (40x60)", 
			"weapons":["6G1 7.76mm Battle Rifle"],
			"tags":["Resupply(6)", "PC(2, Rear)", "Tow(3)"]
		},
		{
			"name":"Type 60 Grumble",
			"faction":["federal"],
			"value":10,
			"stats":["H2","S24\"","M8\"","Q2","T4/4/3"],
			"command":0,
			"type":"Wheeled (40x60)",
			"weapons":["6G2 7.76mm MG","2K15 40mm HE Grenade Launcher"],
			"tags":[ "Amphibious", "PC(3, Rear)", "NBC"]
		},
		{
			"name":"Type 68 Bantam",
			"faction":["federal"],
			"value":20,
			"stats":["H2","S32\"","M8\"","Q3","T6/4/4"],
			"command":0,
			"type":"Tracked (40x60)",
			"weapons":["6G2 7.76mm MG","2K28 73mm Low-Pressure Gun (73mm HEAT, 73mm HE-Frag)","9GR1 125mm ATGM","902V 81mm Smoke Launchers"],
			"tags":[ "Amphibious", "PC(2, Rear)", "NBC","Steel Watchbands"]
		},
		{
			"name":"Type 68B Bantam-MK",
			"faction":["federal"],
			"value":25,
			"stats":["H2","S32\"","M8\"","Q3","T6/4/4"],
			"command":0,
			"type":"Tracked (40x60)",
			"weapons":["6G2 7.76mm MG","2A34 23mm Autocannon","9GR1 125mm ATGM","902V 81mm Smoke Launchers"],
			"tags":[ "Amphibious", "PC(2, Rear)", "NBC","Steel Watchbands"]
		},
		{
			"name":"Type 40 Veldjen-M",
			"faction":["federal"],
			"value":20,
			"stats":["H2","S32\"","M6\"","Q2","T8/6/5"],
			"command":0,
			"type":"Tracked (40x60)",
			"weapons":["6G2 7.76mm MG","2K70 57mm High Velocity Gun", "2K15 40mm HE Grenade Launcher"],
			"tags":[ "NBC", "Steel Watchbands"]
		},
		{
			"name":"Type 52 Duck",
			"faction":["federal"],
			"value":20,
			"stats":["H2","S32\"","M10\"","Q2","T6/4/4"],
			"command":0,
			"type":"Tracked (40x60)",
			"weapons":["6G2 7.76mm MG","2K81 152mm Gun-Launcher (152mm HEAT, 152mm Beehive)","902V 81mm Smoke Launchers"],
			"tags":[ "Amphibious", "NBC", "Steel Watchbands"]
		},
		{
			"name":"Type 52P Mallard",
			"faction":["federal"],
			"value":20,
			"stats":["H2","S32\"","M10\"","Q3","T4/3/3"],
			"command":0,
			"type":"Tracked (40x60)",
			"weapons":["2A76 7.76mm Minigun","2K56 76mm Gun (76mmHVAP, 76mm HE-Frag)","902V 81mm Smoke Launchers"],
			"tags":[ "Amphibious", "NBC","Paradrop", "Steel Watchbands"]
		},
		{
			"name":"Type 55M Razorback-M",
			"faction":["federal"],
			"value":40,
			"stats":["H2","S32\"","M8\"","Q2","T14/7/5"],
			"command":0,
			"type":"Tracked (40x60)",
			"weapons":["6G2 7.76mm MG, Hull","6GZ1 14,5mm HMG","2K41 100mm Gun (100mm APDS, 100mm HE-Frag)","902V 81mm Smoke Launchers"],
			"tags":[ "NBC", "Steel Watchbands"]
		},
		{
			"name":"Type 71 Tusker-K",
			"faction":["federal"],
			"value":50,
			"stats":["H2","S32\"","M8\"","Q3","T16/8/6"],
			"command":0,
			"type":"Tracked (40x60)", 
			"weapons":["6GZ1 14.5mm HMG","2K43 115mm Gun (115mm Sabot, 115mm HEAT)","902V 81mm Smoke Launchers"],
			"tags":["NBC", "Steel Watchbands"]
		},
		{
			"name":"Type 71B Tusker-GM",
			"faction":["federal"],
			"value":80,
			"stats":["H2","S32\"","M8\"","Q4","T24/12/8"],
			"command":0,
			"type":"Tracked (40x60)", 
			"weapons":["6GZ1 14.5mm HMG","2K81 152mm Gun-Launcher (152mm Gun-Launched ATGM, 152mm Gun-Launched Thermobaric, 152mm Tandem HEAT)","902V 81mm Smoke Launchers"],
			"tags":["NBC", "Steel Watchbands"]
		},
		{
			"name":"2M9 Korenbloem",
			"faction":["federal"],
			"value":25,
			"stats":["H1","S24\"","M2\"","Q2","T1/1-/1-"],
			"command":0,
			"type":"Carriage (40x60)",
			"weapons":["6G1 7.76mm Battle Rifle","2M9 82mm Automatic Mortar (82mm HEAT, 82mm Frag, 82mm Chemical-SP, 82mm Smoke)"],
			"tags":[""]
		},
		{
			"name":"2K52 Wheat",
			"faction":["federal"],
			"value":25,
			"stats":["H1","S24\"","M2\"","Q2","T2/1-/1-"],
			"command":0,
			"type":"Carriage (40x60)",
			"weapons":["6G1 7.76mm Battle Rifle","2K52 152mm Howitzer(152mm HEAT, 152mm Frag, 152mm Chemical-SP, 152mm Smoke)"],
			"tags":[""]
		},
		{
			"name":"Type 60AT Runner",
			"faction":["federal"],
			"value":25,
			"stats":["H2","S32\"","M8\"","Q2","T4/4/3"],
			"command":0,
			"type":"Wheeled (40x60)",
			"weapons":["6G2 7.76mm MG","9GR1M 125mm ATGM Rack"],
			"tags":[ "Amphibious", "PC(1, Rear)"]
		},
		{
			"name":"Type 52LW Firehose",
			"faction":["federal"],
			"value":30,
			"stats":["H2","S32\"","M10\"","Q3","T6/4/4"],
			"command":0,
			"type":"Tracked (40x60)",
			"weapons":["6P3 11.5mm SMG","2A37 37mm Rotary Cannon"],
			"tags":[ "Amphibious", "NBC"]
		},
		{
			"name":"Type 60MD Wave",
			"faction":["federal"],
			"value":30,
			"stats":["H2","S24\"","M8\"","Q2","T4/4/3"],
			"command":0,
			"type":"Wheeled (40x60)",
			"weapons":["6G2 7.76mm MG","2M9 82mm Automatic Mortar (82mm Frag, 82mm Chemical-SP, 82mm Smoke)"],
			"tags":[ "Amphibious", "PC(1, Rear)"]
		},
		{
			"name":"Type 71H Tusker-AV",
			"faction":["federal"],
			"value":50,
			"stats":["H2","S32\"","M8\"","Q3","T14/6/6"],
			"command":0,
			"type":"Tracked (40x60)",
			"weapons":["6GZ1 14.5mm HMG","2K52 152mm Howitzer(152mm HEAT, 152mm Frag, 152mm Chemical-SP, 152mm Smoke)"],
			"tags":["NBC","Steel Watchbands"]
		},
		{
			"name":"S36 Paddle",
			"faction":["federal"],
			"value":15,
			"stats":["H2","S32\"","M8\"","Q2","T3/3/1+"],
			"command":0,
			"type":"Watercraft (40x60)",
			"weapons":["6GN3 14.5mm HMG","6G2 7.76mm MG","2K15 40mm HE Grenade Launchers"],
			"tags":[ "PC(3, Any)"]
		},
		{
			"name":"HzN-18 Moose",
			"faction":["federal"],
			"value":15,
			"stats":["H2","S32\"","M32\"","Q2","T1+/1+/1+"],
			"command":0,
			"type":"Helicopter (40x60)",
			"weapons":["6G2 7.76mm MG"],
			"tags":[ "PC(2, Sides)"]
		},
		{
			"name":"HzN-22 Hugag",
			"faction":["federal"],
			"value":20,
			"stats":["H2","S32\"","M24\"","Q2","T2/2/2"],
			"command":0,
			"type":"Helicopter (40x60)",
			"weapons":["2A76 7.76mm Minigun"],
			"tags":[ "PC(6, Sides)", "Resupply(6)","Tow(2)"]
		},
		{
			"name":"HzN-18B Bison",
			"faction":["federal"],
			"value":25,
			"stats":["H2","S32\"","M32\"","Q3","T2/2/2"],
			"command":0,
			"type":"Helicopter (40x60)",
			"weapons":["2A76 7.76mm Minigun","2K15 40mm Grenade Launcher", "9GR1 125mm ATGM"],
			"tags":[ "Chaff-Flares(1)","PC(1, Sides)"]
		},
		{
			"name":"SiG-17 Hardnose",
			"faction":["federal"],
			"value":20,
			"stats":["H*","S*\"","M10\"","Q2","T3","E0"],
			"command":0,
			"type":"Aircraft (40x60)",
			"weapons":["6G2 7.76mm MG, octet","4BB2 350kg Dual-Purpose Cluster Bomb","9GR6 200mm Beam-Riding AAM"],
			"tags":[ "CAS"]
		},
		{
			"name":"SiG-16 Rufe",
			"faction":["federal"],
			"value":20,
			"stats":["H*","S*\"","M10\"","Q2","T4","E1"],
			"command":0,
			"type":"Aircraft (40x60)",
			"weapons":["2A34 23mm Autocannons, triplet", "4BN2 350kg Napalm Bomb","9GR4 120mm Infrared AAM"],
			"tags":[ "CAP", "Sprint Motor"]
		},
		{
			"name":"SiG-16B Schroef",
			"faction":["federal"],
			"value":30,
			"stats":["H*","S*\"","M10\"","Q2","T4","E0"],
			"command":0,
			"type":"Aircraft (40x60)",
			"weapons":["2A40 37mm Autocannons, triplet","4BE1 500kg HE Bomb","9GR3 275mm AGM"],
			"tags":[ "CAS","Chaff-Flares(2)","Sprint Motor"]
		},
		{
			"name":"Company Chief",
			"faction":["lupar"],
			"value":0,
			"stats":["H1","S24\"","M5\"","Q4","T1+/1/1","C3"],
			"type":"Infantry (Team)",
			"command":3,
			"weapons":["Ml2. 38 .30 LMG", "Mle. 44 3.5-inch RPG", "OtPv. 9 30-inch Machete", "Stimulant-Laced Bomb, \"Signal Salt\""],
			"tags":[ "TACOM",	"Bloodlust", "Infiltrator", "Sense (6\")", "Brigade (4, 8\")"]
		},
		{
			"name":"Internal Security Escort",
			"faction":["lupar"],
			"value":15,
			"stats":["H1","S16\"","M4\"","Q5","T2/1+/1+","C4"],
			"type":"Infantry (Squad)",
			"command":4,
			"weapons":["FdcL 63 4-gauge Shotgun", "PtDs. 13 Tactical Breaching Charge", "OtPv. 9 30-inch Machete","Stimulant-Laced Filter \"Signal Snuff\""],
			"tags":[ "TACOM","Assault Specialist", "Brigade (3, 4\")", "NBC"]
		},
		{
			"name":"Waykeeper Judge",
			"faction":["lupar"],
			"value":20,
			"stats":["H1","S24\"","M4\"","Q5","T1/1/1","C5"],
			"type":"Infantry (Team)",
			"command":5,
			"weapons":["Mle. 32 .30 Self-Loading Rifle","Teeth & Claws","Stimulant-Laced Bomb, \"Signal Salt\""],
			"tags":[ "TACOM",	"Amphibious","Guidance(12\")", "Infiltrator", "Sense (8\")", "Brigade (3, 12\")", "While this unit is alive, no unit in this army can willingly go Berserk. Only Judges may call Exhortation support Missions."]
		},
		{
			"name":"Territorials",
			"faction":["lupar"],
			"value":5,
			"stats":["H1","S24\"","M5\"","Q2","T1/1-/1-"],
			"type":"Infantry (Squad)",
			"command":0,
			"weapons":["Mle. 32 .30 Self-Loading Rifle","OtPv. 9 30-inch Machete"],
			"tags":[ "Amphibious","Bloodlust", "Infiltrator", "Sense (6\")"]
		},
		{
			"name":"Chasseurs",
			"faction":["lupar"],
			"value":10,
			"stats":["H1","S24\"","M5\"","Q2","T1+/1/1"],
			"type":"Infantry (Squad)",
			"command":0,
			"weapons":["Mle. 38 .30 LMG", "Mle. 44 3.5-inch RPG", "OtPv. 9 30-inch Machete"],
			"tags":[ "Bloodlust", "Infiltrator", "Sense (6\")"]
		},
		{
			"name":"White Gloves",
			"faction":["lupar"],
			"value":20,
			"stats":["H1","S24\"","M5\"","Q4","T1+/1/1"],
			"type":"Infantry (Squad)",
			"command":0,
			"weapons":["Mle. 52F .30 Automatic Rifle", "Lacra 3.5-inch Shouldered R.R.", "Mle. 7 Laser Designator","Mle. 313 26-inch Side Saber"],
			"tags":[ "Bloodlust", "Fearless", "Sense (6\")"]
		},
		{
			"name":"Internal Security",
			"faction":["lupar"],
			"value":20,
			"stats":["H1","S16\"","M4\"","Q4","T2/1+/1+"],
			"type":"Infantry (Squad)",
			"command":0,
			"weapons":["FdcL 63 4-gauge Shotgun", "PtDs. 13 Tactical Breaching Charge", "OtPv. 9 30-inch Machete","Stimulant-Laced Filter \"Signal Snuff\""],
			"tags":[ "Assault Specialist","NBC"]
		},
		{
			"name":"Machine Gun Team",
			"faction":["lupar"],
			"value":10,
			"stats":["H1","S24\"","M5\"","Q2","T1/1-/1-"],
			"type":"Infantry (Team)",
			"command":0,
			"weapons":["Mle. 32 .30 Self-Loading Rifle","Mtl. 19 .50 HMG"],
			"tags":["Bloodlust", "Infiltrator", "Sense (6\")"]
		},
		{
			"name":"Hima Team",
			"faction":["lupar"],
			"value":15,
			"stats":["H1","S24\"","M5\"","Q2","T1/1-/1-"],
			"type":"Infantry (Team)",
			"command":0,
			"weapons":["Mle. 32 .30 Self-Loading Rifle", "Lacra-76 \"Hima\" 3-inch Launcher"],
			"tags":["Bloodlust","Sense (6\")"]
		},
		{
			"name":"Recoilless Rifle Team",
			"faction":["lupar"],
			"value":15,
			"stats":["H1","S24\"","M5\"","Q2","T1/1-/1-"],
			"type":"Infantry (Team)",
			"command":0,
			"weapons":["Mle. 32 .30 Self-Loading Rifle","TAP 20 3-inch Recoilless Rifle"],
			"tags":["Bloodlust", "Infiltrator", "Sense (6\")"]
		},
		{
			"name":"Guided Missile Team",
			"faction":["lupar"],
			"value":20,
			"stats":["H1","S32\"","M8\"","Q3","T1/1/1"],
			"type":"Infantry (Team)",
			"command":0,
			"weapons":["Mle. 32 .30 Self-Loading Rifle","SD84 4.7-inch Missile Launcher"],
			"tags":["Bloodlust","Sense (6\")"]
		},
		{
			"name":"Subaltern Team",
			"faction":["lupar"],
			"value":10,
			"stats":["H1","S32\"","M8\"","Q3","T1/1/1"],
			"type":"Infantry (Team)",
			"command":0,
			"weapons":["Mle. 32 .30 Self-Loading Rifle","OtPv. 9 30-inch Machete"],
			"tags":["Bloodlust", "Infiltrator", "Sense (6\")", "Brigade (2, 4\")"]
		},
		{
			"name":"Made-To-Orders",
			"faction":["lupar"],
			"value":10,
			"stats":["H1","S32\"","M8\"","Q3","T1/1/1"],
			"type":"Infantry (Squad)",
			"command":0,
			"weapons":["Mutated Teeth & Claws"],
			"tags":[ "Amphibious","Bloodlust", "Tow(2)", "Sense (6\")","If depleted, loses its depletion token at the end of round after winning a close combat."]
		},
		{
			"name":"Waykeepers",
			"faction":["lupar"],
			"value":15,
			"stats":["H1","S24\"","M5\"","Q4","T1/1/1"],
			"type":"Infantry (Team)",
			"command":0,
			"weapons":["Mle. 32 .30 Self-Loading Rifle","Teeth & Claws", "Stimulant-Laced Bomb, \"Signal Salt\""],
			"tags":[ "Amphibious","Guidance(12\")", "Infiltrator", "Sense (8\")"]
		},
		{
			"name":"Bounders",
			"faction":["lupar"],
			"value":20,
			"stats":["H1","S32\"","M5\"","Q2","T1/1-/1-"],
			"type":"Infantry (Team)",
			"command":0,
			"weapons":["Mle. 32 .30 Self-Loading Rifle","APX-25 1-inch Anti-Tank Rifle"],
			"tags":[ "Amphibious","Bloodlust", "Infiltrator", "Sense (6\")"]
		},
		{
			"name":"CdS-F1 Kennel",
			"faction":["lupar"],
			"value":10,
			"stats":["H2","S16\"","M8\"","Q2","T2/2/1"],
			"type":"Wheeled (40x60)",
			"command":0,
			"weapons":["Mtl. 19 .50 HMG"],
			"tags":[ "PC(2, Rear)", "Resupply(6)", "Tow(3)"]
		},
		{
			"name":"VBD-U Denmother",
			"faction":["lupar"],
			"value":5,
			"stats":["H1","S16\"","M8\"","Q2","T3/2/1+"],
			"type":"Tracked (40x40)",
			"command":0,
			"weapons":["Lenus Automatic .45, driver issue"],
			"tags":[ "PC(1)","This unit cannot have embarked units and desants at the same time.","Embarked Units can fire any non-Melee weapon as if it were a Small Arm and are identified with the vehicle.","Units embarked may spot and be spotted by Sense."]
		},
		{
			"name":"VBD-1 Tanner",
			"faction":["lupar"],
			"value":10,
			"stats":["H2","S32\"","M8\"","Q2","T4/4/3"],
			"type":"Tracked (40x60)",
			"command":0,
			"weapons":["Mtl. 19 .50 HMG"],
			"tags":[ "Amphibious","NBC", "PC(3, Rear)"]
		},
		{
			"name":"VBD-2 Rawhide",
			"faction":["lupar"],
			"value":20,
			"stats":["H2","S32\"","M8\"","Q2","T5/4/4"],
			"type":"Tracked (40x60)",
			"command":0,
			"weapons":["Mtl. 19 .50 HMG","APX-30 1-inch Autocannon", "Mle. 254 2.3-inch Smoke Launchers"],
			"tags":[ "NBC", "PC(2, Rear)"]
		},
		{
			"name":"VBD-3 Motte",
			"faction":["lupar"],
			"value":20,
			"stats":["H2","S32\"","M8\"","Q3","T16/10/6"],
			"type":"Tracked (40x60)",
			"command":0,
			"weapons":["Mle. 38C .30 MG, swivels","Mtl. 19 .50-HMG","Mle. 254 2.3-inch Smoke Launchers"],
			"tags":["NBC", "PC(2, Rear, Front)"]
		},
		{
			"name":"Char 30 Veldjen",
			"faction":["lupar"],
			"value":20,
			"stats":["H2","S32\"","M8\"","Q2","T10/6/5"],
			"type":"Tracked (40x60)",
			"command":0,
			"weapons":["Mle. 38C .30 MG","SA19 3-inch Gun","LF4 Sponson Flamethrower"],
			"tags":["NBC"]
		},
		{
			"name":"Char 38 Borvo",
			"faction":["lupar"],
			"value":40,
			"stats":["H2","S32\"","M8\"","Q2","T14/10/6"],
			"type":"Tracked (40x60)",
			"command":0,
			"weapons":["Mle. 38C .30 MG","SA19B 3-inch Dual Guns","Mle. 254 2.3-inch Smoke Launchers"],
			"tags":["NBC"]
		},
		{
			"name":"DAG-8 Blossom",
			"faction":["lupar"],
			"value":15,
			"stats":["H1","S32\"","M3\"","Q2","T2/1/1"],
			"type":"Carriage (40x60)",
			"command":0,
			"weapons":["Mle. 38 .30 LMG","DAG-8 3.3-inch Gun"],
			"tags":[""]
		},
		{
			"name":"VBD-1b Tanner-R",
			"faction":["lupar"],
			"value":15,
			"stats":["H2","S32\"","M8\"","Q2","T4/4/3"],
			"type":"Tracked (40x60)",
			"command":0,
			"weapons":["TAP 30 4.2-inch Recoilless Rifle"],
			"tags":["Amphibious","NBC","PC(1, Rear)"]
		},
		{
			"name":"CdA-25 Saucer",
			"faction":["lupar"],
			"value":20,
			"stats":["H1","S32\"","M8\"","Q2","T6/3/2"],
			"type":"Tracked (40x60)",
			"command":0,
			"weapons":["Mtl. 19 .50 HMG", "SA25 2.5-inch High Velocity Gun"],
			"tags":["NBC"]
		},
		{
			"name":"DAG-16 Cherry",
			"faction":["lupar"],
			"value":25,
			"stats":["H1","S24\"","M2\"","Q2","T1/1-/1-"],
			"type":"Carriage (40x60)",
			"command":0,
			"weapons":["Mle. 32 .30 Self-Loading Rifle", "DAG-16 7.8-inch Howitzer"],
			"tags":[""]
		},
		{
			"name":"VBD Special Lugus",
			"faction":["lupar"],
			"value":25,
			"stats":["H1","S32\"","M8\"","Q3","T3/2/1+"],
			"type":"Tracked (40x40)",
			"command":0,
			"weapons":["Lenus Automatic .45, driver issue","TAP 25 4.2-inch  Recoilless Rifle Battery"],
			"tags":[""]
		},
		{
			"name":"CdA-36 Broomcloud",
			"faction":["lupar"],
			"value":25,
			"stats":["H2","S32\"","M10\"","Q3","T5/3/1+"],
			"type":"Tracked (40x60)",
			"command":0,
			"weapons":["Mle. 32 .30 Self-Loading Rifle","APX-40 1.5-inch Autocannon"],
			"tags":[""]
		},
		{
			"name":"CdS-F2  Aurora",
			"faction":["lupar"],
			"value":30,
			"stats":["H2","S16\"","M8\"","Q2","T2/2/1"],
			"type":"Wheeled (40x60)",
			"command":0,
			"weapons":["Mle. 32 .30 Self-Loading Rifle","Mle. 13 5.2-inch Rocket Rack"],
			"tags":[""]
		},
		{
			"name":"VdIM-K Karve",
			"faction":["lupar"],
			"value":10,
			"stats":["H1","S32\"","M12\"","Q2","T2/2/1"],
			"type":"Watercraft (40x60)", 
			"command":0,
			"weapons":["Mtl. 19 .50 HMG"],
			"tags":["PC(4, Any)"]
		},
		{
			"name":"VZ61 Chariots",
			"faction":["lupar"],
			"value":15,
			"stats":["H1","S24\"","M18\"","Q2","T1+/1/1"],
			"type":"Helicopter (40x40)",
			"command":0,
			"weapons":["Mle. 38 .30 LMG", "Mle. 44 3.5-inch RPG"],
			"tags":[ "This unit may depleted as if it were an Infantry Squad.","When landed this unit counts as an Infantry Squad.", "This unit may fire all weapons and enter Close Combat as if were Infantry","This unit may land in Forests and inside Buildings as a squad-sized garrison."]
		},
		{
			"name":"AES514 Backbone",
			"faction":["lupar"],
			"value":20,
			"stats":["H2","S32\"","M24\"","Q2","T3/2/3"],
			"type":"Helicopter (40x60)", 
			"command":0,
			"weapons":[""],
			"tags":["Chaff-Flares(3)","PC(2, Sides)", "Tow(10)", "Embarked units can fire any one non-Melee Weapon as if it were a Small Arm and are identified with the vehicle.","Units embarked may spot and be spotted by Sense."]
		},
		{
			"name":"AES805 Tornado",
			"faction":["lupar"],
			"value":30,
			"stats":["H1","S32\"","M32\"","Q3","T2/2/2"],
			"type":"Helicopter (40x60)", 
			"command":0,
			"weapons":["APX-30 1-inch Autocannon","SD84 4.7-inch Missile Launcher"],
			"tags":["Chaff-Flares(2)"]
		},
		{
			"name":"R-2 Chien De Chasse",
			"faction":["lupar"],
			"value":10,
			"stats":["H*","S*\"","M10\"","Q2","T2", "E0"],
			"type":"Aircraft (40x60)",
			"command":0,
			"weapons":["Mtl. 19 .50 HMGs, dual","Mle. 7 Laser Designator"],
			"tags":["CAS", "Loiter","Does not break Designation when it moves. Designation is broken when target leaves frontal arc.","Has E3 in dogfights."]
		},
		{
			"name":"AD-48 Falconet",
			"faction":["lupar"],
			"value":20,
			"stats":["H*","S*\"","M14\"","Q3","T2","E1"],
			"type":"Aircraft (40x60)",
			"command":0,
			"weapons":["Mtl. 19 .50 HMG, octet","LR-49 2.7-inch HEAT Rocket Pod","BLG-64 500 lb. HE Cluster Bomb"],
			"tags":["CAS", "Chaff-Flares(2)"]
		},
		{
			"name":"AP-IV Grognard",
			"faction":["lupar"],
			"value":40,
			"stats":["H*","S*\"","M16\"","Q3","T3", "E2"],
			"type":"Aircraft (40x60)",
			"command":0,
			"weapons":["APX-50 1.4-inch Revolver Cannon","MA-67 4.7-inch Infrared AAM","SD68 8-inch TV-Guided Bomb"],
			"tags":[ "CAP","Afterburner", "Chaff-Flares(2)"]
		},
		{
			"name":"MD-II Mist",
			"faction":["lupar"],
			"value":40,
			"stats":["H*","S*\"","M20\"","Q4","T3","E3"],
			"type":"Aircraft (40x60)",
			"command":0,
			"weapons":["APX-50 1.4-inch Revolver Cannon","MA-67B 4.7-inch Infrared AAM","MA-62 7.9-inch Semi-Active AAM"],
			"tags":[ "CAP","Afterburner", "Chaff-Flares(2)"]
		},
		{
			"name":"Node Team",
			"faction":["rygolic"],
			"value":0,
			"stats":["H1","S24\"","M5\"","Q3","T1+/1/1","C2"],
			"type":"Infantry (Team)",
			"command":2,
			"weapons":["\"Snake Green\" 5mm Assault Rifle","\"Tread Curve\" 20mm Grenade Launcher"],
			"tags":[ "TACOM", "Fearless", "NBC", "Rygonet (12\"), Brigade(2, 12\")", "One Node Team comes free per 100 points as a standard TACOM. Further Node Teams may be purchased for 20 points each at no limit."]
		},
		{
			"name":"Node Team (Additional)",
			"faction":["rygolic"],
			"value":20,
			"stats":["H1","S24\"","M5\"","Q3","T1+/1/1","C2"],
			"type":"Infantry (Team)",
			"command":2,
			"weapons":["\"Snake Green\" 5mm Assault Rifle","\"Tread Curve\" 20mm Grenade Launcher"],
			"tags":[ "TACOM ", "Fearless", "NBC", "Rygonet (12\"), Brigade(2, 12\")", "One Node Team comes free per 100 points as a standard TACOM. Further Node Teams may be purchased for 20 points each at no limit."]
		},
		{
			"name":"G1 Ganglion",
			"faction":["rygolic"],
			"value":20,
			"stats":["H1","S0\"","M0\"","Q6","T4/4/4","C6"],
			"type":"Vehicle (40x40)",
			"command":6,
			"weapons":[""],
			"tags":[ "TACOM", "Paradrop", "NBC", "Rygonet (24\"), Brigade(4, 12\")", "May activate in the Manuever Phase despite having M0\" to call Brigade move actions only.", "May not lend actions to friendly untis via Rygonet."]
		},
		{
			"name":"S3 Stoma",
			"faction":["rygolic"],
			"value":30,
			"stats":["H2","S32\"","M8\"","Q3","T6/6/5","C4"],
			"type":"Strider (40x40)",
			"command":4,
			"weapons":["\"Drift Bar\" 5mm Coaxial MG","\"Pitch Break\" 25mm Autocannon"],
			"tags":["TACOM", "NBC", "Rygonet (12\"), Brigade(4, 8\")", "When this unit activates in the Fire Phase, it may select one friendly Rygolic unit within Line of Sight up to 8\" away which has not already acted that round. The Stoma and the selected unit fire at the same target simultaneously. Units activated this way are treated as having already fired for the round."]
		},
		{
			"name":"Tactical Team",
			"faction":["rygolic"],
			"value":15,
			"stats":["H1","S32\"","M5\"","Q3","T1+/1/1"],
			"type":"Infantry (Team)",
			"command":0,
			"weapons":["\"Snake Green\" 5mm Assault Rifle","\"Tread Curve\" 20mm Grenade Launcher","\"Side Fast\" 140mm ATGM"],
			"tags":["Infantry (Team)", "Fearless", "NBC"]
		},
		{
			"name":"Legionnaires",
			"faction":["rygolic"],
			"value":25,
			"stats":["H1","S32\"","M5\"","Q3","T1+/1/1"],
			"type":"Infantry (Squad)",
			"command":0,
			"weapons":["\"Snake Green\" 5mm Assault Rifle","\"Tread Curve\" 20mm Grenade Launcher","\"Side Fast\" 140mm ATGM"],
			"tags":["Fearless", "NBC"]
		},
		{
			"name":"Smartgun Team Team",
			"faction":["rygolic"],
			"value":15,
			"stats":["H1","S32\"","M5\"","Q3","T1+/1/1"],
			"type":"Infantry (Team)",
			"command":0,
			"weapons":["\"Snake Green\" 5mm Assault Rifle","\"Drift Cage\" 5mm Stabilized SAW"],
			"tags":["Fearless", "NBC"]
		},
		{
			"name":"Laser Team",
			"faction":["rygolic"],
			"value":15,
			"stats":["H1","S32\"","M5\"","Q3","T1+/1/1"],
			"type":"Infantry (Team)",
			"command":0,
			"weapons":["\"Snake Green\" 5mm Assault Rifle","\"Sun Point\" 6kW Laser Weapon"],
			"tags":["Fearless", "NBC"]
		},
		{
			"name":"MANPADS Team",
			"faction":["rygolic"],
			"value":20,
			"stats":["H1","S32\"","M5\"","Q3","T1+/1/1"],
			"type":"Infantry (Team)",
			"command":0,
			"weapons":["\"Snake Green\" 5mm Assault Rifle","\"Tread Curve\" 20mm Grenade Launcher","\"Pole Gaurd\" 70mm MANPADS"],
			"tags":["Fearless", "NBC"]
		},
		{
			"name":"Chemical Team",
			"faction":["rygolic"],
			"value":20,
			"stats":["H1","S24\"","M4\"","Q3","T1+/1+/1+"],
			"type":"Infantry (Team)",
			"command":0,
			"weapons":["\"Pike Jump\" 12-gauge Automatic Shotgun","\"Weave Liner\" 70mm Dual RPG"],
			"tags":["Fearless", "NBC","May always lose up to 3 pin during Upkeep, even when inside of Chemical Weapons."]
		},
		{
			"name":"Guided Mortar Spider",
			"faction":["rygolic"],
			"value":30,
			"stats":["H1","S24\"","M5\"","Q3","T1+/1/1"],
			"type":"Infantry (Team)",
			"command":0,
			"weapons":["\"Snake Green\" 5mm Assault Rifle","\"Trace Rung\" 80mm Guided Mortar"],
			"tags":["Fearless", "NBC"]
		},
		{
			"name":"Carabiner Horse",
			"faction":["rygolic"],
			"value":15,
			"stats":["H1","S32\"","M6\"","Q3","T1/1/1"],
			"type":"Infantry (Team)",
			"command":0,
			"weapons":["\"Bronze Lead\" Laser Designator"],
			"tags":["Fearless", "NBC", "Resupply(4)","Tow(2)"]
		},
		{
			"name":"Capsule Squad",
			"faction":["rygolic"],
			"value":25,
			"stats":["H1","S24\"","M5\"","Q3","T1/1/1"],
			"type":"Infantry (Squad)", 
			"command":0,
			"weapons":["\"Snake Green\" 5mm Assault Rifle","\"Tread Curve\" 20mm Grenade Launcher"],
			"tags":["Fearless", "NBC","Deploy this unit via a Capsule Insertion support mission during the Support Phase."]
		},
		{
			"name":"Assassin",
			"faction":["rygolic"],
			"value":30,
			"stats":["H1","S8\"","M6\"","Q4","T1/1/1-"],
			"type":"Infantry (Team)",
			"command":0,
			"weapons":["\"Frame Staff\" 10mm SMG, dual","\"Sphere Catch\" 12mm Pistol, subsonic","\"Site Cause\" Plastic Explosive Charge"],
			"tags":["Active Camoflauge","Assault Specialist","Fearless","NBC","Sense(8\""]
		},
		{
			"name":"Simulacrum",
			"faction":["rygolic"],
			"value":30,
			"stats":["H1","S32\"","M4\"","Q3","T1/1/1"],
			"type":"Infantry (Team)",
			"command":0,
			"weapons":[""],
			"tags":["Fearless", "NBC", "This unit's base is always 40mmx40mm and always leaves a corpse token.","During the Support Phase this unit imitates the closest enemy infantry or vehicle that it can sport. While imitating this unit gains its enemy's weapons, statline and unit class but not any special rules, instead retaining Fearless and NBC and having infinite ammunition.","When entering Close Combat this unit may opt to copy any enemy unit that it would enter close combat with. If two or more Simulacrum units would enter Close Quarter with each other immediately kill them."]
		},
		{
			"name":"C1 Candor",
			"faction":["rygolic"],
			"value":25,
			"stats":["H2","S32\"","M10\"","Q3","T6/4/4"],
			"type":"Wheeled (40x60)",
			"command":0,
			"weapons":["\"Drift Bar\" 5mm Coaxial MG","\"Sun Point\" 6kW Laser Weapon", "\"Tread Bus\" 65mm Smoke Launchers"],
			"tags":[ "NBC","PC(2, Rear)"]
		},
		{
			"name":"P1 Parallax",
			"faction":["rygolic"],
			"value":35,
			"stats":["H2","S32\"","M10\"","Q3","T6/4/4"],
			"type":"Hovercraft (40x60)", 
			"command":0,
			"weapons":["\"Drift Bar\" 5mm Coaxial MG","\"Pitch Break\" 25mm Autocannon","\"Side Judge\" 150mm ATGM","\"Tread Bus\" 65mm Smoke Launchers"],
			"tags":["Amphibious","NBC","PC(2, Rear)"]
		},
		{
			"name":"P2 Perigee",
			"faction":["rygolic"],
			"value":35,
			"stats":["H2","S32\"","M10\"","Q3","T6/4/4"],
			"type":"Hovercraft (40x60)", 
			"command":0,
			"weapons":["\"Drift Bar\" 5mm Coaxial MG","\"Pitch Break\" 25mm Autocannon","\"Pole Gaurd\" 70mm MANPADS","\"Tread Bus\" 65mm Smoke Launchers"],
			"tags":["Amphibious","NBC","PC(2, Rear)"]
		},
		{
			"name":"M1 Microwave",
			"faction":["rygolic"],
			"value":20,
			"stats":["H1","S32\"","M8\"","Q*","T4/2/2"],
			"type":"Tracked (40x40)",
			"command":0,
			"weapons":["\"Pitch Break\" 25mm Autocannon"],
			"tags":[ "Drone","NBC"]
		},
		{
			"name":"S1 Synod",
			"faction":["rygolic"],
			"value":40,
			"stats":["H2","S32\"","M8\"","Q3","T12/10/8"],
			"type":"Strider (40x40)",
			"command":0,
			"weapons":["\"Drift Fence\" 10mm HMG","\"Bridge Spike\" 75mm Rifled Gun","\"Tread Bus\" 65mm Smoke Launchers"],
			"tags":[ "NBC"]
		},
		{
			"name":"C1 Cabal",
			"faction":["rygolic"],
			"value":50,
			"stats":["H2","S32\"","M10\"","Q3","T8/6/4"],
			"type":"Wheeled (40x60)",
			"command":0,
			"weapons":["\"Drift Bar\" 5mm Coaxial MG","\"Bridge Dart\" 105mm Gun","\"Tread Bus\" 65mm Smoke Launchers"],
			"tags":[ "APS(5+, 2", "NBC"]
		},
		{
			"name":"X1 X-ray",
			"faction":["rygolic"],
			"value":80,
			"stats":["H2","S32\"","M10\"","Q3","T16/14/6"],
			"type":"Tracked (40x60)",
			"command":0,
			"weapons":["\"Sun Point\" 6kW Laser Weapon","\"Bridge Dart\" 105mm Gun","\"Tread Bus\" 65mm Smoke Launchers"],
			"tags":["APS(6+,3)","NBC"]
		},
		{
			"name":"Automated Sentry",
			"faction":["rygolic"],
			"value":15,
			"stats":["H1","S32\"","M0\"","Q*","T2/2/1"],
			"type":"Carriage (40x40)", 
			"command":0,
			"weapons":["\"Yaw Post\" 10mm Minigun"],
			"tags":["Drone","NBC","Paradrop"]
		},
		{
			"name":"Automated ATGM",
			"faction":["rygolic"],
			"value":20,
			"stats":["H1","S32\"","M0\"","Q*","T2/2/1"],
			"type":"Carriage (40x40)", 
			"command":0,
			"weapons":["\"Side Judge\" 150mm ATGM"],
			"tags":["Drone","NBC","Paradrop"]
		},
		{
			"name":"S2 Stochast",
			"faction":["rygolic"],
			"value":40,
			"stats":["H2","S32\"","M8\"","Q3","T12/10/8"],
			"type":"Strider (40x40)",
			"command":0,
			"weapons":["\"Drift Fence\" 10mm HMG","\"Ink Strake\" 55mm Thermobaric Rockets"],
			"tags":["NBC"]
		},
		{
			"name":"C2 Chorus",
			"faction":["rygolic"],
			"value":60,
			"stats":["H2","S32\"","M10\"","Q3","T8/6/4"],
			"type":"Wheeled (40x60)",
			"command":0,
			"weapons":["\"Drift Bar\" 5mm Coaxial MG","\"Star Call\" Laser Designator","\"Star Shelf\" 155mm Missile Launcher","\"Tread Bus\" 65mm Smoke Launchers"],
			"tags":[ "NBC"]
		},
		{
			"name":"X2 Xiphos",
			"faction":["rygolic"],
			"value":80,
			"stats":["H2","S32\"","M10\"","Q4","T12/8/6"],
			"type":"Tracked (40x60)",
			"command":0,
			"weapons":["\"Drift Bar\" 5mm Coaxial MG","\"Bridge Arrow\" 155mm Howitzer"],
			"tags":[ "APS(6+, 2)", "NBC"]
		},
		{
			"name":"X3 Xenon",
			"faction":["rygolic"],
			"value":80,
			"stats":["H2","S32\"","M10\"","Q3","T14/10/6"],
			"type":"Tracked (40x60)",
			"command":0,
			"weapons":["\"Drift Bar\" 5mm Coaxial MG","\"Sun Blind\" 20kW Laser Weapon Array","Shockwave Dispersal System","\"Tread Bus\" 65mm Smoke Launchers"],
			"tags":[ "APS(6+, 2)", "NBC"]
		},
		{
			"name":"Y1 Yardfish",
			"faction":["rygolic"],
			"value":30,
			"stats":["H1","S32\"","M8\"","Q3","T3/3/2"],
			"type":"Watercraft (40x60)", 
			"command":0,
			"weapons":["\"Sun Line\" 6kW Laser Weapon Array","\"Dredge Top\" 149mm VLS Missiles"],
			"tags":["Active Camoflauge","NBC"]
		},
		{
			"name":"R1 Redstone",
			"faction":["rygolic"],
			"value":20,
			"stats":["H2","S16\"","M24\"","Q3","T3/3/3"],
			"type":"Helicopter (40x40)",
			"command":0,
			"weapons":[""],
			"tags":["Chaff-Flares(1)","NBC","PC(2, Any)","Resupply(3)","This unit may land in any occluding terrain.","If this unit falls back from close combat, choose one engaged enemy unit to take a Strength 1+ hit on it's rear arc."]
		},
		{
			"name":"R2 Repeater",
			"faction":["rygolic"],
			"value":30,
			"stats":["H2","S24\"","M24\"","Q3","T3/3/3"],
			"type":"Helicopter (40x40)",
			"command":0,
			"weapons":["\"Yaw Shaft\" 15mm Minigun"],
			"tags":["Chaff-Flares(1)","NBC","PC(1, Any)","This unit may land in any occluding terrain.","If this unit falls back from close combat, choose one engaged enemy unit to take a Strength 1+ hit on it's rear arc."]
		},
		{
			"name":"H1 Handler",
			"faction":["rygolic"],
			"value":15,
			"stats":["H1","S32\"","M32\"","Q*","T1/1/1"],
			"type":"Helicopter (40x60)", 
			"command":0,
			"weapons":["\"Star Call\" Laser Designator","\"Tread Plate\" 65mm Smoke Array"],
			"tags":["Drone","NBC"]
		},
		{
			"name":"H2 Hangman",
			"faction":["rygolic"],
			"value":15,
			"stats":["H1","S32\"","M32\"","Q*","T1/1/1"],
			"type":"Helicopter (40x60)", 
			"command":0,
			"weapons":["\"Bolt Fleck\" 100mm Flechette Gun","\"Weave Stalk\" 70mm Dual Rocket Pod"],
			"tags":["Chaff-Flares(1)","Drone", "NBC"]
		},
		{
			"name":"T1 Tatter",
			"faction":["rygolic"],
			"value":60,
			"stats":["H2","S32\"","M32\"","Q3","T3/3/3"],
			"type":"Helicopter (40x60)", 
			"command":0,
			"weapons":["\"Pitch Throat\" 35mm Autocannon","\"Ram Crutch\" 175mm Active AAM","\"Mark Pate\" 180mm AGM"],
			"tags":["Chaff-Flares(2)","NBC"]
		},
		{
			"name":"Destroying Angel",
			"faction":["rygolic"],
			"value":80,
			"stats":["H2","S32\"","M18\"","Q4","T4/4/4"],
			"type":"Helicopter (40x40)",
			"command":0,
			"weapons":["\"Sun Door\" 20kW Pulsed Laser Battery"],
			"tags":["APS(6+, 4)","NBC","Sense(12\")","Rotating this unit costs 0\" and it cannot land.","Every time this unit uses APS, its weapon Dice statistic decreases by 1 for the rest of the round. If the Dice value hits 0 it cannot be fired this round and APS cannot be triggered again this round. During Upkeep the laser weapon's Dice value is reset to 4 regardless of how many munitions were intercepted last round."]
		},
		{
			"name":"B1 Blindsight",
			"faction":["rygolic"],
			"value":50,
			"stats":["H*","S*\"","M20\"","Q4","T3","E3"],
			"type":"Aircraft (40x60)",
			"command":0,
			"weapons":["\"Sun Grid\" 20kW Laser Array","\"Ram Crutch\" 175mm Active AAM","\"Mark Pate\" 180mm AGM"],
			"tags":["CAP","Afterburner","Chaff-Flares(2)"]
		},
		{
			"name":"Z1 Zenith",
			"faction":["rygolic"],
			"value":50,
			"stats":["H*","S*\"","M16\"","Q4","T3","E1"],
			"type":"Aircraft (40x60)",
			"command":0,
			"weapons":["\"Able Ivy\" 20t Guided Nuclear Bomb"],
			"tags":["CAS","Active Camoflauge","Afterburner"]
		},
		{
			"name":"A1 Apogee",
			"faction":["rygolic"],
			"value":50,
			"stats":["H*","S*\"","M14\"","Q4","T6","E2"],
			"type":"Aircraft (40x60)",
			"command":0,
			"weapons":["\"Yaw Switch\" 40mm Rotary Cannon","\"Lake Brush\" 275mm Guided Bomb"],
			"tags":["CAS","Chaff-Flares(2)"]
		},
		{
			"name":"PEG.123-AC Graf",
			"faction":["santagri"],
			"value":0,
			"stats":["H1","S32\"","M36\"","Q4","T2/1/1","C2"],
			"type":"Helicopter (40x60)", 
			"command":2,
			"weapons":["MhM-76 .305 Minigun","Lerna 15-lber Rocket Pod","120dB Megaphone Array"],
			"tags":["TACOM", "Chaff-Flares(1)","NBC","Brigade (4, 16\")"]
		},
		{
			"name":"UNI.28-AC Don",
			"faction":["santagri"],
			"value":25,
			"stats":["H2","S32\"","M24\"","Q5","T4/3/3","C3"],
			"type":"Helicopter (40x60)", 
			"command":3,
			"weapons":["Allant 1.8-lber Rptary Cannon","SUR-4 127mm Air-to-Air Missile","120dB Megaphone Array"],
			"tags":["TACOM","NBC","Brigade (3, 12\")","Leviathan(2)"]
		},
		{
			"name":"VBD.127-DB Castellan",
			"faction":["santagri"],
			"value":40,
			"stats":["H2","S32\"","M8\"","Q4","T16/7/5","C4"],
			"type":"Tracked (40x60)",
			"command":4,
			"weapons":["MhL-42 .305 MG","Sb.98 55-lber Gun","Lerna 15-lber Rocket Pod"],
			"tags":["TACOM","NBC","Brigade (2, 8\")","Whenever this unit scores a kill on an enemy Vehicle, it may Rally a friendly unit within 8\"."]
		},
		{
			"name":"Santagrine Militia",
			"faction":["santagri"],
			"value":5,
			"stats":["H1","S16\"","M4\"","Q1","T1/1/1"],
			"type":"Infantry (Squad)", 
			"command":0,
			"weapons":["Bolt-Action Rifle, various make & caliber"],
			"tags":["NBC","Tercio"]
		},
		{
			"name":"Mounted Serjeants",
			"faction":["santagri"],
			"value":10,
			"stats":["H2","S24\"","M8\"","Q2","T1/1/1-"],
			"type":"Infantry (Squad)", 
			"command":0,
			"weapons":["Cavalry Carbine, local manufacture","18-oz Lance Mine","Heirloom Backsword"],
			"tags":["Fearless","NBC"]
		},
		{
			"name":"Yeoman Paras",
			"faction":["santagri"],
			"value":15,
			"stats":["H1","S16\"","M5\"","Q3","T1/1-/1-"],
			"type":"Infantry (Squad)", 
			"command":0,
			"weapons":["MhL-48 .455 SMG","Hi-25 2.5-lber Spigot Mortar"],
			"tags":["Assault Specialist","Fearless","NBC","Paradrop","Tercio"]
		},
		{
			"name":"Volley Team",
			"faction":["santagri"],
			"value":5,
			"stats":["H1","S16\"","M4\"","Q1","T1-/1-/1-"],
			"type":"Infantry (Team)",
			"command":0,
			"weapons":["Bolt-Action Rifle, various make & caliber","\"Tricorne\" Triple RPG, improvized"],
			"tags":["NBC","Tercio"]
		},
		{
			"name":"Light Gun Team",
			"faction":["santagri"],
			"value":5,
			"stats":["H1","S24\"","M4\"","Q1","T1/1-/1-"],
			"type":"Infantry (Team)",
			"command":0,
			"weapons":["Rh-49 .305 Self-cycling Rifle","Sb.1 1-lber Gun"],
			"tags":["NBC"]
		},
		{
			"name":"Grenadier Team",
			"faction":["santagri"],
			"value":10,
			"stats":["H1","S16\"","M4\"","Q2","T2/1+/1+"],
			"type":"Infantry (Team)",
			"command":0,
			"weapons":["Engram .32 Machine Pistol","S-5 40mm Grenade Pistol, sawn-off"],
			"tags":["NBC","Tercio"]
		},
		{
			"name":"Machine Gun Team",
			"faction":["santagri"],
			"value":10,
			"stats":["H1","S16\"","M4\"","Q2","T1/1-/1-"],
			"type":"Infantry (Team)",
			"command":0,
			"weapons":["Rh-49 .305 Self-cycling Rifle","Depredador Cortes .455 MG"],
			"tags":["NBC","Tercio"]
		},
		{
			"name":"Bombard Team",
			"faction":["santagri"],
			"value":15,
			"stats":["H1","S24\"","M4\"","Q2","T1-/1-/1-"],
			"type":"Infantry (Team)",
			"command":0,
			"weapons":["Rh-49 .305 Self-cycling Rifle","Hi-14 Three-Quarters Bombard"],
			"tags":["NBC"]
		},
		{
			"name":"Groundsmen",
			"faction":["santagri"],
			"value":10,
			"stats":["H1","S32\"","M5\"","Q3","T1/1-/1-"],
			"type":"Infantry (Team)",
			"command":0,
			"weapons":["SMHH Combination Gun, .276 Barrel","12-gauge Slug Barrel"],
			"tags":["Fearless","NBC","Paradrop","Sense(6\")","Tercio"]
		},
		{
			"name":"Pages",
			"faction":["santagri"],
			"value":10,
			"stats":["H1","S32\"","M5\"","Q2","T1/1-/1-"],
			"type":"Infantry (Team)",
			"command":0,
			"weapons":["AFME-42/58 .439 Automatic Rifle","Coincidence Rangefinder, craft-produced"],
			"tags":["Fearless","NBC","This unit may activate to call a plane mission during the Support Phase, replace a friendly TACOM's turn."]
		},
		{
			"name":"Black Fangs",
			"faction":["santagri"],
			"value":20,
			"stats":["H1","S24\"","M4\"","Q4","T2/1+/1+"],
			"type":"Infantry (Team)",
			"command":0,
			"weapons":["LMG, various make and caliber","Lerna 15-lber Rocket Pod"],
			"tags":["Assault Specialist","Fearless","NBC"]
		},
		{
			"name":"Atomic Pilgrims",
			"faction":["santagri"],
			"value":60,
			"stats":["H1","S24\"","M4\"","Q4","T1-/1-/1-"],
			"type":"Infantry (Team)",
			"command":0,
			"weapons":["Engram .32 Machine Pistol","\"Violet Mace\" Recoilless Gun, Nuclear"],
			"tags":["Fearless","NBC"]
		},
		{
			"name":"Steam Tractor",
			"faction":["santagri"],
			"value":5,
			"stats":["H2","S16\"","M6\"","Q2","T4/4/3"],
			"type":"Wheeled (40x60)",
			"command":0,
			"weapons":["MhL-42 .305 MG"],
			"tags":[ "PC(1, Any)","NBC","Tow(16)"]
		},
		{
			"name":"War Wagon",
			"faction":["santagri"],
			"value":5,
			"stats":["H2","S8\"","M0\"","Q1","T3/3/3"],
			"type":"Carriage (40x60)",
			"command":0,
			"weapons":["Engram .32 Snub Nose, driver issue"],
			"tags":["NBC","PC(4, Any)","Resupply(2)","Tow(Infinite)"]
		},
		{
			"name":"CB.76 Misericorde",
			"faction":["santagri"],
			"value":15,
			"stats":["H1","S24\"","M8\"","Q3","T5/4/2"],
			"type":"Tracked (40x40)",
			"command":0,
			"weapons":["MhL-42 .305 MG","Sb.21 20-lber Mountain Gun"],
			"tags":["NBC","Paradrop","Tow(2)","May fire while carrying desanting infantry and can carry PC(3) desants instead of PC(2)"]
		},
		{
			"name":"Exto",
			"faction":["santagri"],
			"value":25,
			"stats":["H2","S32\"","M8\"","Q2","T4/4/4"],
			"type":"Tracked (40x60)",
			"command":0,
			"weapons":["Rh-49 .305 Self-cycling Rifle","SAE 2-lber AA Gun"],
			"tags":["Leviathan(2)","NBC","PC(6, Sides)","Resupply(4)","Tow(3)"]
		},
		{
			"name":"Hexamer",
			"faction":["santagri"],
			"value":10,
			"stats":["H2","S16\"","M6\"","Q22","T4/4/3"],
			"type":"Tracked (40x60)",
			"command":0,
			"weapons":["MhL-42 .305 MG","Sb.1 1-lber Gun"],
			"tags":["NBC","Tow(6)"]
		},
		{
			"name":"VC.2 Veldjen",
			"faction":["santagri"],
			"value":20,
			"stats":["H2","S32\"","M6\"","Q3","T8/6/5"],
			"type":"Tracked (40x60)",
			"command":0,
			"weapons":["MhL-42 .305 MG","MhL-60 .50 HMG", "14-lber Gun, various make"],
			"tags":["NBC","Tow(3)"]
		},
		{
			"name":"VC.44R Whirlwind",
			"faction":["santagri"],
			"value":35,
			"stats":["H2","S32\"","M10\"","Q2","T12/6/5"],
			"type":"Tracked (40x60)",
			"command":0,
			"weapons":["MhL-42 .305 MG","24-lber Gun, local manufacture"],
			"tags":["NBC","Tow(5)","This unit pays an additional 1\" when rotating left. When rotating right, the rotation is free up to 180 degrees."]
		},
		{
			"name":"VE.378 Cataphract",
			"faction":["santagri"],
			"value":40,
			"stats":["H2","S32\"","M6\"","Q2","T16/10/6"],
			"type":"Tracked (40x60)",
			"command":0,
			"weapons":["MhL-60 .50 HMG","Sb.1 1-lber Gun","Sb.92 55-lber Gun"],
			"tags":["NBC"]
		},
		{
			"name":"Vauban",
			"faction":["santagri"],
			"value":60,
			"stats":["H2","S32\"","M6\"","Q4","T6/6/4"],
			"type":"Tracked (40x60)",
			"command":0,
			"weapons":["GAP-61 .61 CWIS","SAP 14-lber Naval Gun","VIM-4 \"Copa\" 90-lber VLS Missiles"],
			"tags":["Leviathan(3)", "NBC","Takes pin as if it were a Tercio.","May desant at PC(4).","If the CWIS has not been destroyed this unit gains APS(6+, Infinite). This APS has infintie ammo but may only trigger once per round and only against Guided Missiles."]
		},
		{
			"name":"Field Gun",
			"faction":["santagri"],
			"value":10,
			"stats":["H1","S32\"","M3\"","Q2","T2/1/1"],
			"type":"Carriage (40x40)",
			"command":0,
			"weapons":["Bolt Action Rifle, various make & caliber","Field Gun, various make & caliber"],
			"tags":["NBC"]
		},
		{
			"name":"SB.15 1-lber Pom-Pom",
			"faction":["santagri"],
			"value":10,
			"stats":["H1","S32\"","M3\"","Q2","T2/1/1"],
			"type":"Carriage (40x40)",
			"command":0,
			"weapons":["Bolt Action Rifle, various make & caliber","Sb.15 1-lber Autocannon"],
			"tags":["NBC"]
		},
		{
			"name":"CB.61 Galgo",
			"faction":["santagri"],
			"value":15,
			"stats":["H2","S32\"","M10\"","Q3","T4/3/2"],
			"type":"Wheeled (40x60)",
			"command":0,
			"weapons":["MhL-77 .61 HMG","No.20 4-lb. Smoke Launchers"],
			"tags":[ "NBC","Paradrop"]
		},
		{
			"name":"SB.18 22-lber Retumbo",
			"faction":["santagri"],
			"value":20,
			"stats":["H2","S32\"","M2\"","Q2","T2/1/1"],
			"type":"Carriage (40x60)",
			"command":0,
			"weapons":["Bolt Action Rifle, various make & caliber","Sb.18 22-lber Anti-Aircraft Gun"],
			"tags":["NBC"]
		},
		{
			"name":"OSM Mogul",
			"faction":["santagri"],
			"value":40,
			"stats":["H2","S32\"","M6\"","Q2","T18/12/8"],
			"type":"Tracked (40x60)",
			"command":0,
			"weapons":["MhL-42 .305 MG", "S-10 250-lber Siege Gun"],
			"tags":["NBC","Tow(5)"]
		},
		{
			"name":"LDAL Pietro",
			"faction":["santagri"],
			"value":10,
			"stats":["H2","S16\"","M8\"","Q1","T5/4/1+"],
			"type":"Watercraft (40x60)", 
			"command":0,
			"weapons":["Sb.1 1-lber Dual Guns"],
			"tags":["PC(8, Front)","NBC"]
		},
		{
			"name":"PEG.60-11 Squire",
			"faction":["santagri"],
			"value":20,
			"stats":["H2","S32\"","M32\"","Q3","T1+/1+/1+"],
			"type":"Helicopter (40x60)", 
			"command":0,
			"weapons":["MhL-42 .305 MG","Lerna 15-lber Rocket Pod"],
			"tags":["PC(2, Rear)","NBC"]
		},
		{
			"name":"PEG.80-01A Sambuca",
			"faction":["santagri"],
			"value":25,
			"stats":["H2","S32\"","M24\"","Q3","T3/3/3"],
			"type":"Helicopter (40x60)", 
			"command":0,
			"weapons":["MhL-60 .50 HMG","Lerna 15-lber Rocket Pod"],
			"tags":["Chaff-Flares(1)","PC(6, Rear)","NBC","Tow(2)"]
		},
		{
			"name":"PEG.123-00 Knight-Errant",
			"faction":["santagri"],
			"value":30,
			"stats":["H1","S32\"","M36\"","Q3","T2/1/1"],
			"type":"Helicopter (40x60)", 
			"command":0,
			"weapons":["SOAA Target Designator","Chilon 30-lber High-Velocity Missile"],
			"tags":["Chaff-Flares(2)","NBC"]
		},
		{
			"name":"UNI.28-05 Conquistador",
			"faction":["santagri"],
			"value":40,
			"stats":["H2","S32\"","M24\"","Q3","T3/3/3"],
			"type":"Helicopter (40x60)", 
			"command":0,
			"weapons":["Sb.38 20mm Autocannon","Sarvara 46-lber Dual Rocket Pod","Lerna 15-lber Rocket Pod"],
			"tags":["Leviathan(2)","NBC"]
		},
		{
			"name":"UNI.28-03 Man-At-Arms",
			"faction":["santagri"],
			"value":50,
			"stats":["H2","S32\"","M24\"","Q4","T4/3/3"],
			"type":"Helicopter (40x60)", 
			"command":0,
			"weapons":["Allant 1.8-lber Rotary Cannon","9GR1M 125mm ATGM","Lerna 15-lber Rocket Pod"],
			"tags":["Leviathan(2)","NBC"]
		},
		{
			"name":"UNI.28-08 Lancer",
			"faction":["santagri"],
			"value":60,
			"stats":["H2","S32\"","M24\"","Q4","T4/4/3"],
			"type":"Helicopter (40x60)", 
			"command":0,
			"weapons":["SDV 6-lber High-Velocity Autocannon","Lerna 15-lber Rocket Pod","Silene 285-lber Dual WP Rocket Pod"],
			"tags":["Leviathan(2)","NBC"]
		},
		{
			"name":"MC.17-86 Spada-Fresco",
			"faction":["santagri"],
			"value":20,
			"stats":["H*","S*\"","M16\"","Q3","T2","E2"],
			"type":"Aircraft (40x60)",
			"command":0,
			"weapons":["Sb.38 20mm Autocannons, dual","500-lber HE Bombs, various models"],
			"tags":["CAP","Afterburner"]
		},
		{
			"name":"MC.20-01C Rocinante",
			"faction":["santagri"],
			"value":30,
			"stats":["H*","S*\"","M18\"","Q3","T3","E3"],
			"type":"Aircraft (40x60)",
			"command":0,
			"weapons":["Allant 1.8-lber Rotary Cannon","Lerna 15-lber Rocket Pod","SUR-4 127mm Infrared AAM"],
			"tags":[ "CAP","Afterburner", "Chaff-Flares(1)","Flower of the Atom"]
		},
		{
			"name":"DC/B.2K Jonquil",
			"faction":["santagri"],
			"value":30,
			"stats":["H*","S*\"","M14\"","Q3","T4","E1"],
			"type":"Aircraft (40x60)",
			"command":0,
			"weapons":["Rb.12 9-lber Air-to-Air Rockets","Mf.59 60-lber Semi-Active AAM","9GR3 275mm AGM"],
			"tags":[ "CAP","Afterburner", "Flower of the Atom"]
		},
		{
			"name":"DC.4E Bavieca",
			"faction":["santagri"],
			"value":40,
			"stats":["H*","S*\"","M20\"","Q4","T3","E2"],
			"type":"Aircraft (40x60)",
			"command":0,
			"weapons":["Allant 1.8-lber Rotary Cannon, modified","Breakspear 60-lber Semi-Active AAM","SUR-4 127mm IR AAM, modified"],
			"tags":[ "CAP","Afterburner", "Chaff-Flares(2)","Flower of the Atom"]
		},
		{
			"name":"Dummy",
			"faction":["federal","lupar","rygolic","santagri"],
			"value":5,
			"stats":"Dummy (any)",
			"type":"Dummy (any)",
			"command":0,
			"weapons":[""],
			"tags":["Unit blind is removed from the battlefield on being identified or being hit by any attack."]
		}
	]
}

export default list