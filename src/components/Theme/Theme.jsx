import React, { useEffect, useState } from 'react';
import './Theme.css';

export const Theme = () => {
	const [isDark, setIsDark] = useState(
		localStorage.getItem('theme') === 'dark',
	);
	function toggleTheme() {
		const newTheme = isDark ? 'light' : 'dark';
		setIsDark(!isDark);
		localStorage.setItem('theme', newTheme);
	}
	useEffect(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme === 'dark') {
			setIsDark(true);
		} else {
			setIsDark(false);
		}
	}, []);

	return (
		<div
			style={
				isDark
					? { width: '200px', height: '200px', backgroundColor: 'teal' , borderRadius:"16px" }
					: { backgroundColor: 'transparent' , borderRadius:"16px" }
			}>
			<label className='switch'>
				<input
					type='checkbox'
					onChange={toggleTheme}
					defaultChecked={localStorage.getItem('theme') === 'dark'}
				/>
				<span className='slider' />
			</label>
		</div>
	);
};
