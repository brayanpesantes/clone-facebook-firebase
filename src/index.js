import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { StateProvaider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

ReactDOM.render(
	<StateProvaider initialState={initialState} reducer={reducer}>
		<App />
	</StateProvaider>,
	document.getElementById("root")
);
