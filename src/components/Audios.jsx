import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import play from '../assets/icons/play.svg';

export const Audios = ({ ayahnumber }) => {
	const [audio, setAudio] = useState('');
	const audioRef = useRef(null);

	const getAudio = (number) => {
		setAudio(
			`https://cdn.islamic.network/quran/audio/128/ar.alafasy/${number}.mp3`,
		);
	};

	useEffect(() => {
		getAudio(ayahnumber);
	}, []);

	const handleButtonClick = async () => {
		audioRef.current.play();
	};

	return (
		<div>
			<button onClick={() => handleButtonClick()} className='bar__copy__button'>
				<img src={play} alt='playbutton' width={'15px'} />
			</button>
			<audio ref={audioRef} src={audio} />
		</div>
	);
};
