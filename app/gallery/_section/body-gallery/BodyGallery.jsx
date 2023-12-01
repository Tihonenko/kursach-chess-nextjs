'use client';

import { useSelector } from 'react-redux';

import PhotoItem from './PhotoItem';
import styles from './body.module.scss';

const BodyGallery = () => {
	const photo = useSelector((state) => state.gallery.data.gallery);

	return (
		<section className='container mt-20'>
			<div className='grid gap-10 md:grid-cols-2'>
				{photo.map((item, idx) => (
					<PhotoItem key={idx} data={item} />
				))}
			</div>
		</section>
	);
};

export default BodyGallery;
