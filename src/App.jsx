import { useState } from 'react'
import './App.css'
import generics from './data/unitLibrary.js'
import fedlist from './data/federalLibrary.js'
import luplist from './data/luparLibrary.js'
import rygolist from './data/rygolicLibrary.js'
import santalist from './data/santagriLibrary.js'

import peoplenames from './data/characterNames.js'


function App() {
  let localLib  = fedlist.concat(luplist,rygolist,santalist,generics)
  let idNum = 100; //unique number for each entry, hopefully faster searching
  //Values being tracked: Faction filter/unit library, army list, sum of unit point values, number of TACOMs and Command Points generated per round
  const [workingList, updateArmyList] = useState([])
  const [workingLibrary, filterUnits] = useState(localLib)
  const [workingValue, updateListValue] = useState(0)
  const [workingTacCount, updateTacCount] = useState(0)
  const [workingCommandGen, updateCommandGen] = useState(0)
  return (
    <>
    <div className="LibraryFilters">
      <p>Show faction: 
      <input type="checkbox" id="typeFederal" defaultChecked={true} onChange={() => {
        filterUnits(localLib)
        filterUnits(build_list_filter(localLib))
        
      }}/>Intermarine Federation
      <input type="checkbox" id="typeLupar" defaultChecked={true} onChange={() => {
        filterUnits(localLib)
        filterUnits(build_list_filter(localLib))
      }}/>Kingdom of the Ebon Forest
      <input type="checkbox" id="typeRygolic" defaultChecked={true} onChange={() => {
        filterUnits(localLib)
        filterUnits(build_list_filter(localLib))
      }}/>New Rygolic Host
      <input type="checkbox" id="typeSantagri" defaultChecked={true} onChange={() => {
        filterUnits(localLib)
        filterUnits(build_list_filter(localLib))
      }}/>Atom Baronies of Santagria
      </p>
      <p> Show type: 
      <input type="checkbox" id="typeInfantry" defaultChecked={true} onChange={() => {
        filterUnits(localLib)
        filterUnits(build_list_filter(localLib))
      }}/>Infantry
      <input type="checkbox" id="typeVehicle" defaultChecked={true} onChange={() => {
        filterUnits(localLib)
        filterUnits(build_list_filter(localLib))
      }}/>Vehicle
      <input type="checkbox" id="typeHelicopter" defaultChecked={true} onChange={() => {
        filterUnits(localLib)
        filterUnits(build_list_filter(localLib))
      }}/>Helicopter
      <input type="checkbox" id="typeAircraft"  defaultChecked={true} onChange={() => {
        filterUnits(localLib)
        filterUnits(build_list_filter(localLib))
      }}/>Aircraft
      </p>
      <p>Unit must have: 
      <input type="checkbox" id="isTACOM" defaultChecked={false} onChange={() => {
        filterUnits(localLib)
        filterUnits(build_list_filter(localLib))
      }}/>TACOM
      <input type="checkbox" id="canEmbark" defaultChecked={false} onChange={() => {
        filterUnits(localLib)
        filterUnits(build_list_filter(localLib))
      }}/>Personnel Carrier
      <input type="checkbox" id="canTow" defaultChecked={false} onChange={() => {
        filterUnits(localLib)
        filterUnits(build_list_filter(localLib))
      }}/>Tow
      <input type="checkbox" id="canResupply" defaultChecked={false} onChange={() => {
        filterUnits(localLib)
        filterUnits(build_list_filter(localLib))
      }}/>Resupply
      <input type="checkbox" id="canGoOnWater" defaultChecked={false} onChange={() => {
        filterUnits(localLib)
        filterUnits(build_list_filter(localLib))
      }}/>Amphibious/Watercraft
      <input type="checkbox" id="canParadrop" defaultChecked={false} onChange={() => {
        filterUnits(localLib)
        filterUnits(build_list_filter(localLib))
      }}/>Paradrop/Infiltrator
      <input type="checkbox" id="canAssault" defaultChecked={false} onChange={() => {
        filterUnits(localLib)
        filterUnits(build_list_filter(localLib))
      }}/>Assault Specialist/Assault Dismount
      
      </p>

    </div>
      <table className="MainBox">
        <tbody>
          <tr>
            <th>Unit Library</th>
            <th>Army List</th>
          </tr>
          <tr>
            <td className="LibraryHolder">
              <div className="FloatingTable">
                <table id="unitLibrary">
                  <tbody>
                    {workingLibrary.map((unit, index) => (
                      <tr key={index} className={unit.faction}>
                        <td className="UnitName">
                          <button type="button" style={{textAlign:"left"}} onClick={() => alert(render_unit_data(unit))}>
                            <p style={{marginLeft:5}}>{unit.name}</p>
                            <p style={{fontSize:10, marginLeft:5}}>{unit.type.super + " ("+unit.type.sub+") "+" | "+unit.value + " pts"}</p>
                          </button>
                        </td>
                        <td>
                          <button 
                            type="button" className="FullSquareButton" onClick={() => {
                            //Add only the items necessary to be saved on the army list side + values being tracked
                            updateArmyList([
                              ...workingList,
                              {
                                "unitNum":idNum,
                                "unitData":unit,
                                "unitCallsign":generate_callsign(),
                                "unitLeader":generate_name(unit.faction),
                                "unitTransport":null
                              }
                              ])
                            console.log(unit.faction)
                            //Update tracked values on unit add to army list
                            updateListValue(workingValue+unit.value)
                            updateCommandGen(workingCommandGen+unit.command)
                            idNum++
                            if(unit.tags.some(tag => tag.rule == "TACOM") && !unit.tags.some(tag => tag.params == "Additional")){
                              updateTacCount(workingTacCount+1)
                            }}}>Add Unit +</button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </td>
          <td className="ListHolder">
            <div className="FloatingTable">      
              <table id="armyList">
                <tbody>
                {workingList.map((unit, index) => (
                  <tr key={index} id="armyUnit">
                    <td className="UnitName"> 
                      <button style={{textAlign:'left'}} onClick={() => { //Allow user to assign custom callsigns, names
                        let newCallsign = prompt("What is this unit's callsign?",unit.unitCallsign)
                        if(newCallsign!=null){//DON'T REPLACE CALLSIGN ON CANCEL
                          workingList[index].unitCallsign = newCallsign
                        }
                        updateArmyList([...workingList])
                      }}>
                        <p style={{marginLeft:5}}>{unit.unitData.name}</p>
                        <p style={{marginLeft:5, fontSize:10}}>`{unit.unitCallsign}` | {unit.unitLeader}</p>
                      </button>
                    </td>
                    <td style={{width:"50%"}}>
                      {unit.unitData.value} pts
                    </td>
                    <td>
                      <button
                        type="button" className="NormalButton" style={{backgroundColor:"transparent", fontWeight:"bold", color:"red"}} onClick={()=>{
                          //Update workinglist to everything except the value at index
                          updateArmyList(workingList.slice(0, index).concat(workingList.slice(index+1)))
                          //update tracked values on unit being removed from army list
                          updateListValue(workingValue-unit.unitData.value)
                          updateCommandGen(workingCommandGen-unit.unitData.command)
                          if(unit.unitData.tags.some(tag => tag.rule == "TACOM") && !unit.unitData.tags.some(tag => tag.params == "Additional")){
                            updateTacCount(workingTacCount-1)
                          }
                        }}>X</button>
                    </td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          </td>
        </tr>
        <tr>
          <td style={{fontSize:10, textAlign:'left'}}><p>Source Code: <a href="https://github.com/nullAurelian/firelock-198X-armybuilder">https://github.com/nullAurelian/firelock-198X-armybuilder</a></p></td>
          <td>
            <table>
              <tbody>
                <tr>
                  <td className='UtilityMenu'>
                    <button type="button" className="NormalButton" //Reset Army list related tracked data
                      onClick={() => {updateArmyList([]); updateListValue(0); updateTacCount(0); updateCommandGen(0)}}> Clear List </button>
                    <button type="button" className="NormalButton" //Export values to clipboard for pasting elsewhere
                      onClick={() => {handle_export(workingList)}}>Export to Clipboard</button>
                    <button type='button' className='NormalButton' //For every unit with a callsign of null, change to <consonent><vowel>-<index+1>.
                      onClick={() => {
                        for (let i = 0; i < workingList.length; i++) {
                          if(workingList[i].unitCallsign==""){
                            workingList[i].unitCallsign = generate_callsign()
                          }
                          if(workingList[i].unitLeader==""){
                            workingList[i].unitLeader = generate_name(workingList[i].unitData.faction)
                          }
                        }
                        updateArmyList([...workingList])
                      }}>Generate Callsigns and Names</button>
                  </td>
                  <td style={{textAlign:'right'}}>
                    <p id="totalPts">List Value: {workingValue}</p>
                    <p id="totalTAC">TACOM Count: {workingTacCount}</p>
                    <p id="totalCmd">Command Points per turn: {workingCommandGen}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        </tbody>
      </table>
    </>
  )
}
/**
 * Takes the array of units of the user army list and converts it to text that is copied to the user's clipboard.
 * @param {Array} armylist all units selected for use in the user's army.
 */
function handle_export(armylist) { //Trigger copy list content to clipboard
  let armyString = ""
  let armyCost = 0
  console.log(armylist)
  //Format everything in the current army list to a simple text of name only
  for (const u of armylist){
    let uName = ""
    if(u.unitData.tags.some(tag => tag.rule == "TACOM")) {uName = ", "+u.unitLeader}
    armyString = armyString.concat(" \r\n ",u.unitData.name, " (",u.unitCallsign,uName,") [",u.unitData.value," pts]")
    armyCost += u.unitData.value
  }
  console.log(armyString)
  navigator.clipboard.writeText(armyString.concat("\r\nTotal Point Value:",armyCost)).then(
    () => {
      console.log("Copied list to clipboard!")
      alert("Copied contents to clipboard!")
    },
    () => {console.log("Failed to copy list to clipboard!")}
  )
}

/**
 * Takes the global library of units and filters them based on checkbox state.
 * @param {Array} library of all units
 * @returns {Array} of all units that satisfy the selected filters
 */
function build_list_filter(library){
  let temp = library
  //Faction filters
  if(!(document.getElementById("typeFederal").checked)){
    temp = (temp.filter(units => !units.faction.includes("federal")))
  }
  if(!(document.getElementById("typeLupar").checked)){
    temp = (temp.filter(units => !units.faction.includes("lupar")))
  }
  if(!(document.getElementById("typeRygolic").checked)){
    temp = (temp.filter(units => !units.faction.includes("rygolic")))
  }
  if(!(document.getElementById("typeSantagri").checked)){
    temp = (temp.filter(units => !units.faction.includes("santagri")))
  }
  //Unit type filters
  if(!(document.getElementById("typeInfantry").checked)){
    temp = (temp.filter(units => !units.type.super.includes("Infantry")))
  }
  if(!(document.getElementById("typeVehicle").checked)){
    temp = temp.filter(units => !units.type.super.includes("Vehicle"))
  }
  if(!(document.getElementById("typeHelicopter").checked)){
    temp = temp.filter(units => !units.type.super.includes("Helicopter"))
  }
  if(!(document.getElementById("typeAircraft").checked)){
    temp = temp.filter(units => !units.type.super.includes("Aircraft"))
  }
  //Traits filters
  if((document.getElementById("isTACOM").checked)){
    temp = temp.filter(units => units.tags.some(tag => tag.rule == "TACOM"))
  }
  if((document.getElementById("canGoOnWater").checked)){
    temp = temp.filter(units => units.type.sub.includes("Watercraft")).concat(temp.filter(units => units.tags.some(tag => tag.rule == "Amphibious")))
  }
  if((document.getElementById("canParadrop").checked)){
    temp = temp.filter(units => units.tags.some(tag => tag.rule == "Paradrop")).concat(temp.filter(units => units.tags.some(tag => tag.rule == "Infiltrator")))
  }
  if((document.getElementById("canEmbark").checked)){
    temp = temp.filter(units => units.tags.some(tag => tag.rule == "PC"))
  }
  if((document.getElementById("canTow").checked)){
    temp = temp.filter(units => units.tags.some(tag => tag.rule == "Tow"))
  }
  if((document.getElementById("canResupply").checked)){
    temp = temp.filter(units => units.tags.some(tag => tag.rule == "Resupply"))
  }
  if((document.getElementById("canAssault").checked)){
    temp = temp.filter(units => units.tags.some(tag => tag.rule == "Assault Specialist")).concat(temp.filter(units => units.tags.some(tag => tag.rule == "Assault Dismount")))
  }
  return [...new Set(temp)]
}

/**
 * Renders a single unit's data as an active 
 * @param {JSON} unit JSON of unit data saved to the army list.
 * @returns {Element} dynamically generated element of unit data.
 */
function render_unit_data(unit){
  let t = unit.name +"\n\rUnit type: " +unit.type.super +"("+unit.type.sub+")"+"\n\rUnit stats: "+unit.stats+ "\n\rUnit traits: \n\r"
  for(let i = 0; i < unit.tags.length; i++){
    let e = "(" + unit.tags[i].params +")"
    if(e==="()"){e=""}
    t += unit.tags[i].rule +e + ", "
    }
    t+="\n\rUnit Weapons: \n\r"
    for(let i = 0; i < unit.weapons.length; i++){
      let ammo = " Ammo: "+ unit.weapons[i].weaponAmmo
      if(ammo===" Ammo: "){ammo=""}
      let w = unit.weapons[i].weaponName + ammo + "\r\n\t"
      for(let a = 0; a < unit.weapons[i].attacks.length; a++){
        let attk = unit.weapons[i].attacks[a]
        w = w.concat(attk.attackName," ",attk.attackRange," ",attk.attackAccuracy," ",attk.attackStrength," ",attk.attackDice, "\r\n\t\t",attk.attackTags,"\r\n\t")
      }
      t += w + "\n\r"
    }
  return t
}

/**
 * Returns a generated callsign with the pattern <consonent><vowel><consonent>-<number>
 * @returns Callsign string
 */
function generate_callsign(){
  let consonents = "BCDFGHJKLMNPQRSTVWXYZ".split('')
  let vowels = "AEIOUY".split('')
  return consonents[Math.floor(Math.random() * consonents.length)].concat(vowels[Math.floor(Math.random() * vowels.length)], consonents[Math.floor(Math.random() * consonents.length)],"-",Math.round(Math.random()*10))
}

/**
 * Generates a name from a predefined library.
 * @param {Array} faction array of factions assocaited with the unit the name is being applied to. Only uses the first one in the list.
 * @returns string of names
 */
function generate_name(faction){
  console.log(faction)
  switch(faction[0]){
    case "federal":
      return peoplenames.federal.firstNames[Math.floor(Math.random() * peoplenames.federal.firstNames.length)].concat(peoplenames.federal.lastNames[Math.floor(Math.random() * peoplenames.federal.lastNames.length)]);
    case "lupar":
      return peoplenames.lupar.firstNames[Math.floor(Math.random() * peoplenames.lupar.firstNames.length)].concat(peoplenames.lupar.lastNames[Math.floor(Math.random() * peoplenames.lupar.lastNames.length)]);
    case "rygolic":
      return ""; //Rygolic constructs don't have names
    case "santagri":
      return peoplenames.santagri.firstNames[Math.floor(Math.random() * peoplenames.santagri.firstNames.length)].concat(peoplenames.santagri.lastNames[Math.floor(Math.random() * peoplenames.santagri.lastNames.length)]);
    default:
      return "";
  }
}

export default App