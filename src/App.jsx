import React from "react";
import ExerciseList from "./components/ExerciseList";
import EntryList from "./EntryList";
import { Card, CardBody, Navbar } from "react-bootstrap";
import Navig from "./components/Navig";
function CreateEntry(entryitem)
  {
    return(
      <div>
      
      <ExerciseList
      key = {entryitem.id}
      emoji = {entryitem.emoji}
      name = {entryitem.name}
      description = {entryitem.meaning}
    />
    </div>
    );
    
  }

function App()
{
  return(
  <div>
  <Navig/>
  
   <dl className="dictionary">{EntryList.map(CreateEntry)}</dl> 
   <div>
    
   </div>
 </div>);
  
}

export default App;