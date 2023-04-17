import Main from './pages/Main.js/Main';
import { Routes, Route, Router } from 'react-router-dom';
import Settings from './pages/Settings/Settings';
import { Bar } from './components/Bar/Bar';
import { Qibla } from './components/Qibla/Qibla';
import { Quran } from './components/Quran/Quran';
import VibrationButton from './components/Vibration';
import { Surah } from './pages/Sura/Surah';

function App() {
	return (
		<div>
			<Routes>
				<Route index path='/' element={<Main />} />
				<Route path='/settings' element={<Settings />} />
				<Route path='/quran' element={<Quran />} />
				<Route path='/quran/surah/:number' element={<Surah />} />

				<Route path='/qibla' element={<Qibla />} />
			</Routes>
			<Bar />
		</div>
	);
}

export default App;
