import Child  from "./Child"
const App = () => {
  const showHappyMessege = () =>{
     alert("Keep smiling!")
  }
  const showSleepyMessege = () =>{
    alert("time for coffee...")
  }
  const showExitedMessege = () =>{
    alert("Let's gooo...")
  }
  return (
    <>
      <Child onMoodClick={showHappyMessege} Mood="happy" Bgcolor="pink"/>
      <Child onMoodClick={showSleepyMessege} Mood="sleepy" Bgcolor="purple"/>
      <Child onMoodClick={showExitedMessege} Mood="exited" Bgcolor="yellow"/>
    </>
  )
}
export default App
