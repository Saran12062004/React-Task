import React, {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    //Function to increment the count
    const increment = () => {
        setCount(count + 1);
    };

    //Function to decrement the count
    const decrement = () => {
        setCount(count - 1);
    };

  return (
    <div className='table'>
    <h1>Counter:{count}</h1>
    <div className='d-grid gap-2 col-6 mx-auto'>
    <button className='btn btn-outline-primary ' onClick={increment}>Increment</button>
    <button className='btn btn-outline-danger' onClick={decrement}>Decrement</button>  
    </div>
    </div>
  )
}
export default Counter

