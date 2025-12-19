import { useState } from 'react'
import './App.css'
import library from './data/unitLibrary.js'

function App() {
  let count = 0;
  let localLib  = library.units
  const [faction, setFaction] = useState("any")
  const [workingList, addUnit] = useState([])
  const [workingLibrary, filterUnits] = useState(library.units)
  const [workingValue, updateListValue] = useState(0)
  const [workingTacCount, updateTacCount] = useState(0)

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
      <hr/>     
    </div>
    <div className="Application">

    
    <table>
      <tbody>
        <tr>
          <th>Unit Library</th>
          <th>Army List</th>
        </tr>
        <tr>
          <td>
            <table>
              <tbody>
                {workingLibrary.map((unit, index) => (
                <tr key={index}>
                  <td>{unit.name}</td>
                  <td>
                    <button
                     type="button"
                      onClick={()=>{
                      alert("Display source JSON here for entry")
                      }}>
                      Unit Details
                    </button>
                  </td>
                  <td>
                    <button 
                      type="button" onClick={() => {
                        addUnit([
                          ...workingList,
                          {
                            "id":{count},
                            "name":unit.name,
                            "cost":unit.value,
                            "tags":unit.tags
                          }
                        ])
                        count++
                        updateListValue(workingValue+unit.value)
                        if(unit.tags.includes("TACOM")){
                          updateTacCount(workingTacCount+1)
                        }
                      }}>Add + </button>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
          </td>
          <td>
            <table>
              <tbody>
                {workingList.map((unit, index) => (
                  <tr key={index}>
                    <td>{unit.name}</td>
                    <td>{unit.cost}</td>
                    <td>
                      <button
                        type="button"
                        onClick={()=>{
                          //alert("Remove entry from armylist")
                          addUnit(workingList.filter(a => 
                            a.id !== unit.id
                          ))
                          updateListValue(workingValue-unit.cost)
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
            <p>
              List Value: {workingValue}
            </p>
            <p>
              TACOM Count: {workingTacCount}
            </p>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
    

    <div class="menu">
      <button 
        type="button"
        onClick={() => {
          alert("Clear the contents of the working list.")
          addUnit([])
          updateListValue(0)
          updateTacCount(0)
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