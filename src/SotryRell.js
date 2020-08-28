import React from "react";
import "./SotryRell.css";
import Story from "./Story";

function SotryRell() {
	return (
		<div className="sotryRell">
			<Story
				image="https://images.unsplash.com/photo-1522973717924-b10fe4e185cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
				profileSrc="https://randomuser.me/api/portraits/men/13.jpg"
				title="Juan"
			/>
			<Story
				image="https://images.unsplash.com/photo-1518917169945-cae8df30060d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
				profileSrc="https://randomuser.me/api/portraits/men/5.jpg"
				title="Peralta"
			/>
			<Story
				image="https://images.unsplash.com/photo-1475204257634-df83964505c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
				profileSrc="https://randomuser.me/api/portraits/men/43.jpg"
				title="Efrain"
			/>
			<Story
				image="https://images.unsplash.com/photo-1560766775-56f6bfb321c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
				profileSrc="https://randomuser.me/api/portraits/men/3.jpg"
				title="Jose"
			/>
			<Story
				image="https://images.unsplash.com/photo-1567474832643-e877a1d7165e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
				profileSrc="https://randomuser.me/api/portraits/men/2.jpg"
				title="Pedro"
			/>
		</div>
	);
}

export default SotryRell;
