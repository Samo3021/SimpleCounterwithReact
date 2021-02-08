import React, { useState } from "react";
import PropTypes from "prop-types";

export function SecondsCounter(props) {
	return (
		<div className="MainCounter">
			<div className="icon-clock">
				<i className="far fa-clock"></i>
			</div>
			<div className="seis">{props.digitSeis % 10}</div>
			<div className="cinco">{props.digitCinco % 10}</div>
			<div className="cuatro">{props.digitCuatro % 10}</div>
			<div className="tres">{props.digitTres % 10}</div>
			<div className="dos">{props.digitDos % 10}</div>
			<div className="uno">{props.digitUno % 10}</div>
		</div>
	);
}
SecondsCounter.propTypes = {
	digitSeis: PropTypes.number,
	digitCinco: PropTypes.number,
	digitCuatro: PropTypes.number,
	digitTres: PropTypes.number,
	digitDos: PropTypes.number,
	digitUno: PropTypes.number
};
