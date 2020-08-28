import React, { useState } from "react";
import "./MenssgeSender.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import * as firebase from "firebase";

const MenssgeSender = () => {
	const [{ user }, dispatch] = useStateValue();
	const [input, setInput] = useState("");
	const [imageUrl, setImageUrl] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		db.collection("post").add({
			message: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			profilePic: user.photoURL,
			username: user.displayName,
			image: imageUrl,
		});

		setInput("");
		setImageUrl("");
	};

	return (
		<div className="menssgeSender">
			<div className="menssgeSender__top">
				<Avatar src={user.photoURL} />
				<form>
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						className="menssgeSender_input"
						placeholder={`what's on your mid, ${user.displayName}`}
					/>
					<input
						value={imageUrl}
						onChange={(e) => setImageUrl(e.target.value)}
						placeholder="image URL (Optional)"
					/>
					<button type="submit" onClick={handleSubmit}>
						Hidden submit
					</button>
				</form>
			</div>
			<div className="menssgeSender__bottom">
				<div className="menssgeSender__option">
					<VideocamIcon style={{ color: "red" }} />
					<h3>Live Video</h3>
				</div>
				<div className="menssgeSender__option">
					<PhotoLibraryIcon style={{ color: "green" }} />
					<h3>Photo/Video</h3>
				</div>
				<div className="menssgeSender__option">
					<InsertEmoticonIcon style={{ color: "orange" }} />
					<h3>Feeling/Activity</h3>
				</div>
			</div>
		</div>
	);
};

export default MenssgeSender;
