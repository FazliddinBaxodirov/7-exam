import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import LikedPage from './LikedPage'
import Friend from '../../components/Friend'
import SpotifyWebApi from 'spotify-web-api-node'
import { CLIENT_ID } from '../../hooks/useEnv'
import { useAuth } from '../../hooks/useAuth'
import Playlist from './Playlist'

export default function Dashboard({code}) {
  const spotifyApi = new SpotifyWebApi({
    clientId:CLIENT_ID,
  });
  const accessToken = useAuth(code)
  useEffect(() => {
    if(!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  },[accessToken]);
  return (
    <div className=' flex justify-between'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home accessToken={accessToken}/>}/>
        <Route path='/liked' element={<LikedPage/>}/>
        <Route path='/playlist/:id/:token' element={<Playlist/>}/>
      </Routes>
      <Friend/>
    </div>
  )
}



