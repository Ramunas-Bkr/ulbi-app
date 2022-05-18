import React from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItmes from "./components/PostItmes";
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <Counter />
      <ClassCounter />
      <PostItmes />
    </div>
  );
}

export default App;
