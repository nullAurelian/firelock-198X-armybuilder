const nameData = { //Names used by unit name generator. Trying to keep at least 4:1 masculine:feminine names at least.
    "federal":{ //Federal names: typically dutch/germanic origins with a touch of french for cydoland
        "firstNames":[
             " Albert"," Alf"," Alice" ," Arthur"," Baldur"," Bart"," Bjarne"," Braum"," Bruno"," Carl"," Coen"," Conrad"," Cornelis"," Catherine"," Daniel"," Daud"," Donovan",
             " Edwin"," Egon"," Erik"," Felix"," Fredik"," Georg"," Gottfried"," Gustav"," Hendrik"," Henk"," Hubert"," Ib"," Jakob"," Jesper"," Judith"," Karen"," Kasper"," Klaus",
             " Lars"," Leif"," Lorne"," Ludvig"," Mads"," Marcus"," Michel"," Nico"," Norbert"," Oliver"," Olivia"," Poul"," Peer"," Ralph"," Robert"," Rudolf"," Simon"," Stefaan",
             " Suzan"," Tineke"," Tomen"," Tobias"," Ulf"," Vincent"," Vance"," Vigo"," Werner"," Walther"," Xavier", " Yerrow"," Yvette"
        ],
        "lastNames":[
             " Aach"," van Acker"," Amann"," Bakker"," de Bruijn"," Burgard"," Casper"," Coehoorn" ," van Campen"," Dietrich"," Dijkstra"," Dreyer"," Engels"," Eidler"," Eller",
             " Falken"," Fischer"," Frowein"," Gieger"," de Groot"," Gunter"," Haack"," Hendriks"," van Hoek"," de Haas"," Imhoff"," Jaekobs"," Joosten"," Jung"," de Kleij",
             " Koopman"," Kidd"," de Lange"," Leobner"," Lussen"," Maazofen"," Meijer"," van der Meer"," Mulder"," Nadler"," Neidhardt"," Nohl"," Ostermann"," Pabst",
             " Pelkaan"," Pfalz"," Pommer"," Quattlebaum"," Rabe"," Rede"," Rolloos"," Reimold"," Sachs"," de Smit"," Schimmelfennig"," Schmitzer"," Teuling"," Timmer"," Tuss",
             " Ullrich"," Urban"," Utting"," Vahlen"," van Veld"," Vieusseux"," Vollen"," Walser"," Wackker"," Wegmann"," Wiener"," Wuttke"," Zantop"," Zettmann"," Zimm"," Zwiel"
        ]
    },
    "lupar":{ //Luparic names: typically french/celtic origins with a touch of dutch
        "firstNames":[
             " Aeron"," Alex"," Alphonse"," Auguste"," Baptiste"," Branwyn"," Benoit"," Bryn"," Claude"," Ceawlin"," Cecil"," Carolus"," Camile"," Cedric"," Clemente"," Clovis",
             " Dai"," Damien"," Delbert"," Eduoard"," Emmanuel"," Elisee"," Emrys"," Esme"," Florent"," Fleury"," Gilbet"," Glyn"," Gwilym"," Gwyn"," Guy"," Henri"," Hugo"," Hubert",
             " Idris"," Isidore"," Jean"," Jacques"," Jocelyn"," Lauren"," Laurence"," Lewyn"," Loup"," Louis"," Llyr"," Marc"," Madoc"," Maeve"," Maximilian","Nicolas","Noe"," Oliver",
             " Paul"," Patrice"," Pierre"," Philippe"," Raimond"," Remy"," Rhys"," Roland"," Samuel"," Sebestien"," Stephen"," Seraphin"," Timothee"," Theodore"," Ulyssess",
             " Valentin"," Victor"," Vincent"," Wyn"," Xavier"
        ],
        "lastNames":[
             " Abras"," Auclair"," Armand"," Bacri"," Barrat"," Balteux"," Belloq"," Bouchet"," Boussard"," Calvet"," Carrere"," Chevallier"," Delacroix"," Delamare"," Delacour",
             " Deviliers"," Dubost"," Dupin"," Durand"," Echaurd"," Fauche"," Favre"," Freche"," Galliot"," Girard"," Guy"," Hugo"," Huby"," Joffrin"," Jouve"," Kaplan"," Labre",
             " Laffite"," Lajoie"," Lamarche"," Larousse"," Le Blanc"," Magne"," Masse"," Matthieu"," Michel"," Noire"," Olivier"," Papin"," Paquet"," Picard"," Poux"," Ramonde",
             " Renard"," Renaut"," Roche"," Roy"," Sarte"," Tomas"," Tulard"," Vaugn"," Vollant"
        ]
    },
    "rygolic":{ //Rygolic constructs don't have names typically
        "firstNames":[
             " " 
        ],
        "lastNames":[
             " " 
        ]
    },
    "santagri":{ //Santagrian names: spanish/portugeuse with a touch of polish because mounted serjeants = winged hussars imo
        "firstNames":[
             " Adri"," Adrianna"," Arkady"," Alonso"," Baltazar"," Boguslaw"," Belisario"," Bruno"," Carmen"," Cesar"," Chayo"," Celestyn"," Damien"," Dionizy"," Diego"," Dimas"," Domingo",
             " Eduardo"," Elias"," Elan"," Enrique", " Eugeniusz"," Fabio"," Felipe"," Franco"," Fotunat"," Gabo"," Gerard"," Gabrielle"," Garcia"," Grodzislaw"," Gaston"," Gregorio"," Guiliermo",
             " Hector"," Herman"," Hilary"," Iago", " Ireneusz"," Jai"," Javier"," Juan"," Jose"," Justin"," Lalo"," Leon"," Lope"," Luis"," Lucio"," Macario"," Manuel"," Maria"," Miguel"," Memo",
             " Nikodem"," Oskar"," Pablo"," Paca"," Pawel"," Pepe"," Rafael"," Rafi"," Ramon"," Rosario"," Salvador"," Sara"," Santiago"," Sebastian"," Silva"," Theodore"," Tobias"," Valeria"," Waclaw"," Xavier"," Zenobia"
        ],
        "lastNames":[
            " Abril"," Aguiar"," Arruda"," Barros"," Bessa"," Borges"," Campo"," Calvo"," Castillo"," Diaz"," Delgado"," Dalva"," Elzo"," Escobar"," Estrada"," Estaba",
            " Fabra"," Florencia", "Fuentes"," de Gamaz","  Garcia"," Gil"," Hildago", " de Heras"," Huertas"," Jacome"," Lagoa"," Luiz"," de Lucas"," Martin"," Molina"," Morales",
            " Moreno"," Navarro"," de Nieto"," Noguera"," Obragador"," Olivares"," Ortega"," de Paz"," Paves"," Pereia"," Ramos"," Rocha"," Ruiz"," Salgado"," de Sousa"," Silva",
            " de la Torres"," Torres"," Teles"," Valente"," Vega"," Ventura"," Vicente"," Ximenez"," Yepes"," Zarzo"," Zorrilla"
        ]
    }
}
export default nameData