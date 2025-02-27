import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar.jsx'
import FormPreceptoria from './components/FormPreceptoria.jsx'
import ProfileCard from './components/ProfileCard.jsx'
import Contact from './components/Contact.jsx' // Import the new Contact component

function App() {
  const [profile, setProfile] = useState(null)

  const updateProfile = () => {
    setProfile({
      photo: viteLogo,
      name: 'Jane Smith',
      detail1: 'New Detail 1',
      detail2: 'New Detail 2',
      detail3: 'New Detail 3',
      detail4: 'New Detail 4'
    })
  }

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <button onClick={updateProfile}>Update Profile</button>
            <div className={`container ${profile ? 'with-profile' : ''}`}>
              <div className="content" style={{ display: 'flex'}}>
                <FormPreceptoria />
                {profile && <ProfileCard profile={profile} />}
              </div>
            </div>
          </>
        } />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App