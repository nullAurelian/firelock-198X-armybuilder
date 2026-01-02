import { useState } from 'react'
import './App.css'
import generics from './data/unitLibrary.js'

import fedlist from './data/federalLibrary.js'
import luplist from './data/luparLibrary.js'
import rygolist from './data/rygolicLibrary.js'
import santalist from './data/santagriLibrary.js'

function App() {
  let count = 0;
  let localLib  = fedlist.concat(luplist,rygolist,santalist,generics)
  //Values being tracked: Faction filter/unit library, army list, sum of unit point values, number of TACOMs and Command Points generated per round
  const [workingList, addUnit] = useState([])
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
      
      </p>

    </div>
      <table className="MainBox">
        <tbody>
          <tr>
            <th>Unit Library</th>
            <th>Army List</th>
          </tr>
          <tr>
            <td className="TableHolder">
              <div className="FloatingTable">
                <table>
                  <tbody>
                    {workingLibrary.map((unit, index) => (
                      <tr key={index} className={unit.faction}>
                        <td className="UnitName">{unit.name}</td>
                        <td className="UnitPointCost">{unit.value}</td>
                        <td>
                          <button
                            type="button"
                            onClick={()=>{
                              let t = unit.name +"\n\rUnit type: " +unit.type.super +"("+unit.type.sub+")"+"\n\rUnit stats: "+unit.stats+ "\n\rUnit traits: \n\r"
                              for(let i = 0; i < unit.tags.length; i++){
                                let e = "(" + unit.tags[i].params +")"
                                if(e==="()"){e=""}
                                console.log(unit.tags[i].rule)
                                console.log(e)
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
                              console.log(t)
                              alert(t)
                            }}
                          >Unit Details</button>
                        </td>
                        <td>
                          <button 
                            type="button" onClick={() => {
                            //Add only the items necessary to be saved on the army list side + values being tracked
                            addUnit([
                              ...workingList,
                              {
                                "id":{count},
                                "name":unit.name,
                                "cost":unit.value,
                                "tags":unit.tags,
                                "command":unit.command
                              }])
                            count++
                            //Update tracked values on unit add to army list
                            updateListValue(workingValue+unit.value)
                            updateCommandGen(workingCommandGen+unit.command)
                            if(unit.tags.some(tag => tag.rule == "TACOM") && !unit.tags.some(tag => tag.params == "Additional")){
                              updateTacCount(workingTacCount+1)
                            }}}>Add + </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </td>
          <td className="TableHolder">
            <div className="FloatingTable">      
              <table>
                <tbody>
                {workingList.map((unit, index) => (
                  <tr key={index}>
                    <td className="UnitName">{unit.name}</td>
                    <td className="UnitPointCost">{unit.cost}</td>
                    <td>
                      <button
                        type="button" onClick={()=>{
                          addUnit(workingList.filter(a => a.id !== unit.id))
                          //update tracked values on unit being removed from army list
                          updateListValue(workingValue-unit.cost)
                          updateCommandGen(workingCommandGen-unit.command)
                          if(unit.tags.some(tag => tag.rule == "TACOM") && !unit.tags.some(tag => tag.params == "Additional")){
                            updateTacCount(workingTacCount-1)
                          }
                        }}>Remove Unit</button>
                    </td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          </td>
        </tr>
        </tbody>
      </table>

    <div className="ArmyMenu">
      <p>List Value: {workingValue}</p>
      <p>TACOM Count: {workingTacCount}</p>
      <p>Command Points per turn: {workingCommandGen}</p>
      <button 
        type="button"
        onClick={() => {
          //Reset Army list related tracked data
          addUnit([])
          updateListValue(0)
          updateTacCount(0)
          updateCommandGen(0)
        }}>
          Clear List
        </button>
      <button 
        type="button"
        onClick={() => {
          handle_export(workingList)
        }}>
          Export to Clipboard
        </button>
    </div>
    </>
  )
}

function handle_export(armylist) { //Trigger copy list content to clipboard
  let armyString = ""
  let armyCost = 0
  console.log(armylist)
  //Format everything in the current army list to a simple text of name only
  for (const u of armylist){
    armyString = armyString.concat(" \r\n ",u.name)
    armyCost += u.cost
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
  return [...new Set(temp)]
}
export default App