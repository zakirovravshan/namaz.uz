import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import back from '../../assets/icons/back.svg';
import './Surah.css';
import { Loader } from '../../components/Loader/Loader';
import bismillah from '../../assets/images/bismillah.svg';
import play from '../../assets/icons/play.svg';
import copy from '../../assets/icons/copy.svg';
import clipboardCopy from 'clipboard-copy';

export const Surah = () => {
	const { number } = useParams();
	const [surah, setSurah] = useState({});
	const [translation, setTranslation] = useState({});
	const navigate = useNavigate();

	const getSurah = () => {
		axios
			.get(`http://api.alquran.cloud/v1/surah/${number}`)
			.then((res) => {
				setSurah(res.data.data);
				console.log(res.data.data);
			})
			.catch((error) => console.log(error));
	};

	const getTranslation = () => {
		axios
			.get(
				`https://api.alquran.cloud/v1/surah/${number}/editions/uz.sodik,ru.kuliev`,
			)
			.then((res) => {
				console.log(res.data.data);
				setTranslation(res.data.data);
			})
			.catch((error) => console.log(error));
	};
	useEffect(() => {
		getSurah();
		getTranslation();
	}, []);

	return (
		<div className='surah__page'>
			{surah ? (
				<div>
					<div className='surah_header'>
						<button className='back__button' onClick={() => navigate(-1)}>
							<img src={back} alt='back button' />
						</button>
						<p className='surah__title'>{surah.englishName}</p>
					</div>
					<div className='surah__img'>
						<div className='surah__img__content'>
							<h2 className='surah__img__title'>{surah.englishName}</h2>
							<p className='surah__img__en'>{surah.englishNameTranslation}</p>
							<span className='line'></span>
							<p className=' surah__img__subtitle '>
								{surah.revelationType} • {surah.numberOfAyahs} oyat
							</p>
							<img className='bismillah' src={bismillah} alt='bismillah' />
						</div>
					</div>
					<div>
						{surah?.ayahs?.map((el) => (
							<div key={el.number}>
								<div className='ayah__bar'>
									<div className='bar__number'>
										<p className='bar__text'>{el.numberInSurah}</p>
									</div>
									<div
										style={{
											width: '60px',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'space-between',
										}}>
										<button
											className='bar__copy__button'
											onClick={() => {
												clipboardCopy(el.text);
											}}>
											<img src={play} alt='playbutton' width={'15px'} />
										</button>
										<button
											className='bar__copy__button'
											onClick={() => {
												clipboardCopy(el.text);
											}}>
											<img src={copy} alt='playbutton' width={'20px'} />
										</button>
									</div>
								</div>
								<p className='bar__ar'>{el.text}</p>
							</div>
						))}
					</div>
				</div>
			) : (
				''
			)}
		</div>
	);
};
