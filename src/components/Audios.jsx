import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

export const Audios = () => {
	const [audio, setAudio] = useState('');
	const audioRef = useRef(null);

	const getAudio = (number) => {
		setAudio(
			`https://cdn.islamic.network/quran/audio/128/ar.alafasy/${number}.mp3`,
		);
	};

	useEffect(() => {
		getAudio(100);
	}, []);

	const handleButtonClick = async () => {
		console.log(audio);
		const audioElement = audioRef.current;
		await audioElement.addEventListener('canplay', () => {
			audioElement.play();
		});
	};

	return (
		<div>
			<h1>Пример воспроизведения звука</h1>
			<button onClick={() => handleButtonClick()}>Воспроизвести</button>
			<audio ref={audioRef}>
				<source src={audio} type='audio/mpeg' />
			</audio>
		</div>
	);
};
