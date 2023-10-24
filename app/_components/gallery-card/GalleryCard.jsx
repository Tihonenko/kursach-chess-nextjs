import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { ArrowForwardIcon } from '@/components/Proxy/proxy-library';

import { arrowBgTranslate, arrowTranslate } from './anim';

const GalleryCard = ({ card, isActive, setIsActive, index }) => {
	return (
		<div
			onMouseOver={() => setIsActive({ active: true, index: index })}
			onMouseLeave={() => setIsActive({ active: false, index: index })}
		>
			<div className='relative grid overflow-hidden rounded-2xl md:h-[500px]'>
				<Image
					src={card.img}
					width={1000}
					height={1000}
					alt='gallery-img'
					className='h-full w-full place-self-center bg-cover object-cover'
				/>
				<motion.div
					variants={arrowBgTranslate}
					initial='initial'
					animate={
						isActive.active && isActive.index === index
							? 'enter'
							: 'leave'
					}
					className='absolute bottom-0 right-0 grid h-[100px] w-[100px] overflow-hidden bg-lightBlack bg-opacity-40'
				>
					<Link href={card.img} className='place-self-center p-10'>
						<motion.div
							initial='initial'
							variants={arrowTranslate}
							animate={
								isActive.active && isActive.index === index
									? 'enter'
									: 'leave'
							}
						>
							<ArrowForwardIcon color='white' boxSize={30} />
						</motion.div>
					</Link>
				</motion.div>
			</div>
		</div>
	);
};

export default GalleryCard;
