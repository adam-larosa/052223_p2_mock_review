import { useState } from "react";

function NewPartyForm({ addPartyToState }) {

  const [ address, setAddress ] = useState( '' )
  const [ host, setHost ] = useState( '' )
  const [ notes, setNotes ] = useState( '' )

  const handleSubmit = e => {
    e.preventDefault()
    const newParty = {
      address: address,
      host: host,
      notes: notes
    }
    fetch( 'http://localhost:8004/parties', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( newParty )
    } )
      .then( r => r.json() )
      .then( newPartyObj => addPartyToState( newPartyObj ) )
  }

  return (
    <form onSubmit={ handleSubmit } className="new-party-form">
      <input onChange={ e => setAddress( e.target.value ) } placeholder="Address" />
      <input onChange={ e => setHost( e.target.value ) } placeholder="Host" />
      <textarea 
        onChange={ e => setNotes( e.target.value ) }
        placeholder="Notes about the party here..." rows={10} 
      />
      <input type="submit" value="Submit party" />
    </form>
  );
}

export default NewPartyForm;
