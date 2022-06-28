import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import React from "react";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import LoginPage from "./pages/LoginPage";
import BaseLayoutPage from "./pages/BaseLayoutPage";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="home/*" element={<BaseLayoutPage />}></Route>
					<Route path="login" element={<LoginPage />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
