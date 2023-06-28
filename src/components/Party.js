import { useState } from "react";

function Party({ party }) {
  
  const [ attended, setAttended ] = useState( false )

  const toggleAttended = () => {
    setAttended( !attended )
  }
  return (
    <div>
      <h3>{ party.address }</h3>
      <p>{ party.notes }</p>
      <p>
        <strong>- { party.host }</strong>
      </p>
      <button onClick={ toggleAttended }>
        { attended ? 'Party Successful' : 'Go to party' }
      </button>
    </div>
  );
}

export default Party;
