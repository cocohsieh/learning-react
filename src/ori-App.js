import React from 'react'
import Card from "./SoloPJ/Card"
import spotData from "./SoloPJ/spotData.js"

const App = () => {
  const showSpot = spotData.map(item=>{
    return <Card {...item}/>
  }) 
  // console.log(showSpot)
  return (
    <>
    {showSpot}
    </>
  )
}

export default App


// function App() {

//   const jokeElements = JokeData.map((item)=>{
//     return <Joke setup={item.setup} punchline={item.punchline}/>

//   })
//   console.log(jokeElements)
//   return (
//     <>
//     {jokeElements}
//     </>
//   );
// }
