import React, { useState, useEffect } from "react";
import "./Feed.css";
import SotryRell from "./SotryRell";
import MenssgeSender from "./MenssgeSender";
import Post from "./Post";
import db from "./firebase";

const Feed = () => {
	const [post, setPost] = useState([]);

	useEffect(() => {
		db.collection("post")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) => {
				setPost(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
			});
	}, []);
	return (
		<div className="feed">
			<SotryRell />
			<MenssgeSender />
			{post.map((post) => (
				<Post
					key={post.data.id}
					profilePic={post.data.profilePic}
					message={post.data.message}
					timestamp={post.data.timestamp}
					username={post.data.username}
					image={post.data.image}
				/>
			))}
		</div>
	);
};

export default Feed;
