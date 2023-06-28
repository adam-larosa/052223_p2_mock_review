import React from "react";

function NewPartyForm() {
  return (
    <form className="new-party-form">
      <input placeholder="Address" />
      <input placeholder="Host" />
      <textarea 
        placeholder="Notes about the party here..." rows={10} 
      />
      <input type="submit" value="Submit party" />
    </form>
  );
}

export default NewPartyForm;
