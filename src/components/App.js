
import React from "react";
import './../styles/App.css';
import Child from "./Child";
import Parent from "./Parent";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}

        <Parent />
         {/* <Child />  */}
    </div>
  )
}

export default App
