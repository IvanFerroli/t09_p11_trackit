import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../constants/urls";

export default function Login () {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate()

	function fazerLogin (event) {
		event.preventDefault();

		const req = axios.post(`${BASE_URL}auth/login`, {
			email: email,
			password: password
		})
        .then(() => navigate("/hoje"))
        .catch(() => console.log("Deu ruim major"))
	}

	return (
		<form onSubmit={fazerLogin}>
		  <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
		  <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
		  <button type="submit">Login</button>
		</form>
	);
}