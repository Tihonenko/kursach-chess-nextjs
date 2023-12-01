import Link from 'next/link';
import React from 'react';

import PricesList from './prices-list/PricesList';

const Prices = () => {
	return (
		<section className='container mt-44' id='price'>
			<div>
				<Link
					href='/registration'
					className='heading-link-medium heading-animate'
				>
					Prices
				</Link>
			</div>
			<PricesList />
		</section>
	);
};

export default Prices;
