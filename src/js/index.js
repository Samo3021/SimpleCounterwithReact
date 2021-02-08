//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";
import { SecondsCounter } from "./component/SecondsCounter";

//render your react application
let counter = 0;
setInterval(function() {
	const sexto = Math.floor(counter / 100000);
	const quinto = Math.floor(counter / 10000);
	const cuarto = Math.floor(counter / 1000);
	const tres = Math.floor(counter / 100);
	const dos = Math.floor(counter / 10);
	const uno = counter / 1;
	ReactDOM.render(
		<SecondsCounter
			digitUno={uno}
			digitDos={dos}
			digitTres={tres}
			digitCuatro={cuarto}
			digitCinco={quinto}
			digitSeis={sexto}
		/>,
		document.querySelector("#app")
	);
	counter++;
}, 1000);
