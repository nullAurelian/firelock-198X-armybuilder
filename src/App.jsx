import { useState } from 'react'
import './App.css'
import library from './data/unitLibrary.js'

function App() {
  let count = 0;
  let localLib  = library.units
  //Values being tracked: Faction filter/unit library, army list, sum of unit point values, number of TACOMs and Command Points generated per round
  const [faction, setFaction] = useState("any")
  const [workingList, addUnit] = useState([])
  const [workingLibrary, filterUnits] = useState(library.units)
  const [workingValue, updateListValue] = useState(0)
  const [workingTacCount, updateTacCount] = useState(0)
  const [workingCommandGen, updateCommandGen] = useState(0)

  return (
    <>
    <div className="faction_select">
      <p>
        <label>
            <b>Faction: </b>
            <select name="faction" value={faction} onChange={e => {
              filterUnits(localLib)
              setFaction(e.target.value)
              console.log("Current faction: "+e.target.value)
              if(e.target.value !== "any"){
                filterUnits(localLib.filter(a => a.faction.includes(e.target.value)))
              }
            }}>
                <option value="any">All Units</option>
                <option value="federal">Intermarine Federation</option>
                <option value="lupar">Kingdom of the Ebon Forest</option>
                <option value="rygolic">New Rygolic Host</option>
                <option value="santagri">Atom Barons of Santagria</option>
            </select>
        </label>
      </p>    
    </div>
    <div className="Floating">
      <table className="UnitLibrary">
        <tbody>
          {workingLibrary.map((unit, index) => (
            <tr key={index}>
              <td>{unit.name}</td>
              <td className="ExtraPadding">{unit.value}</td>
              <td>
                <button
                  type="button"
                  onClick={()=>{
                    let t = unit.name +"\n\rUnit type: " +unit.type +"\n\rUnit stats: "+unit.stats+ "\n\rUnit traits: \n\r"
                    for(let i = 0; i < unit.tags.length; i++){
                      t += unit.tags[i] + "\n\r"
                    }
                    t+="\n\rUnit Weapons: \n\r"
                    for(let i = 0; i < unit.weapons.length; i++){
                      t += unit.weapons[i] + "\n\r"
                    }
                    alert(t)
                    }}
                  >
                    Unit Details
                  </button>
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
                      }
                    ])
                      count++
                      //Update tracked values on unit add to army list
                      updateListValue(workingValue+unit.value)
                      updateCommandGen(workingCommandGen+unit.command)
                      if(unit.tags.includes("TACOM")){
                        updateTacCount(workingTacCount+1)
                      }
                    }}>Add + </button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="Floating">      
          
            <p>
              List Value: {workingValue}
            </p>
            <p>
              TACOM Count: {workingTacCount}
            </p>
            <p>
              Command Points per turn: {workingCommandGen}
            </p>
            <table className="ArmyList">
              <tbody>
                {workingList.map((unit, index) => (
                  <tr key={index}>
                    <td>{unit.name}</td>
                    <td className="ExtraPadding">{unit.cost}</td>
                    <td>
                      <button
                        type="button"
                        onClick={()=>{
                          addUnit(workingList.filter(a => 
                            a.id !== unit.id
                          ))
                          //update tracked values on unit being removed from army list
                          updateListValue(workingValue-unit.cost)
                          updateCommandGen(workingCommandGen-unit.command)
                          if(unit.tags.includes("TACOM")){
                            updateTacCount(workingTacCount-1)
                          }
                        }}>
                        Remove Unit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            
          
    
    </div>
    
    
    <div className="menu">
      <button 
        type="button"
        onClick={() => {
          alert("Army list has been reset!")
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
  console.log(armylist)
  //Format everything in the current army list to a simple text of name only
  for (const u of armylist){
    armyString = armyString.concat(" \r\n ",u.name)
  }
  console.log(armyString)
  navigator.clipboard.writeText(armyString).then(
    () => {
      console.log("Copied list to clipboard!")
      alert("Copied contents to clipboard!")
    },
    () => {console.log("Failed to copy list to clipboard!")}
  )
}
export default App