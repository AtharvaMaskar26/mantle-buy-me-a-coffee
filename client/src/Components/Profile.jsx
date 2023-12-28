import React from 'react'

const Profile = ({data}) => {
  console.log(data.profiles[0]);


  return (
    <div>
        <div className="banner-section">
          <img src={data.profiles[0].profileBanner.url} alt="img" />
        </div>
        <div className="profile-section relative bottom-20">
          <img src={data.profiles[0].profilePicture.url} alt="profile-picture" className='mx-auto w-[10vw]' />
          <div className="profile-information text-center">
            <h1 className='font-bold text-2xl'>{data.profiles[0].name}</h1>
            <p className='text-slate-500 text-sm'>{data.profiles[0].description}</p>
          </div>
        </div>
    </div>
  )
}

export default Profile
