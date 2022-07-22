import React, { useState } from "react";

//Show the latest time in the <h1> when the Get Time button
//is pressed.

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);

function App() {
  setInterval(getTime, 1000);

  let now = new Date().toLocaleTimeString();

  const [state, setState] = useState(now);

  function getTime() {
    let newTime = new Date().toLocaleTimeString();
    setState(newTime);
  }

  return (
    <div className="container">
      <h1>{state}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
