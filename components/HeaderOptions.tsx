import React from 'react'
import HeaderOption from './HeaderOption'
import { DotsVerticalIcon, MapIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon } from "@heroicons/react/outline"

function HeaderOptions() {
    return (
        <div className='flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]'>
            {/* Left */}
            <div className='flex space-x-6'>
                <HeaderOption Icon={SearchIcon} title="All" selected={true} />
                <HeaderOption Icon={PhotographIcon} title="Images" selected={false} />
                <HeaderOption Icon={PlayIcon} title="Videos" selected={false} />
                <HeaderOption Icon={NewspaperIcon} title="News" selected={false} />
                <HeaderOption Icon={MapIcon} title="Maps" selected={false} />
                <HeaderOption Icon={DotsVerticalIcon} title="More" selected={false} />
            </div>
            {/* Right */}
            <div className='flex space-x-4'>
                <p className='link'>Settings</p>
                <p className='link'>Tools</p>
            </div>
        </div>
    )
}

export default HeaderOptions