import React from "react";



function ExerciseList(props)
{
    return( 
      <div className="card" style={{width: "20rem"}}>
        <div className="card-body">
        <img className="card-img" src={props.emoji} alt="fitness" />
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
    
        </div>
      </div>

    );
   
}
export default ExerciseList;