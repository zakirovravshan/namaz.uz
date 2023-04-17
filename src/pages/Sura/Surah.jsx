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
import { Toaster, toast } from 'react-hot-toast';
import { MdOutlineLanguage } from 'react-icons/md';
import ReactModal from 'react-modal';
import { Button } from '@mui/material';

export const Surah = () => {
	const { number } = useParams();
	const [modal, setModal] = useState(false);
	const [surah, setSurah] = useState({});
	const [translation, setTranslation] = useState({});
	const navigate = useNavigate();

	const getSurah = () => {
		axios
			.get(`https://api.alquran.cloud/v1/surah/${number}`)
			.then((res) => {
				setSurah(res.data.data);
			})
			.catch((error) => console.log(error));
	};
	const handleTranslate = (number) => {
		setModal(true);
		getTranslation(number);
	};
	const getTranslation = (numberayah) => {
		axios
			.get(`https://api.alquran.cloud/v1/ayah/${numberayah}/uz.sodik`)
			.then((res) => {
	
				setTranslation(res.data.data);
			})
			.catch((error) => console.log(error));
	};
	useEffect(() => {
		getSurah();
		
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
											width: '100px',
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
												toast.success('Copied');
												clipboardCopy(el.text);
											}}>
											<img src={copy} alt='playbutton' width={'20px'} />
										</button>
										<button
											className='bar__copy__button'
											onClick={() => handleTranslate(el.number)}>
											<MdOutlineLanguage size={'23px'} color='#03AA77' />
										</button>
									</div>
									<ReactModal
										onRequestClose={() => setModal(false)}
										style={{
											overlay: {
												position: 'fixed',
												zIndex: 1020,
												top: 0,
												left: 0,
												width: '100vw',
												height: '100vh',
												background: 'rgba(255, 255, 255, 0.008)',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
											},
											content: {
												background: 'white',
												width: '300px',
												maxWidth: '32rem',
												maxHeight: 'calc(100vh - 2rem)',
												overflowY: 'auto',
												position: 'abdolute',
												border: '1px solid #ccc',
												borderRadius: '20px',
											},
										}}
										isOpen={modal}>
										<div
											className=''
											style={{
												overflow: 'auto',
												height: '300px',
												padding: '10px',
											}}>
											<div
												style={{
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'space-between',
												}}>
												<h3 className='text-sm'>
													{translation?.surah?.englishName} -  
													{translation?.numberInSurah} oyat
												</h3>
												<Button
													style={{
														maxWidth: '30px',
														maxHeight: '30px',
														minWidth: '30px',
														minHeight: '30px',
													}}
													color='error'
													onClick={() => setModal(false)}>
													x
												</Button>
											</div>
											<div>
												<p style={{ textAlign: 'justify' }}>
													{translation?.text}
												</p>
											</div>
										</div>
									</ReactModal>
								</div>
								<p className='bar__ar'>{el.text}</p>
							</div>
						))}
					</div>
				</div>
			) : (
				''
			)}
			<Toaster />
		</div>
	);
};
