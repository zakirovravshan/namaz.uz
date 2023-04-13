import React, { useState, useEffect } from 'react';
import './Main.css';
import axios from 'axios';

const Main = () => {
	const [currentDateTime, setCurrentDateTime] = useState('');
	const [prayerTime, setPrayerTime] = useState({});

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
				if (res.status === 200) {
					setPrayerTime(res.data);
					const times = JSON.stringify(res.data);
					localStorage.setItem('times', times);
				}
			})
			.catch((error) => console.log(error));
	};
	
	const prayTime = JSON.parse(localStorage.getItem('times'));

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
						<p>{prayTime.weekday}</p>
						<p>{prayTime.date}</p>
					</div>
					<div className='city'>
						<p> {prayTime.region}</p>
						<p className='time'>{currentDateTime}</p>
					</div>
				</header>
				<main>
					<section>
						<span></span>
						<div className='taqvim__wrapper'>
							<ul className='taqvim__list'>
								<li className='taqvim__item'>
									<p className='taqvim__item__text__time'>
										{prayTime.times?.tong_saharlik}
									</p>
									<p className='taqvim__item__text'>Saharlik</p>
								</li>
								<li className='taqvim__item'>
									<p className='taqvim__item__text__time'>
										{prayTime.times?.quyosh}
									</p>
									<p className='taqvim__item__text'>Quyosh</p>
								</li>
								<li className='taqvim__item'>
									<p className='taqvim__item__text__time'>
										{prayTime.times?.peshin}
									</p>
									<p className='taqvim__item__text'>Peshin</p>
								</li>
								<li className='taqvim__item'>
									<p className='taqvim__item__text__time'>
										{prayTime.times?.asr}
									</p>
									<p className='taqvim__item__text'>Asr</p>
								</li>
								<li className='taqvim__item'>
									<p className='taqvim__item__text__time'>
										{prayTime.times?.shom_iftor}
									</p>
									<p className='taqvim__item__text'>Shom</p>
								</li>
								<li className='taqvim__item'>
									<p className='taqvim__item__text__time'>
										{prayTime.times?.hufton}
									</p>
									<p className='taqvim__item__text'>Hufton</p>
								</li>
							</ul>
						</div>
					</section>
				</main>
			</div>
		</div>
	);
};

export default Main;
