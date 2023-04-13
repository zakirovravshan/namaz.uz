import React from 'react';
import './Bar.css';
import { Link } from 'react-router-dom';

export const Bar = () => {
	return (
		<div className='bar'>
			<ul>
				<li>
					<Link to="/">  </Link>
				</li>
			</ul>
		</div>
	);
};
