    import React, { useEffect, useState } from 'react'
    import { ClockIcon, DotsIcon, DownIcon, DownloadIcon, LeftIcon, LikeIcon, LikesIcon, PlayIcon, RightIcon, Search } from '../../assets/Icons'
    import { useNavigate, useParams } from 'react-router-dom'
    import axios from 'axios'

    export default function Playlist() {
        const navigate = useNavigate()
        const { id, token } = useParams()
        const [single, setSingle] = useState([])

        function formatDuration(durationMs) {
            const seconds = Math.floor(durationMs / 1000);
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            const formattedSeconds =
            remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
            return `${minutes}:${formattedSeconds}`;
        }
        const [liked, setLiked] = useState(
            JSON.parse(window.localStorage.getItem(`likedState-${single?.track?.id}`)) ||
            false
        );

        const handleLike = () => {
            setLiked(true);
        };

        useEffect(() => {
            window.localStorage.setItem(
            `likedState-${single?.track?.id}`,
            JSON.stringify(liked)
            );
        }, [liked, single]);

        useEffect(() => {
            axios(`https://api.spotify.com/v1/playlists/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(res => {
                res.data.tracks.items.forEach((value) => {
                    value.isLiked = false
                })
                setSingle(res.data)
            })
        }, [id, token])

        return (
            <div className='playlist-body h-screen overflow-y-auto  w-[62%]'>
                <div className='bg-[#DDF628] px-[40px] flex py-[20px] space-x-[22px]'>
                    <button onClick={() => navigate(-1)} className='w-[40px] h-[40px] rounded-[50%] bg-black opacity-[70%] flex justify-center items-center'>
                        <LeftIcon />
                    </button>
                    <button className='w-[40px] h-[40px] rounded-[50%] bg-black opacity-[70%] flex justify-center items-center'>
                        <RightIcon />
                    </button>
                </div>
                <div className='flex gap-[32px] px-[40px]'>
                    <img src={single?.images?.[0]?.url || "https://placehold.co/297x297?text=No+Image"} alt="img" width={297} />
                    <div>
                        <p className="uppercase text-white mt-[61px] text-[16px] leading-[20px] font-medium">
                            Public Playlist
                        </p>
                        <h1 className="text-[122px] text-white capitalize leading-[150px] font-black w-full line-clamp-1 mt-2">
                            {single?.name}
                        </h1>
                        <div className="flex items-center gap-2 mt-3">
                            {single?.tracks?.items.slice(0, 2).map((item, index) => (
                                <span key={index} className="text-white">
                                    {item?.track?.artists[0]?.name || "Unknown Artist"},
                                </span>
                            ))}
                            <span className="text-primary-5 text-white opacity-[70%]">and more</span>
                        </div>
                        <div className="flex items-center text-gray-400 mt-2">
                            Made for
                            <span className="text-white font-medium ml-1">
                                {single?.owner?.display_name}
                            </span>
                            <span>•</span>
                            <span>{single?.tracks?.items?.length} songs</span>
                        </div>
                    </div>
                </div>
                <div className='px-[40px] mt-[60px] flex items-center justify-between'>
                    <div className='flex items-center gap-[36px]'>
                        <PlayIcon />
                        <div className='flex gap-[21px]'>
                            <LikeIcon />
                            <DownloadIcon />
                            <DotsIcon />
                        </div>
                    </div>
                    <div className='flex gap-[32px]'>
                        <Search />
                        <div className='flex gap-[14px] items-center'>
                            <span className='font-normal text-[18px] leading-[23px] text-white'>Custom Order</span>
                            <DownIcon />
                        </div>
                    </div>
                </div>
                <div className='px-[40px] flex  w-full'>
                    <p className='text-[16px] uppercase ml-[25px] w-[50px] font-medium leading-[20px] text-[#B3B3B3]'>#</p>
                    <p className='w-[230px] uppercase text-[16px] font-medium leading-[20px] text-[#B3B3B3]'>Title</p>
                    <p className='w-[200px] uppercase text-[16px] font-medium leading-[20px] text-[#B3B3B3]'>Album</p>
                    <p className='w-[200px] uppercase text-[16px] font-medium leading-[20px] text-[#B3B3B3]'>Date Added</p>
                    <span className='text-end'><ClockIcon /></span>
                </div>
                <ul className='pl-[65px] w-full pr-[40px]'>
                    {single?.tracks?.items?.map((item, index) => (
                        <li key={index} className='flex items-center py-[10px]'>
                            <span className='w-[50px] text-[#B3B3B3]'>{index + 1}</span>
                            <div className='w-[230px] flex items-center pr-[8px] gap-[20px]'>
                                <img src={item?.track?.album?.images[0].url || ""} alt="img" width={52} height={52} />
                                <p className='text-[15px] font-normal text-[#B3B3B3] line-clamp-1'>{item?.track?.name}</p>
                            </div>
                            <p className="text-[15px] w-[200px] font-normal text-[#B3B3B3] line-clamp-1 pr-[10px]">
                                {item?.track?.artists.map((artist) => artist.name).join(", ")}
                            </p>
                            <div className='w-[170px]'>
                            <span className='text-[#B3B3B3]'>Invalid date</span>
                            </div>
                            <div className="col-span-2 flex items-center gap-[8px] text-gray-400 text-sm">
                                <button onClick={handleLike}>
                                    <LikesIcon/>
                                </button>
                                {formatDuration(item?.track?.duration_ms)}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
