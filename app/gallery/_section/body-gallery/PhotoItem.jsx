import Image from 'next/image';

import styles from './body.module.scss';

const PhotoItem = ({ data }) => {
	return (
		<div className='transition-settings overflow-hidden rounded-lg hover:scale-105'>
			<Image
				src={data.img}
				width={500}
				height={500}
				alt='photo'
				className='h-full w-full bg-cover object-cover'
			/>
		</div>
	);
};

export default PhotoItem;
