import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"
import { BASE_URL } from "../constants/urls";

export default function SignUp () {
	const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
	const [password, setPassword] = useState("");
	const [disabled, setDisabled] = useState(false);
	const navigate = useNavigate()

	function fazerCadastro (event) {
		event.preventDefault();
		setDisabled(true);
		const req = axios.post(`${BASE_URL}auth/sign-up`, {
			email: email,
            name: name,
            image: image,
			password: password
		})
        .then(() => {
			navigate("/")
			setDisabled(false)
		})
        .catch(() => 
		{alert("Deu ruim major")
		setDisabled(false)
	})
	}

	return (
		<form onSubmit={fazerCadastro}>
		  <input type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} disabled={disabled} required/>
		  <input type="text" placeholder="nome" value={name} onChange={e => setName(e.target.value)} disabled={disabled} required/>
          <input type="url" placeholder="imagem" value={image} onChange={e => setImage(e.target.value)} disabled={disabled} required/>
		  <input type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)} disabled={disabled} required/>
		  <button type="submit" disabled={disabled}>Cadastrar</button>
          <Link to="/"><h1>Login</h1></Link>
		</form>
	);
}