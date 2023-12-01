import Image from 'next/image';
import React from 'react';

const ListItem = ({ data }) => {
	return (
		<div className='mt-20'>
			<div className='grid gap-10 md:grid-cols-2'>
				<div>
					<Image src={data.img} width={500} height={500} alt='poster' />
				</div>
				<div className='text-white'>
					<h4 className='heading-medium text-secondaryColor'>
						{data.title}
					</h4>
					<p className='mt-5 text-lg text-descColor'>{data?.date}</p>
				</div>
			</div>
		</div>
	);
};

export default ListItem;
