import React from 'react'
const Child = ({onMoodClick,Mood,Bgcolor}) => {
  // const currentBg = isOn ? 'lightyellow' : 'lightgray';
  return (
       <button onClick={onMoodClick}
       style={{
        backgroundColor:Bgcolor,padding :"10px",width:"200px",fontSize:"18px",
        display:"flex",gap:"20px"}}
        >{Mood}</button>
  )
}

export default Child
