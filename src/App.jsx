import Main from './pages/Main.js/Main';
import { Routes, Route } from 'react-router-dom';
import Settings from './pages/Settings/Settings';
import { Bar } from './components/Bar/Bar';
import { Qibla } from './components/Qibla/Qibla';
import { Quran } from './components/Quran/Quran';

function App() {
	
	return (
		<div>
			
			<Routes>
				<Route index path='/' element={<Main />} />
				<Route path='/settings' element={<Settings />} />
				<Route path='/qibla' element={<Qibla />} />
				<Route path='/application' element={<Quran />} />
			</Routes>
			<Bar />
		</div>
	);
}

export default App;
