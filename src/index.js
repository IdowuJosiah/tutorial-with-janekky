import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import Header from "./header"
import ManiContent from "./ManiContents"
import Footer from "./footer"

 
 
 
const newBaby = (
    <div className="bsd">
        <div>
            <header>
                <h3>Your Result</h3>
            </header>
            <span>
        <h1>76</h1>
        <h4>of 100</h4>
    </span>
            <main>
                <h1>Great</h1>
                <p>you scored higher than 65% of<br>
                </br> the people who have taken <br>
                </br>these tests</p>
            </main>
            <section>
                <h2>
                    summary
                </h2>
                <tb>
                    <tr>
                        Reaction 80/100
                    </tr>
                    <tr>
                        Memory 92/100
                    </tr>
                    <tr>
                        Verbal 61/100
                    </tr>
                    <tr>
                        Visual 73/100
                    </tr>
                </tb>
                <button>
                    Continue
                </button>
            </section>
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