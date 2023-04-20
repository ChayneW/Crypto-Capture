import React from "react"
import { Link } from "react-router-dom"
import {MdOutlineEditNotifications} from 'react-icons/md'

const Navbar = () => {
    return (
        <div className="flex justify-between p-4 font-[poppins] text-white">
            <div className="flex justify-end">

                <Link to='/'>
                <h2 className="ml-2">Crypto Capture</h2> 
                </Link>
            </div>

            <div className="flex justify-end">
                <h2> <MdOutlineEditNotifications className="text-gray-300 mr-4" size={30}/></h2>
                <img className="ml-2" src='/dan-cristian.ico' alt='profile-pic'></img>  
            </div>
        </div>
    )
}

export default Navbar