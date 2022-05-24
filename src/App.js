import "primereact/resources/themes/lara-light-indigo/theme.css";  
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";                                

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Button } from 'primereact/button';

 

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<button className='tw-bg-orange-600 tw-text-white tw-p-2 tw-mr-4'>Test Tailwind Button</button>
				<Button label="Prime Button"  />

				<Routes>
					{/* <Route path='/123' element={null}></Route> */}
				</Routes>

			</div>
		</BrowserRouter>
	);
}

export default App;
