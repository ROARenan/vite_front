import React from 'react'
import './ProfileCard.css'

function ProfileCard({ profile }) {
  return (
    <div className="profile-card">
      <img src={profile.photo} alt="Profile" className="profile-photo" />
      <h2 className="profile-name">{profile.name}</h2>
      <div className="profile-details">
        <div className="profile-column">
          <p>{profile.detail1}</p>
          <p>{profile.detail2}</p>
        </div>
        <div className="profile-column">
          <p>{profile.detail3}</p>
          <p>{profile.detail4}</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard