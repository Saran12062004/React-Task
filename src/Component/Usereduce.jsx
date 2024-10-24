import React,{ useReducer } from 'react'

const Usereduce = () => {

    const reducer = (currentState,action) => {
        switch(action.type){
        case "increment":
            return currentState + action.payload
            case "decrement":
                return currentState = action.payload
                default:
                    return currentState
    }
}

const [count,dispatch] = useReducer(reducer,0)
// dispatch => action => reducer => state
  return (
    <div>
      <h2>UseReduceHook</h2> 
      <h4>Count: {count}</h4>
      <button onClick={() => {dispatch({type:'increment',payload:100})}} className='btn btn-outline-primary'>INCREMENT</button>
      <button onClick={() => {dispatch({type:'decrement',payload:0})}} className='btn btn-outline-danger'>RESET</button>

    </div>
  )
}

export default Usereduce
