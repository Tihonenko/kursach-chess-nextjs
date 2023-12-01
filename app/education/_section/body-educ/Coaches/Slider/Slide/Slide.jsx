import Image from 'next/image';
import React from 'react';

const Slide = ({ item }) => {
	return (
		<div className='grid place-items-center md:place-items-baseline'>
			<div className='overflow-hidden rounded-md'>
				<Image src={item.img} width={500} height={500} alt='coach' />
			</div>
		</div>
	);
};

export default Slide;
