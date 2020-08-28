import React from "react";
import "./Widgets.css";
const Widgets = () => {
	return (
		<div className="widgets">
			<iframe
				title="hola"
				src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCleverProgrammerr%2F&tabs=timeline&width=340&heigth=1500&small_header=false&adpt_container_width=true&hide_cover=false&show_facepile=true&appId"
				width="340"
				height="340"
				style={{ border: "none", overflow: "hidden" }}
				scrolling="no"
				frameBorder="0"
				allowtansparency="true"
				allow="encryted-media"
			></iframe>
		</div>
	);
};

export default Widgets;
