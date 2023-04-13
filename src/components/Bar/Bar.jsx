import React from 'react';
import './Bar.css';
import { Link } from 'react-router-dom';
import tasbeh from '../../assets/icons/tasbeh.png';

export const Bar = () => {
	return (
		<div className='bar'>
			<ul className='bar__list'>
				<li className='bar__item'>
					<Link to='/'>
						{' '}
						<img src={tasbeh} alt='tasbeh' width={'50px'} />{' '}
					</Link>
				</li>
				<li className='bar__item'>
					<Link to='/'>
						{' '}
						<img src={tasbeh} alt='tasbeh' width={'50px'} />{' '}
					</Link>
				</li>
				<li className='bar__item'>
					<Link to='/'>
						{' '}
						<img src={tasbeh} alt='tasbeh' width={'50px'} />{' '}
					</Link>
				</li>
				<li className='bar__item'>
					<Link to='/'>
						{' '}
						<img src={tasbeh} alt='tasbeh' width={'50px'} />{' '}
					</Link>
				</li>
			</ul>
		</div>
	);
};
