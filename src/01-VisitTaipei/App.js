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