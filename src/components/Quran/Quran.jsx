import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Quran.css';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export const Quran = () => {
	const [selectedTab, setSelectedTab] = React.useState(0);
	const changeTab = (updatedTab) => {
		setSelectedTab(updatedTab.label);
	};
	const [quran, setQuran] = useState({});
	const [tabIndex, setTabIndex] = useState(0);
	const getQuran = () => {
		axios
			.get(
				'https://api.alquran.cloud/v1/ayah/262/editions/quran-madina,uz.sodik,ru.kuliev',
			)
			.then((res) => {
				// console.log(res.data.data);
				setQuran(res.data.data);
			})
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		getQuran();
	}, []);
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
		</div>
	);
};
