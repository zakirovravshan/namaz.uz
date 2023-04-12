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
			.then((res) => setPrayerTime(res.data))
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
						<p>{prayerTime.weekday}</p>
						<p>{prayerTime.date}</p>
					</div>
					<div className='city'>
						<p> {prayerTime.region}</p>
						<p className='time'>{currentDateTime}</p>
					</div>
				</header>
				<main>
					<section>
						<div className='taqvim__wrapper'>
							
							<ul className='taqvim__list' >
								<li className='taqvim__item'>
									<p>Saharlik</p>
									<p>{prayerTime.times?.tong_saharlik}</p>
								</li>
                                <li className='taqvim__item'>
									<p>Quyosh</p>
									<p>{prayerTime.times?.quyosh}</p>
								</li>
                                <li className='taqvim__item'>
									<p>Peshin</p>
									<p>{prayerTime.times?.peshin}</p>
								</li>
                                <li className='taqvim__item'>
									<p>Asr</p>
									<p>{prayerTime.times?.asr}</p>
								</li>
                                <li className='taqvim__item'>
									<p>Shom</p>
									<p>{prayerTime.times?.shom_iftor}</p>
								</li>
                                <li className='taqvim__item'>
									<p>Hufton</p>
									<p>{prayerTime.times?.hufton}</p>
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
