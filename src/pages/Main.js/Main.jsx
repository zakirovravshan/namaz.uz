import React, { useState, useEffect } from 'react';
import './Main.css';
import axios from 'axios';
import { motion } from 'framer-motion';

const Main = () => {
	const [currentDateTime, setCurrentDateTime] = useState('');
	const [prayerTime, setPrayerTime] = useState(
		JSON.parse(localStorage.getItem('prayerTime')),
	);

	// Function to update the current date and time
	const updateCurrentDateTime = () => {
		const currentDate = new Date();

		const hours = currentDate.getHours();
		const minutes = currentDate.getMinutes();
		const seconds = currentDate.getSeconds();
		const currentDateTimeString = ` ${hours}:${minutes}`;
		setCurrentDateTime(currentDateTimeString);
	};

	const getData = () => {
		axios
			.get('https://islomapi.uz/api/present/day?region=Toshkent')
			.then((res) => {
				localStorage.setItem('prayerTime', JSON.stringify(res.data));
				setPrayerTime(JSON.parse(localStorage.getItem('prayerTime')));
			})
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		getData();
		updateCurrentDateTime();
	}, []);
	setInterval(updateCurrentDateTime, 1000);

	return (
		<div className='wrapper'>
			<div className='container'>
				<header className='header'>
					<div className='dates'>
						<p>{prayerTime?.weekday}</p>
						<p>{prayerTime?.date}</p>
					</div>
					<div className='city'>
						<p> {prayerTime?.region}</p>
						<p className='time'>{currentDateTime}</p>
					</div>
				</header>
				<main>
					<section>
						<div className='taqvim__wrapper'>
							<ul className='taqvim__list'>
								<motion.li
									className='taqvim__item'
									initial={{ opacity: 0, scale: 0.5 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{
										duration: 1,
										delay: 0.1,
										ease: [0, 1, 0.2, 1.01],
									}}>
									<p className='taqvim__item__text__time'>
										{prayerTime?.times?.tong_saharlik}
									</p>
									<p className='taqvim__item__text'>Saharlik</p>
								</motion.li>
								<motion.li
									className='taqvim__item'
									initial={{ opacity: 0, scale: 0.5 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{
										duration: 1,
										delay: 0.1,
										ease: [0, 1, 0.2, 1.01],
									}}>
									<p className='taqvim__item__text__time'>
										{prayerTime?.times?.quyosh}
									</p>
									<p className='taqvim__item__text'>Quyosh</p>
								</motion.li>
								<motion.li
									className='taqvim__item'
									initial={{ opacity: 0, scale: 0.5 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{
										duration: 1,
										delay: 0.1,
										ease: [0, 1, 0.2, 1.01],
									}}>
									<p className='taqvim__item__text__time'>
										{prayerTime?.times?.peshin}
									</p>
									<p className='taqvim__item__text'>Peshin</p>
								</motion.li>
								<motion.li
									className='taqvim__item'
									initial={{ opacity: 0, scale: 0.5 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{
										duration: 1,
										delay: 0.1,
										ease: [0, 1, 0.2, 1.01],
									}}>
									<p className='taqvim__item__text__time'>
										{prayerTime?.times?.asr}
									</p>
									<p className='taqvim__item__text'>Asr</p>
								</motion.li>
								<motion.li
									className='taqvim__item'
									initial={{ opacity: 0, scale: 0.5 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{
										duration: 1,
										delay: 0.1,
										ease: [0, 1, 0.2, 1.01],
									}}>
									<p className='taqvim__item__text__time'>
										{prayerTime?.times?.shom_iftor}
									</p>
									<p className='taqvim__item__text'>Shom</p>
								</motion.li>
								<motion.li
									className='taqvim__item'
									initial={{ opacity: 0, scale: 0.5 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{
										duration: 1,
										delay: 0.1,
										ease: [0, 1, 0.2, 1.01],
									}}>
									<p className='taqvim__item__text__time'>
										{prayerTime?.times?.hufton}
									</p>
									<p className='taqvim__item__text'>Hufton</p>
								</motion.li>
							</ul>
						</div>
					</section>
				</main>
			</div>
		</div>
	);
};

export default Main;
