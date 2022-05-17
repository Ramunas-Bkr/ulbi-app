import React, { useState } from "react";

function App() {

  const [likes, setLikes] = useState(0);
  const[value, setValue] = useState('Tekstas inpute')

  function increment() {
    setLikes(likes+1)
  }

  function decrement() {
    setLikes(likes-1)
  }

  return (
    <div className="App">
      <h1>{likes}</h1>
      <h2>{value}</h2>
      <button onClick={increment}>Pridėti</button>
      <button onClick={decrement}>Atimti</button>
      <input
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}/>
    </div>
  );
}

export default App;
