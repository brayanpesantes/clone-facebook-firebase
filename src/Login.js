import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionType } from "./reducer";

const Login = () => {
	const [state, dispach] = useStateValue();

	const singIn = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				dispach({
					type: actionType.SET_USER,
					user: result.user,
				});
			})
			.catch((e) => console.log(e));
	};

	return (
		<div className="login">
			<div className="login_logo">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png"
					alt=""
				/>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/800px-Facebook_Logo_%282019%29.svg.png"
					alt=""
				/>
			</div>
			<button type="submit" onClick={singIn}>
				Sing In
			</button>
		</div>
	);
};

export default Login;
