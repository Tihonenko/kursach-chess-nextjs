import React from 'react';

const BodyItem = ({ title, description }) => {
	return (
		<div className='mt-20'>
			<h2 className='heading-medium heading-animate text-mainColor'>
				{title}
			</h2>
			<div className='mt-10'>
				<p className='text-lg'>{description}</p>
			</div>
		</div>
	);
};

export default BodyItem;
