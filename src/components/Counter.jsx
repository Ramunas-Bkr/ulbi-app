import React, { useState } from 'react'

export const Counter = () => {

    const[count, setCount] = useState(0);

    function increment() {
        setCount(count + 1)
      }
    
      function decrement() {
        setCount(count - 1)
      }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Pridėti</button>
            <button onClick={decrement}>Atimti</button>
        </div>
    )
}

export default Counter;
