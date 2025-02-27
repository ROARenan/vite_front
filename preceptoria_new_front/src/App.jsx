import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar.jsx'
import FormPreceptoria from './components/FormPreceptoria.jsx'
import ProfileCard from './components/ProfileCard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <FormPreceptoria />
      <ProfileCard />
    </>
  )
}

export default App