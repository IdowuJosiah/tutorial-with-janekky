import { FaReact } from "react-icons/fa";
import "./index.scss"


const Header = () =>{

    return (
        <header className="header-josiah">
            <nav className="headers-nav">
                <div className="headers-logo">
                    <FaReact className="logo-icon"/>
                </div>
                <div className="nav-list-container">
                    <ul className="nav-list">
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
export default Header;