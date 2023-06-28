import React from "react";
import PartyContainer from "./PartyContainer";
import NewPartyForm from "./NewPartyForm";

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <button>Show/hide new party form</button>
        {true ? <NewPartyForm /> : null}
      </div>
      <PartyContainer />
    </div>
  );
}

export default App;
