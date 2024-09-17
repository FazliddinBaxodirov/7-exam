import React from 'react'
import {CLIENT_ID} from '../hooks/useEnv'

export default function Login() {
    const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=http://localhost:5173&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-read-recently-played`;
  return (
    <div className='flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 via-red-100 to-violet-700'>
      <a href={AUTH_URL} className='w-[200px] rounded-md bg-green-600 text-white font-semibold py-[8px] text-center hover:opacity-60'>Login to Spotify</a>
    </div>
  )
}
