import "./App.css";
import Pagination from "./questions/pagination/Pagination";
import React, { useState, useTransition } from "react";
import Multiselect from "./questions/multiselect/Multiselect";
import Stepper from "./questions/stepper/Stepper";
import EnterOtp from "./questions/enterOtp/EnterOtp";
function App() {
  return (
    <div className="App">
      <EnterOtp />
    </div>
  );
}

export default App;
