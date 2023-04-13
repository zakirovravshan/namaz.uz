import Main from './pages/Main.js/Main';
import { Routes, Route } from 'react-router-dom';
import Settings from './pages/Settings/Settings';
import { Bar } from './components/Bar/Bar';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
	useEffect(() => {
			axios
				.get('https://islomapi.uz/api/present/day?region=Toshkent')
				.then((res) => {
					if (res.status === 200) {
						console.log(res.data)
						const times = JSON.stringify(res.data);
						localStorage.setItem('times', times);
					}
				})
				.catch((error) => console.log(error));

	}, []);

	return (
		<div>
			<Routes>
				<Route index path='/' element={<Main />} />
				<Route path='/settings' element={<Settings />} />
			</Routes>
			<Bar />
		</div>
	);
}

export default App;
