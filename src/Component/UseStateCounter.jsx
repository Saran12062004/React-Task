import React, {useState} from 'react'

const UseStateConter = () => {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState([])

    const handleIncrement = () => {
        setCount(count + 1)
    }
  return (
    <>
        <h2>UseStateConter</h2>
        <h3>Count: {count}</h3>
        <button className='btn btn-outline-primary me-2'
        onClick={handleIncrement}
        >Increment</button>
        <button className='btn btn-outline-danger'>Decrement</button>
    </>
  )
}

export default UseStateConter
