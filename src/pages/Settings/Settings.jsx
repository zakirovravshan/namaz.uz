import React from 'react';
import './Settings.css';
import { useState } from 'react';
import redo from '../../assets/icons/redo.png';
import { motion } from 'framer-motion';
import ReactModal from 'react-modal';
import { Button } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Settings = () => {
	const [modal, setModal] = useState(false);
	var [counter, setCounter] = useState(localStorage.getItem('counter'));

	var handleCount = () => {
		localStorage.setItem('counter', counter);
		var number = JSON.parse(localStorage.getItem('counter'));
		var sum = number + 1;
		localStorage.setItem('counter', sum);
		setCounter(localStorage.getItem('counter'));
	};
	var settings = {
		centerMode: true,
		centerPadding: '80px',
		slidesToShow: 1,
	};

	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToScroll: 1,
		centerMode: true,
		centerMode: true,
		centerPadding: '80px',
		slidesToShow: 1,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1,
				},
			},
		],
	};
	return (
		<Slider className='big_box' {...settings}>
			<div className='box'>
				<div className='wrapper'>
					<p className='tasbeh__display'>{counter}</p>
					<motion.button
						whileHover={{ scale: 1 }}
						whileTap={{ scale: 0.98 }}
						transition={{ type: 'spring', stiffness: 400, damping: 17 }}
						className='tasbeh__button'
						onClick={() => handleCount()}>
						<button
							onClick={() => {
								setCounter(0);
								localStorage.setItem('counter', 0);
							}}
							className='reset__button'>
							<img src={redo} alt='redo' width={'20px'} />
						</button>
						Sanoq uchun shu yerni bosing
					</motion.button>
				</div>
			</div>
			<div className='box'>
				<div className='wrapper'>
					<p className='tasbeh__display'>{counter}</p>
					<motion.button
						whileHover={{ scale: 1 }}
						whileTap={{ scale: 0.98 }}
						transition={{ type: 'spring', stiffness: 400, damping: 17 }}
						className='tasbeh__button'
						onClick={() => handleCount()}>
						<button
							onClick={() => {
								setCounter(0);
								localStorage.setItem('counter', 0);
							}}
							className='reset__button'>
							<img src={redo} alt='redo' width={'20px'} />
						</button>
						ٱللَّٰهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ
					</motion.button>
					<button
						onClick={() => {
							setCounter(0);
							localStorage.setItem('counter', 0);
						}}
						className='reset__button'>
						Reset All <img src={redo} alt='redo' width={'20px'} />
					</button>
				</div>
			</div>
			<div className='box'>
				<div className='wrapper'>
					<p className='tasbeh__display'>{counter}</p>
					<motion.button
						whileHover={{ scale: 1 }}
						whileTap={{ scale: 0.98 }}
						transition={{ type: 'spring', stiffness: 400, damping: 17 }}
						className='tasbeh__button'
						onClick={() => handleCount()}>
						<button
							onClick={() => {
								setCounter(0);
								localStorage.setItem('counter', 0);
							}}
							className='reset__button'>
							<img src={redo} alt='redo' width={'20px'} />
						</button>
						Sanoq uchun shu yerni bosing
					</motion.button>
				</div>
			</div>
		</Slider>
	);
	// <ReactModal
	// 	onRequestClose={() => setModal(false)}
	// 	style={{
	// 		overlay: {
	// 			position: 'fixed',
	// 			zIndex: 1020,
	// 			top: 0,
	// 			left: 0,
	// 			width: '100vw',
	// 			height: '100vh',
	// 			background: 'rgba(255, 255, 255, 0.3)',
	// 			display: 'flex',
	// 			alignItems: 'center',
	// 			justifyContent: 'center',
	// 		},
	// 		content: {
	// 			background: 'white',
	// 			width: '300px',
	// 			maxWidth: '32rem',
	// 			maxHeight: 'calc(100vh - 2rem)',
	// 			overflowY: 'auto',
	// 			position: 'abdolute',
	// 			border: '1px solid #ccc',
	// 			borderRadius: '20px',

	// 		},
	// 	}}
	// 	isOpen={modal}>
	// 	<div className=''>
	// 		<div style={{display:"flex" , alignItems:"center",justifyContent:"space-between"}}>
	// 			<h3 className='text-sm'>Zikrlar : </h3>
	// 			<Button
	// 				style={{
	// 					maxWidth: '30px',
	// 					maxHeight: '30px',
	// 					minWidth: '30px',
	// 					minHeight: '30px',
	// 				}}
	// 				color='error'
	// 				onClick={() => setModal(false)}>
	// 				x
	// 			</Button>
	// 		</div>
	// 		<div >
	// 				<ul>
	// 					<li>

	// 					</li>
	// 				</ul>
	// 		</div>
	// 	</div>
	// </ReactModal>
};

export default Settings;
