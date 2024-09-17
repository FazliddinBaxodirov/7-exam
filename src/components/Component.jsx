import { useNavigate } from "react-router-dom"
import React from "react"

export default function Component({item,accessToken}) {
    const navigate = useNavigate()
    return (
        <div>
            <div className='flex pr-[25px] overflow-x-auto'>
                    <div onClick={() => navigate(`/playlist/${item.id}/${accessToken}`)} className='min-w-[224px] card border-[1px] border-slate-300 p-[20px] rounded-[8px]' >
                        <img src={item.images[0].url} alt="img" width={182} height={182} className='w-full h-[182px] mb-[25px] rounded-[8px]'/> 
                        <div>
                            <p className='text-white font-bold capitalize text-[20px] line-clamp-1 mb-2'>{item.name}</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}
