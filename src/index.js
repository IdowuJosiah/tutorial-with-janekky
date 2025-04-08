import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import TestScorePage from "./testscore.js"
 
 
 
const newBaby = (
    <div className="bsd">
        <TestScorePage></TestScorePage>
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