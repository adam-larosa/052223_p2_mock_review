import { useEffect, useState } from "react";
import PartyContainer from "./PartyContainer";
import NewPartyForm from "./NewPartyForm";



function App() {

  const [ partiesArray, setParties ] = useState( [] )

  const addPartyToState = newPartyObj => {
    setParties( [ ...partiesArray, newPartyObj ] )
  }

  useEffect( () => {
    fetch( 'http://localhost:8004/parties' )
      .then( r => r.json() )
      .then( data => setParties( data ) )
  }, [] )

  const [ showForm, setShowForm ] = useState( true )

  const toggleForm = () => {
    setShowForm( !showForm )
  }

  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={ toggleForm } >Show/hide new party form</button>
        { showForm ? <NewPartyForm addPartyToState={ addPartyToState } /> : null }
      </div>
      <PartyContainer parties={ partiesArray } />
    </div>
  );
}

export default App;
