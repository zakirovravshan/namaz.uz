import React from 'react';
import './Settings.css';
import { useState } from 'react';
import redo from '../../assets/icons/redo.png';

const Settings = () => {
	var [counter, setCounter] = useState(localStorage.getItem('counter'));

	var handleCount = () => {
		localStorage.setItem('counter', counter);
		var number = JSON.parse(localStorage.getItem('counter'));
		var sum = number + 1;
		localStorage.setItem('counter', sum);
		setCounter(localStorage.getItem('counter'));
	};

	return (
		<div>
			<div className='wrapper'>
				<p className='tasbeh__display'>{counter}</p>
				<button className='tasbeh__button' onClick={() => handleCount()}>
					Sanoq uchun shu yerni bosing
				</button>
				<button
					onClick={() => {
						setCounter(0);
						localStorage.setItem('counter', 0);
					}}
					className='reset__button'>
					Reset All <img src={redo} alt='redo' width={'20px'} />
				</button>
			</div>
		</div>
	);
};

export default Settings;
