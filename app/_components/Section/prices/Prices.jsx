import Link from 'next/link';
import React from 'react';

import PricesList from './prices-list/PricesList';

const Prices = () => {
	return (
		<section className='container mt-44'>
			<div>
				<Link href='/plans' className='heading-link-medium'>
					Prices
				</Link>
			</div>
			<PricesList />
		</section>
	);
};

export default Prices;
