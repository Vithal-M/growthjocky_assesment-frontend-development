import React, { useState } from "react";
// import React, { useState } from 'react';
import "./styles.css"; // Import the CSS file
import PasswordGenerator from "./PasswordGenerator";

function App() {
  return (
    <div className="App">
      <div className="content-container">
        {/* <i className="fas fa-copy"></i> */}
        <h1 className="ps3-svbia">PS3&SVBIA</h1>
        <PasswordGenerator />
      </div>
    </div>
  );
}
export default App;
