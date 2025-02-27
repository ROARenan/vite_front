import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar.jsx'
import FormPreceptoria from './components/FormPreceptoria.jsx'
import ProfileCard from './components/ProfileCard.jsx'

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
    <>
      <NavBar />
      <button onClick={updateProfile}>Update Profile</button>
      <div className={`container ${profile ? 'with-profile' : ''}`}>
        <div className="content" style={{ display: 'flex'}}>
          <FormPreceptoria />
          {profile && <ProfileCard profile={profile} />}
        </div>
      </div>
    </>
  )
}

export default App