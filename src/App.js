import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { BrowserRouter, } from 'react-router-dom';
import './App.scss';

import BaseLayoutPage from "./pages/BaseLayoutPage";


function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<BaseLayoutPage></BaseLayoutPage>
			</div>
		</BrowserRouter>
	);
}

export default App;
