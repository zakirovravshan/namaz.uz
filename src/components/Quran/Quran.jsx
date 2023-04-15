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
			<Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
				<div className='tab__list'>
					<TabList>
						<Tab classID=''>QURAN</Tab>
						<Tab classID=''>UZ tarjima</Tab>
						<Tab classID=''>RU tarjima</Tab>
					</TabList>
				</div>
				<div className='tab__panel'>
					<TabPanel classID='tabs'>
						{' '}
						<p>{quran[0]?.text}</p>
					</TabPanel>
					<TabPanel classID='tabs'>
						<p>{quran[1]?.text}</p>
					</TabPanel>
					<TabPanel classID='tabs'>
						<p>{quran[2]?.text}</p>
					</TabPanel>
				</div>
			</Tabs>
		</div>
	);
};
