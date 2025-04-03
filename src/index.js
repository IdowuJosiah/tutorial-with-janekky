import React from 'react';
import ReactDOM from 'react-dom/client';
import { FaReact } from "react-icons/fa";
import "./index.css"


 const Header = () =>{
    return (
        <header className="header-josiah">
            <nav>
                <div>
                    <FaReact/>
                </div>
                <div>
                    <ul>
                        <ol>
                            Pricing
                        </ol>
                        <ol>
                            About
                        </ol>
                        <ol>
                            COntact
                        </ol>
                    </ul>
                </div>
            </nav>


        </header>

    )
 }
 const ManiContent = () => {
    return (
        <div>
            <div>
                <h1>
                    reason im ecited to learn react
                </h1>
            </div>
            <div>
                <ol>
                    <li>
                        Was first realeased in 2013
                    </li>
                    <li>
                        Was originally created by jordan walke
                    </li>
                </ol>
            </div>
        </div>

    )
 }
 const Footer = () =>{
    return (
        <div>
            <p>
                2021 ziroll development. All Right Reserved
            </p>
        </div>
    )

 }
const newBaby = (
    <div className="bsd">
        <Header/>
        <ManiContent/>
        <Footer/>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(newBaby);


// const Jennifer = (
//     <div>
//         <h1>Jennifer is the tallest lady in unique hostel</h1>
//         <p>What is wrong with this code?</p>
//         <ol>
//             <li>Happines has left the hostel</li>
//             <li>Ebube has left the hostel</li>
//             <li>So therefore she is the tallest in the building</li>
//         </ol>
//     </div>
// );
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(Jennifer);