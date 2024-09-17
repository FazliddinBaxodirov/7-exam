import React from 'react'
import { NavLink } from 'react-router-dom'
import { CreateIcon, HomeIcon, LibraryIcon, LikedIcon, SearchIcon } from '../assets/Icons'

export default function Navbar() {
    return (
        <div className='pl-[30px] pr-[39px] bg-black pt-[70px] h-screen overflow-y-auto'>
            <div className='flex-col flex space-y-[49px] pb-[20px] border-b-[1px] border-[#282828]'>
                <ul className='flex flex-col space-y-[20px]'>
                    <li>
                        <NavLink className={"font-bold flex items-center gap-[20px] text-white text-[18px] leading-[22.77px]"} to={'/'}>
                            <HomeIcon />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={"font-bold flex items-center gap-[20px] text-white text-[18px] leading-[22.77px]"} to={'/search'}>
                            <SearchIcon />
                            Search
                        </NavLink>
                    </li>
                    <li>
                        <div className={"font-bold flex items-center gap-[20px] text-white text-[18px] leading-[22.77px]"}>
                            <LibraryIcon />
                            Library
                        </div>
                    </li>
                </ul>
                <ul className='flex flex-col space-y-[20px]'>
                    <li>
                        <div className={"font-bold flex items-center gap-[20px] text-white text-[18px] leading-[22.77px]"}>
                            <CreateIcon />
                            Create Playlist
                        </div>
                    </li>
                    <li>
                        <NavLink className={"font-bold flex items-center gap-[20px] text-white text-[18px] leading-[22.77px]"} to={'/liked'}>
                            <LikedIcon />
                            Liked Songs
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='mt-[22px] space-y-[22px] mb-[100px] font-normal text-[18px] leading-[22px] text-[#B3B3B3]'>
                <p>Chill Mix</p>
                <p>Insta Hits</p>
                <p>Your Top Songs 2021</p>
                <p>Anime Lofi & Chillhop Music</p>
                <p>BG Afro “Select” Vibes</p>
                <p>Afro “Select” Vibes</p>
                <p>Happy Hits!</p>
                <p>Deep Focus</p>
                <p>Instrumental Study</p>
                <p>OST Compilations</p>
                <p>Nostalgia for old souled mill...</p>
                <p>Mixed Feelings</p>
            </div>
        </div>
    )
}
