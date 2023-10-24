'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import GalleryCard from '@/components/gallery-card/GalleryCard';

import LinkTo from '@/UI/LinkTo/LinkTo';

import styles from './gallery.module.scss';
import { imagePagin } from '@/redux/slices/GallerySlice';

const Gallery = () => {
	const dispatch = useDispatch();
	const [isActive, setIsActive] = useState({ active: false, index: 0 });

	const photos = [...useSelector((state) => state.gallery.imagePaginations)];

	useEffect(() => {
		dispatch(imagePagin());
	}, []);

	return (
		<section className={`container ${styles.wrapper}`}>
			<div>
				<Link href='/' className='heading-link-medium'>
					Gallery
				</Link>
			</div>
			<div className={styles.content}>
				{photos.map((card, idx) => (
					<GalleryCard
						isActive={isActive}
						setIsActive={setIsActive}
						key={idx}
						index={idx}
						card={card}
					/>
				))}
			</div>
			<div className='mt-10 grid place-content-center'>
				<LinkTo href='/gallery'>To Gallery</LinkTo>
			</div>
		</section>
	);
};

export default Gallery;
