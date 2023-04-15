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
import { Toaster, toast } from 'react-hot-toast';

const Settings = () => {
	var [counter, setCounter] = useState(localStorage.getItem('counter'));
	var [counter2, setCounter2] = useState(localStorage.getItem('counter2'));
	var [counter3, setCounter3] = useState(localStorage.getItem('counter3'));
	var [counter4, setCounter4] = useState(localStorage.getItem('counter4'));
	var [counter5, setCounter5] = useState(localStorage.getItem('counter5'));

	var handleCount1 = () => {
		if ('vibrate' in navigator) {
			// Trigger the vibration for 200ms
			navigator.vibrate(400);
		} else {
			console.log('Vibration not supported in this device.');
		}
		if (counter == 0) {
			toast.success('Subhanalloh 33taa', {
				duration: 8000,
			});
		}
		if (counter == 32) {
			toast.success('Alhamdulillah 33ta ❗️', {
				duration: 8000,
			});
		}
		if (counter == 65) {
			toast.success('Allohu Akbar 33ta ❗️', {
				duration: 8000,
			});
		}

		localStorage.setItem('counter', counter);
		var number1 = JSON.parse(localStorage.getItem('counter'));
		var sum1 = number1 + 1;
		localStorage.setItem('counter', sum1);
		setCounter(localStorage.getItem('counter'));
	};
	var handleCount2 = () => {
		if (counter2 == 99) {
			toast.success('Ma sha Alloh!');
		}

		localStorage.setItem('counter2', counter2);
		var number2 = JSON.parse(localStorage.getItem('counter2'));
		var sum2 = number2 + 1;
		localStorage.setItem('counter2', sum2);
		setCounter2(localStorage.getItem('counter2'));
	};
	var handleCount3 = () => {
		if (counter2 == 99) {
			toast.success('Ma sha Alloh!');
		}
		localStorage.setItem('counter3', counter3);
		var number3 = JSON.parse(localStorage.getItem('counter3'));
		var sum3 = number3 + 1;
		localStorage.setItem('counter3', sum3);
		setCounter3(localStorage.getItem('counter3'));
	};
	var handleCount4 = () => {
		if (counter2 == 99) {
			toast.success('Ma sha Alloh!');
		}
		localStorage.setItem('counter4', counter4);
		var number4 = JSON.parse(localStorage.getItem('counter4'));
		var sum4 = number4 + 1;
		localStorage.setItem('counter4', sum4);
		setCounter4(localStorage.getItem('counter4'));
	};
	// var handleCount5 = () => {
	// 	if (counter5 == 32) {
	// 		toast.success('Ma sha Alloh!');
	// 	}
	// 	if (counter5 == 33 || counter5 == 34) {
	// 		toast.error('33 tadan kopaytirib yubordingiz!');
	// 	}
	// 	localStorage.setItem('counter5', counter5);
	// 	var number5 = JSON.parse(localStorage.getItem('counter5'));
	// 	var sum5 = number5 + 1;
	// 	localStorage.setItem('counter5', sum5);
	// 	setCounter5(localStorage.getItem('counter5'));
	// };

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
		arrows: false,
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
		<div className='tasbeh__main'>
			<button
				onClick={() => {
					setCounter(0);
					localStorage.setItem('counter', 0);
					setCounter2(0);
					localStorage.setItem('counter2', 0);
					setCounter3(0);
					localStorage.setItem('counter3', 0);
					setCounter4(0);
					localStorage.setItem('counter4', 0);
				}}
				className='reset__button'>
				Reset All
				<img src={redo} alt='redo' width={'20px'} />
			</button>

			<Slider className='big_box' {...settings}>
				<div className='box'>
					<div className='wrapper'>
						<p className='tasbeh__display'>{counter}</p>
						<motion.button
							whileHover={{ scale: 1 }}
							whileTap={{ scale: 0.98 }}
							transition={{ type: 'spring', stiffness: 400, damping: 17 }}
							className='tasbeh__button'
							onClick={() => handleCount1()}>
							<p className='ar'>سُبْحَانَ اللهِ</p>
							<p className=' ar_uz '>Subhanalloh </p>

							<div className='tasbeh__33'>
								<p className='ar'> ٱلْحَمْدُ لِلَّٰهِ</p>
								<p className=' ar_uz'>Alhamdulillah </p>
							</div>

							<p className='ar'> الله أكب</p>
							<p className=' ar_uz'>Allahu Akbar </p>
						</motion.button>
					</div>
				</div>
				<div className='box'>
					<div className='wrapper'>
						<p className='tasbeh__display'>{counter2}</p>
						<motion.button
							whileHover={{ scale: 1 }}
							whileTap={{ scale: 0.98 }}
							transition={{ type: 'spring', stiffness: 400, damping: 17 }}
							className='tasbeh__button'
							onClick={() => handleCount2()}>
							<p className='ar_uz'>
								Allahumma Salli Ala Muhammad Waala Ali Muhammad{' '}
							</p>
							<p className='ar'>
								ٱللَّٰهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ
							</p>
							<p className='uz'>
								Allohim! Payg‘ambarimiz Muhammad Mustafoga beadad salot va salom
								bo‘lsin
							</p>
						</motion.button>
					</div>
				</div>
				<div className='box'>
					<div className='wrapper'>
						<p className='tasbeh__display'>{counter3}</p>
						<motion.button
							whileHover={{ scale: 1 }}
							whileTap={{ scale: 0.98 }}
							transition={{ type: 'spring', stiffness: 400, damping: 17 }}
							className='tasbeh__button'
							onClick={() => handleCount3()}>
							<p className='ar_uz'>
								Subhanallohi va bihamdihi subhanallohil aziym{' '}
							</p>
							<p className='ar'>
								سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ العَظِيم
							</p>
							<p className='uz'>
								Allohni poklab yod etaman va u zotga hamd aytaman
							</p>
						</motion.button>
					</div>
				</div>
				<div className='box'>
					<div className='wrapper'>
						<p className='tasbeh__display'>{counter4}</p>
						<motion.button
							whileHover={{ scale: 1 }}
							whileTap={{ scale: 0.98 }}
							transition={{ type: 'spring', stiffness: 400, damping: 17 }}
							className='tasbeh__button'
							onClick={() => handleCount4()}>
							<p className='ar_uz'>
								La ilaha illa anta subẍanaka inni kuntu mina-ӟ-alimin
							</p>
							<p className='ar'>
								لاَّ إِلَـهَ إِلاَّ أَنتَ سُبْحَـنَكَ إِنِّى كُنتُ مِنَ
								الظَّـلِمِينَ
							</p>
							<p className='uz'>
								Sendan o‘zga ibodatga loyiq iloh yo‘q, sen har qanday
								kamchilikdan poksan, albatta, men zolimlardan edim
							</p>
						</motion.button>
					</div>
				</div>
			</Slider>
			<div>
				<Toaster />
			</div>
		</div>
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
