import React, { useState, useEffect } from 'react';
import './Main.css';
import axios from 'axios';
import { motion } from 'framer-motion';
import moment from 'moment/moment';
import icon from '../../assets/icons/logo192.png';
import PrayerTimeComponent from '../../components/Timer/Timer';

const Main = () => {
	const currentDateTime = moment(); // Предполагаем, что время намаза передается в формате 'HH:mm'

	const min = currentDateTime.format('mm');
	const hour = currentDateTime.hour();
	const [soat, setSoat] = useState(`${hour} : ${min}`);
	const [prayerTime, setPrayerTime] = useState(
		JSON.parse(localStorage.getItem('prayerTime')),
	);

	var namoz = Object.values(prayerTime.times);

	const comparePrayerTime = (prayerTime) => {
		const currentDateTime = moment(); // Предполагаем, что время намаза передается в формате 'HH:mm'
		const min = currentDateTime.format('mm');
		const hour = currentDateTime.format('HH');
		const vaqt = `${hour}:${min}`.trim(); // Производим нормализацию строки

		prayerTime.forEach((el) => {
			if (el === vaqt) {
				// Используем строгое равенство

				if (el == prayerTime) {
					// Если текущее время равно времени намаза, выполняем необходимые действия, такие как показ уведомления с звуком и текстом

					// Проверяем, поддерживает ли браузер API уведомлений
					if (
						'Notification' in window &&
						window.Notification.permission === 'granted'
					) {
						// Запрашиваем разрешение на показ уведомления, если оно еще не было получено
						window.Notification.requestPermission().then((permission) => {
							if (permission === 'granted') requestNotificationPermission();
							{
								// Создаем уведомление с заданными параметрами
								const notification = new window.Notification('Время намаза', {
									body: 'Пора выполнять намаз', // Текст уведомления
									icon: { icon }, // Путь к иконке уведомления
									sound: 'путь_к_звуковому_файлу.mp3', // Путь к звуковому файлу
								});
							}
						});
					}
				} else {
					console.log('ishlamayabdi');
				}
			} else {
				console.log('tengmas', el, vaqt);
			}
		});
	};
	function requestNotificationPermission() {
		// Проверяем, поддерживает ли браузер уведомления
		if ('Notification' in window) {
			// Проверяем, есть ли уже разрешение на отправку уведомлений
			if (Notification.permission === 'granted') {
				console.log('Уведомления уже разрешены');
			} else if (
				Notification.permission !== 'denied' ||
				Notification.permission === 'default'
			) {
				// Если разрешение не отклонено и не задано, то запрашиваем его
				Notification.requestPermission().then(function (permission) {
					if (permission === 'granted') {
						console.log('Уведомления разрешены');
					} else {
						console.log('Уведомления не разрешены');
					}
				});
			}
		}
	}

	// Вызываем функцию для запроса разрешения на отправку уведомлений

	comparePrayerTime(namoz);

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
	}, []);

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
						<p className='time'>{soat}</p>
					</div>
				</header>
				<main>
					<section>
						<div className='main__img'>9:12:26</div>
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
									<p className='taqvim__item__text'>Saharlik</p>
									<p className='taqvim__item__text__time'>
										{prayerTime?.times?.tong_saharlik}
									</p>
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
									<p className='taqvim__item__text'>Quyosh</p>
									<p className='taqvim__item__text__time'>
										{prayerTime?.times?.quyosh}
									</p>
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
									<p className='taqvim__item__text'>Peshin</p>
									<p className='taqvim__item__text__time'>
										{prayerTime?.times?.peshin}
									</p>
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
									<p className='taqvim__item__text'>Asr</p>
									<p className='taqvim__item__text__time'>
										{prayerTime?.times?.asr}
									</p>
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
									<p className='taqvim__item__text'>Shom</p>
									<p className='taqvim__item__text__time'>
										{prayerTime?.times?.shom_iftor}
									</p>
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
									<p className='taqvim__item__text'>Hufton</p>
									<p className='taqvim__item__text__time'>
										{prayerTime?.times?.hufton}
									</p>
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
