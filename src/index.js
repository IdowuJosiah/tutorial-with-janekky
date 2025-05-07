import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.scss"
// import Header from "./header"
// import MainContent from "./MainContent"
// import Footer from "./Footer";
import AirApp from "../src/Tests/Airbnb/App"

const newBaby = (
    <div className="bsd">
    <AirApp />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(newBaby);

// <div className="try">
//     <Header/>
//     <MainContent/>
// </div>
// <div className="try-two">
//     <Footer/>
// </div>
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