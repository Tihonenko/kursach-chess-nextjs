import React from 'react';

import PricesCard from './PricesCard';
import styles from './prices.module.scss';

const data = [
	{
		subtitle: 'Enthusiast',
		price: '4.99/MO',
		priority: [
			'Unlimited Access',
			'Detailed Stats',
			'Priority Support',
			'Exclusive Tips',
		],
		icons: '/icons/party-popper.png',
	},
	{
		subtitle: 'Competitor',
		price: '9.99/MO',
		priority: [
			'All Enthusiast',
			'Advanced Analytics',
			'Personal Coach',
			'VIP Invitations',
		],
		icons: '/icons/cup.png',
	},
];

const PricesList = () => {
	return (
		<div className={styles.wrapper}>
			{data.map((card, idx) => (
				<PricesCard key={idx} card={card} />
			))}
		</div>
	);
};

export default PricesList;
