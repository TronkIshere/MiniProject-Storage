import React from 'react'
import './Navbar.css'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";
import { InboxIcon } from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";



const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
            <div className='nav-icon' onClick={()=>setSidebar(prev=>prev===false?true:false)}>
                <Bars3Icon className="h-5 w-5 text-gray-500" />
            </div>
            <div className='logo'>NewTube</div>
        </div>

        <div className='nav-middle flex-div'>
            <div className="search-box flex-div">
                <input type='text' placeholder='Search'/>
                <div className='nav-icon'>
                    <MagnifyingGlassIcon class="h-6 w-6 text-gray-500" />
                </div>
            </div>
        </div>

        <div className='nav-right flex-div'>
            <div className='nav-icon'>
                <CloudArrowUpIcon class="h-6 w-6 text-gray-500" />
            </div>

            <div className='nav-icon'>
                <InboxIcon class="h-6 w-6 text-gray-500" />
            </div>

            <div className='nav-icon'>
                <BellIcon class="h-6 w-6 text-gray-500" />
            </div>

            <div className='nav-icon'>
                <UserCircleIcon class="h-6 w-6 text-gray-500" />
            </div>
        </div>
    </nav>
  )
}

export default Navbar