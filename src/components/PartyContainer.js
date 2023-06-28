import React from "react";
import Party from "./Party";

function PartyContainer({ parties }) {

  /*
    parties => [ {},{},{},{} ]

    partyComponents => [ <Party />, <Party />, <Party />, <Party /> ]
  */
  
  const partyComponents = parties.map( pObj => {
    return <Party key={ pObj.id } party={ pObj } />
  } )

  return (
    <div className="party-container">
      { partyComponents }
    </div>
  );
}

export default PartyContainer;
