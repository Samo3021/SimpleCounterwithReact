import React from "react";

//include images into your bundle

import { SecondsCounter } from "./SecondsCounter.js";

//create your first component
export function Home() {
	return (
		<div>
			<SecondsCounter />
		</div>
	);
}
