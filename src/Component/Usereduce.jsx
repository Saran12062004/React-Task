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
      <button onClick={() => {dispatch({type:'increment',payload:10})}} className='btn btn-outline-primary'>increment</button>
      <button onClick={() => {dispatch('decrement')}} className='btn btn-outline-danger'>decrement</button>

    </div>
  )
}

export default Usereduce
