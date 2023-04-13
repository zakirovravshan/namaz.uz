import Main from './pages/Main.js/Main';
import { Routes, Route } from 'react-router-dom';
import Settings from './pages/Settings/Settings';
import { Bar } from './components/Bar/Bar';

function App() {
	
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
