import React from 'react';
import './Bar.css';
import { NavLink } from 'react-router-dom';
import tasbeh from '../../assets/icons/tasbih.png';
import pray from '../../assets/icons/time.png';
import qibla from '../../assets/icons/qibla.png';
import app from '../../assets/icons/application.png';

export const Bar = () => {
	return (
		<div className='bar'>
			<ul className='bar__list'>
				<li className='bar__item'>
					<NavLink
						to='/'
						className={({ isActive, isPending }) =>
							isPending ? 'link' : isActive ? 'activebar' : "link"
						}
						
						>
						<img src={pray} alt='tasbeh' width={'50px'} />{' '}
					</NavLink>
				</li>
				<li className='bar__item'>
				<NavLink
						to='/settings'
						className={({ isActive, isPending }) =>
							isPending ? 'link' : isActive ? 'activebar' : "link"
						}
						
						>
						<img src={tasbeh} alt='pray icon' width={'50px'} />{' '}
					</NavLink>
				</li>
				<li className='bar__item'>
				<NavLink
						to='/s'
						className={({ isActive, isPending }) =>
							isPending ? 'link' : isActive ? 'activebar' : "link"
						}
						
						>
						<img src={qibla} alt='qibla' width={'50px'} />{' '}
					</NavLink>
				</li>
				<li className='bar__item'>
				<NavLink
						to='/b'
						className={({ isActive, isPending }) =>
							isPending ? 'link' : isActive ? 'activebar' : "link"
						}
						
						>
						<img src={app} alt='application' width={'50px'} />{' '}
					</NavLink>
				</li>
			</ul>
		</div>
	);
};
