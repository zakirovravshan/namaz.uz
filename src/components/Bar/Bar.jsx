import React from 'react';
import './Bar.css';
import { NavLink } from 'react-router-dom';
import tasbeh from '../../assets/icons/tasbeh.svg';
import pray from '../../assets/icons/pray.svg';
import other from '../../assets/icons/other.svg';
import app from '../../assets/icons/quran.svg';

export const Bar = () => {
	return (
		<div className='bar'>
			<ul className='bar__list'>
				<li className='bar__item'>
					<NavLink
						to='/'
						className={({ isActive, isPending }) =>
							isPending ? 'link' : isActive ? 'activebar' : 'link'
						}>
						<img className='bar__img' src={pray} alt='tasbeh' width={'50px'} />{' '}
					</NavLink>
				</li>
				<li className='bar__item'>
					<NavLink
						to='/settings'
						className={({ isActive, isPending }) =>
							isPending ? 'link' : isActive ? 'activebar' : 'link'
						}>
						<img
							className='bar__img'
							src={tasbeh}
							alt='pray icon'
							width={'50px'}
						/>{' '}
					</NavLink>
				</li>
				<li className='bar__item'>
					<NavLink
						to='/quran'
						className={({ isActive, isPending }) =>
							isPending ? 'link' : isActive ? 'activebar' : 'link'
						}>
						<img
							className='bar__img'
							src={app}
							alt='application'
							width={'35px'}
						/>{' '}
					</NavLink>
				</li>
				<li className='bar__item'>
					<NavLink
						to='/qibla'
						className={({ isActive, isPending }) =>
							isPending ? 'link' : isActive ? 'activebar' : 'link'
						}>
						<img className='bar__img' src={other} alt='qibla' width={'50px'} />{' '}
					</NavLink>
				</li>
			</ul>
		</div>
	);
};
