import React from 'react';
import ReactDOM from 'react-dom/client';
import { FaReact } from "react-icons/fa";
import "./index.css"
const newBaby = (
    <div className="bsd">
       <header className="header">
           <span>
               <FaReact />
           </span>
           <span>
                    React Facts
           </span>
       </header>
        <div>
            <h1>

            </h1>
            <ul>
                <li>
                    Was first realeased in 2013
                </li>
                <li>
                    Was originally created by jordan walke
                </li>
                <li>
                    Has well over 200k stars on github
                </li>
                <li>
                    is maintained by meta
                </li>
                <li>
                    Powers thousands of enterprise apps, including mobile apps
                </li>
            </ul>
        </div>
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