import React from "react";
import AccountContainer from "./AccountContainer";

function App() {
  return (
    <div className="ui raised segment">
      <div id ="title" className="ui segment inverted">
        <h2 >The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer />
    </div>
  );
}

export default App;