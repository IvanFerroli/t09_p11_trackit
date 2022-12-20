import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./assets/css/GlobalStyle"

import SignUp from "./pages/SignUp"
import Login from "./pages/Login";
import Today from "./pages/Today";

function App() {
  return (
	<>
		<BrowserRouter>
		<GlobalStyle />
			<Routes>
			<Route path="/cadastro" element={<SignUp />} />
				<Route path="/" element={<Login />} />
        <Route path="/hoje" element={<Today />} />
			</Routes>
		</BrowserRouter>
	</>
  );
}

export default App;



