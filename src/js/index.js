//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";


//import your own components
import Home from "./component/home.jsx";
import SecondsCounter from "./component/secondscounter.jsx";

const root = ReactDOM.createRoot(document.getElementById('app'))

setInterval(myCallback, 1000);
let segundos = 0

function myCallback() {
    segundos++
    root.render(<SecondsCounter seconds={segundos}/>);
}