import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Quran.css';
import 'react-tabs/style/react-tabs.css';
import { motion } from 'framer-motion';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import back from '../../assets/icons/back.svg';

export const Quran = () => {
	const [randomNumber, setRandomNumber] = useState(
		Math.floor(Math.random() * 6226) + 1,
	);

	const [quran, setQuran] = useState({});
	const [surah, setSurah] = useState({});
	// const getQuran = (number) => {
	// 	axios
	// 		.get(
	// 			`https://api.alquran.cloud/v1/ayah/${number}/editions/quran-madina,uz.sodik,ru.kuliev`,
	// 		)
	// 		.then((res) => {
	// 			setQuran(res.data.data);
	// 		})
	// 		.catch((error) => console.log(error));
	// };
	// const generateRandomNumber = () => {
	// 	const newRandomNumber = Math.floor(Math.random() * 6226) + 1;
	// 	setRandomNumber(newRandomNumber);
	// };

	const getSurah = () => {
		axios
			.get('https://api.alquran.cloud/v1/surah')
			.then((res) => {
				setSurah(res.data.data);
			})
			.catch((error) => console.log(error));
	};
	useEffect(() => {
		getSurah();
	}, []);
	const navigate = useNavigate();

	return (
		<div className='quran'>
			<div className='quran__wrapper'>
				<button className='back__button' onClick={() => Navigate(-1)}>
					<img src={back} alt='back button' />
				</button>

				<ul className='quran__list'>
					<li className='quran__img'>
						<div>
							<p className='surah__number'>{1}</p>
							<p className='quran__img__title'>Al-Fatiha</p>
						</div>
						<p>Oxirgi marta o'qilgan</p>
						<p>20 Apr 23</p>
					</li>
					{surah.length
						? surah.map((el) => (
								<Link
									key={el.number}
									className='quran__item__link'
									to={`/quran/surah/${el.number}`}>
									<motion.li
										initial={{ opacity: 0, scale: 0.5 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{
											duration: 1,
											delay: 0.1,
											ease: [0, 1, 0.2, 1.01],
										}}
										style={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'space-between',
										}}
										key={el.number}
										className='quran__item'>
										<div style={{ display: 'flex', alignItems: 'center' }}>
											<p className='surah__number'>{el.number}</p>
											<div>
												<p className='surah__name__en'>{el.englishName}</p>
												<p className='surah__rel'>{el.revelationType}</p>
											</div>
										</div>
										<p className='surah__name'>{el.name}</p>
									</motion.li>
								</Link>
						  ))
						: ''}
				</ul>
			</div>
		</div>
	);
};
