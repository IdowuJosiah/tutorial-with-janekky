import React from "react"
import { FaReact } from "react-icons/fa";

const Header = () =>{
    return (
        <header className="header">
            <nav className="nav-button">
                <div className="nav-logo">
                    <FaReact/>
                </div>
                <div className='item-list'>
                    <ul>
                        <ol>
                            Pricing
                        </ol>
                        <ol>
                            About
                        </ol>
                        <ol>
                            Contact
                        </ol>
                    </ul>
                </div>
            </nav>


        </header>

    )
 }

 export default Header