import React from 'react'
import Footer from './Footer'
import "./Navbar.css"
const Navbar = ({ logotext }) => {
    return (
        <div>
            <nav>
                <ul className='navbar'>
                    <li>Home</li>
                    <li>Books</li>
                    <li>Comics</li>
                    <li>Top Author</li>
                    <li>New Release</li>
                    {/* <li>Sign UP</li> */}
                    
                </ul>
            </nav>
            {/* <input type="text" placeholder="Search For the Book And the Author You Want" /> */}
        </div>
    )
}

export default Navbar
