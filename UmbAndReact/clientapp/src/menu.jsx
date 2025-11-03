import React from 'react'
import { Link } from "react-router";
function Menu() {
    return (
        <>
            <header className='bg-gray-500 flex justify-between align-center py-10 px-20'>
               <div className='logo text-2xl text-700 bold text-white'>
                    LOGO
               </div>
                 <nav>
                    <ul className='flex gap-2 justify-center'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about-us">About Us</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Menu