import React from 'react';
import './Settings.css';
import { useState } from 'react';

const Settings = () => {
	var [counter, setCounter] = useState(0);

	var handleCount = () => {
		setCounter(counter + 1);
		if (counter === 33) {
			setCounter(0);
		}
	};

	return (
		<div>
			<div className='wrapper'>
				<p className='tasbeh__display'>{counter}</p>
				<button className='tasbeh__button' onClick={() => handleCount()}>
					Sanoq uchun shu yerga bosing
				</button>
			</div>
		</div>
	);
};

export default Settings;
