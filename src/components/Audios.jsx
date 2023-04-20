import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import play from '../assets/icons/play.svg';
import { BsPauseFill } from 'react-icons/bs';

export const Audios = ({ ayahnumber }) => {
	const [audio, setAudio] = useState('');
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef(null);

	const getAudio = (number) => {
		setAudio(
			`https://cdn.islamic.network/quran/audio/128/ar.alafasy/${number}.mp3`,
		);
	};

	const handleEnded = () => {
		setIsPlaying(false); // обновление состояния после окончания воспроизведения
	};

	useEffect(() => {
		getAudio(ayahnumber);
	}, []);

	const handleButtonClick = async () => {
		if (isPlaying) {
			audioRef.current.pause(); // приостановка воспроизведения аудио
			setIsPlaying(false); // обновление состояния
		} else {
			audioRef.current.play(); // воспроизведение аудио
			setIsPlaying(true); // обновление состояния
		}
	};

	return (
		<div>
			<button onClick={() => handleButtonClick()} className='bar__copy__button'>
				{isPlaying ? (
					<BsPauseFill size={'20px'} color='#03AA77' />
				) : (
					<img src={play} alt='playbutton' width={'15px'} />
				)}
			</button>
			<audio ref={audioRef} src={audio} onEnded={handleEnded} />
		</div>
	);
};
