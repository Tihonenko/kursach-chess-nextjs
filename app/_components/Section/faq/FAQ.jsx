import React from 'react';

import Body from './body/Body';

const FAQ = () => {
	return (
		<section className='container mt-44' id='faq'>
			<div>
				<div>
					<h3 className='heading-medium heading-animate text-mainColor'>
						Frequently Asked Questions
					</h3>
				</div>
				<Body />
			</div>
		</section>
	);
};

export default FAQ;
