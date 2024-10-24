import React, {useState} from 'react'

const BackroundButton = () => {
const [isRed, setIsRed] = useState(true); 


    const handleToggleColor = () => {
      setIsRed(!isRed);
    };
  return (
    <div>
         <h1>Click The button then you will see colorfull Moment!!!😍</h1>
         <button
      onClick={handleToggleColor}
      style={{
        backgroundColor: isRed ? 'red' : 'blue', // Toggle between red and blue
        color: 'white',
        padding: '20px 30px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      Button Click
    </button> 
    </div>
  )
}

export default BackroundButton
