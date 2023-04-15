import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Quran.css';
import 'react-tabs/style/react-tabs.css';

export const Quran = () => {
	const [randomNumber, setRandomNumber] = useState(
		Math.floor(Math.random() * 6226) + 1,
	);

	const [quran, setQuran] = useState({});
	const getQuran = (number) => {
		axios
			.get(
				`https://api.alquran.cloud/v1/ayah/${number}/editions/quran-madina,uz.sodik,ru.kuliev`,
			)
			.then((res) => {
				setQuran(res.data.data);
			})
			.catch((error) => console.log(error));
	};
	const generateRandomNumber = () => {
		const newRandomNumber = Math.floor(Math.random() * 6226) + 1;
		setRandomNumber(newRandomNumber);
	};
	useEffect(() => {
		getQuran(randomNumber);
	}, [randomNumber]);

	return (
		<div className=''>
			<div class='card'>
				<div class='card-front'>
					<p>{quran[0]?.text}</p>
				</div>
				<div class='card-back'>
					<p>
						<p>{quran[1]?.text}</p>.
					</p>
				</div>
			</div>
			<div style={{ textAlign: 'center' }}>
				<button
					onClick={() => generateRandomNumber()}
					className='contactButton'>
					Randomize
					<div className='iconButton'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							width={24}
							height={24}>
							<path fill='none' d='M0 0h24v24H0z' />
							<path
								fill='currentColor'
								d='M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z'
							/>
						</svg>
					</div>
				</button>
			</div>
		</div>
	);
};
