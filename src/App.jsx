import { useState } from 'react'
import './App.css'
import ContainerInfo from './components/ContainerInfo'
import data from "./data/phrases.json"

const images = ["bg1", "bg2", "bg3", "bg4"]

function App() {

  const getRandomItem = (listItems) => {
    const ramdomIndex = Math.floor(Math.random() * listItems.length)
    return listItems[ramdomIndex]
  }

  const [phrase, setPhrase] = useState(getRandomItem(data))
  const [bgImage, setBgImage] = useState(getRandomItem(images))

  const handleNewInfo = () => {
    setPhrase(getRandomItem(data))
    setBgImage(getRandomItem(images))
  }

  return (
    <div className={`App ${bgImage}`}>
      <ContainerInfo phrase={phrase} handleNewInfo={handleNewInfo}/>

    </div>
  )
}

export default App
