import React, { useEffect, useState } from 'react'
import { LeftIcon, RightIcon } from '../../assets/Icons'
import Chill from '../../assets/images/Chill.png'
import Daily from '../../assets/images/Daily.png'
import Daily4 from '../../assets/images/Daily4.png'
import Daily5 from '../../assets/images/Daily5.png'
import Folk from '../../assets/images/Folk.png'
import Pop from '../../assets/images/Pop.png'
import { useNavigate } from 'react-router-dom'
import SpotifyWebApi from 'spotify-web-api-node'
import axios from 'axios'
import { CLIENT_ID } from '../../hooks/useEnv'
import Component from '../../components/Component'

export default function Home({ accessToken }) {
  const navigate = useNavigate()
  const [topMixes, setTopMixes] = useState([])
  const [madeForYou, setMadeForYou] = useState([])
  const [recently, setRecently] = useState([])
  const [jumpBackIn, setJumpBackIn] = useState([])
  const [uniquel, setUniquel] = useState([])
  const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID
  });
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
    axios("https://api.spotify.com/v1/browse/categories/toplists/playlists", {
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
    })
      .then(res => setTopMixes(res.data.playlists.items))
      .catch(err => console.log(err)
      );
    axios(
      "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFHOzuVTgTizF/playlists",
      {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }
    )
      .then((res) => setMadeForYou(res.data.playlists.items))
      .catch((err) => console.log(err));
    axios(
      "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFQ00XGBls6ym/playlists",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
      .then((res) => setRecently(res.data.playlists.items))
      .catch((err) => console.log(err));
    axios(
      "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFLVaM30PMBm4/playlists",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
      .then((res) => setJumpBackIn(res.data.playlists.items))
      .catch((err) => console.log(err));
    axios(
      "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFCbimwdOYlsl/playlists",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    ).then((res) => setUniquel(res.data.playlists.items));
  }, [accessToken])


  return (
    <div className='w-[55%] px-[41px] overflow-y-auto h-screen'>
      <div className='top-0  w-full flex py-[20px] space-x-[22px]'>
        <button className='w-[40px] h-[40px] rounded-[50%] bg-black opacity-[70%] flex justify-center items-center'>
          <LeftIcon />
        </button>
        <button className='w-[40px] h-[40px] rounded-[50%] bg-black opacity-[70%] flex justify-center items-center'>
          <RightIcon />
        </button>
      </div>
      <h2 className='font-bold text-[39px] leading-[50px] text-white my-[30px]'>Good Afternoon</h2>
      <div className='flex  gap-[30px]'>
        <ul className='w-[48%] space-y-[16px]'>
          <li className='bg-white bg-opacity-[10%] rounded-[6px] flex items-center gap-[21px]'>
            <img src={Chill} alt="chill" className='rounded-s-md' />
            <p className='font-bold text-[20px] leading-[25px] text-white'>Chill Mix</p>
          </li>
          <li className='bg-white bg-opacity-[10%] rounded-[6px] flex items-center gap-[21px]'>
            <img src={Daily} alt="chill" className='rounded-s-md' />
            <p className='font-bold text-[20px] leading-[25px] text-white'>Daily Mix 1</p>
          </li>
          <li className='bg-white bg-opacity-[10%] rounded-[6px] flex items-center gap-[21px]'>
            <img src={Folk} alt="chill" className='rounded-s-md' />
            <p className='font-bold text-[20px] leading-[25px] text-white'>Folk & Acoustic Mix</p>
          </li>
        </ul>
        <ul className='w-[48%] space-y-[16px]'>
          <li className='bg-white bg-opacity-[10%] rounded-[6px] flex items-center gap-[21px]'>
            <img src={Pop} alt="chill" className='rounded-s-md' />
            <p className='font-bold text-[20px] leading-[25px] text-white'>Pop Mix</p>
          </li>
          <li className='bg-white bg-opacity-[10%] rounded-[6px] flex items-center gap-[21px]'>
            <img src={Daily5} alt="chill" className='rounded-s-md' />
            <p className='font-bold text-[20px] leading-[25px] text-white'>Daily Mix 5</p>
          </li>
          <li className='bg-white bg-opacity-[10%] rounded-[6px] flex items-center gap-[21px]'>
            <img src={Daily4} alt="chill" className='rounded-s-md' />
            <p className='font-bold text-[20px] leading-[25px] text-white'>Daily Mix 4</p>
          </li>
        </ul>
      </div>
      <div>
        <h2 className='font-bold text-[35px] text-white my-[28px]'>Top Mixes Music</h2>
        <div className='flex gap-[20px] overflow-x-auto'>
          {topMixes.map((item, index) => (
            <Component accessToken={accessToken} item={item} key={index} />
          ))}
        </div>
      </div>
      <div>
        <h2 className='font-bold text-[35px] text-white my-[28px]'>Made for you</h2>
        <div className='flex gap-[20px] overflow-x-auto'>
          {madeForYou.map((item, index) => (
            <Component accessToken={accessToken} item={item} key={index} />
          ))}
        </div>
      </div>
      <div>
        <h2 className='font-bold text-[35px] text-white my-[28px]'>Recently played</h2>
        <div className='flex gap-[20px] overflow-x-auto'>
          {recently.map((item, index) => (
            <Component accessToken={accessToken} item={item} key={index} />
          ))}
        </div>
      </div>
      <div>
        <h2 className='font-bold text-[35px] text-white my-[28px]'>Jump Back In</h2>
        <div className='flex gap-[20px] overflow-x-auto'>
          {jumpBackIn.map((item, index) => (
            <Component accessToken={accessToken} item={item} key={index} />
          ))}
        </div>
      </div>
      <div className='mb-[22px]'>
        <h2 className='font-bold text-[35px] text-white my-[28px]'>Uniquely yours</h2>
        <div className='flex gap-[20px] overflow-x-auto'>
          {uniquel.map((item, index) => (
            <Component accessToken={accessToken} item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
