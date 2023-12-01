import Image from 'next/image';
import React from 'react';

import styles from '../body.module.scss';

const Greating = () => {
	return (
		<div className={styles.greating}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<h4 className={`heading-medium ${styles.description}`}>
						Unveil Your Inner Chessmaster
					</h4>
					<p className={styles.about}>
						Welcome to the grandeur and brilliance of the royal game. Feel
						the wooden pieces slip smoothly through your fingers as you
						plot your path to victory. It’s not just about learning the
						moves. Drown in the richness of strategies that shape the
						game.
					</p>
				</div>
				<div className='transition-settings absolute left-0 top-0 h-full w-full bg-black/30 hover:opacity-50' />
			</div>
			{/* <div className='absolute left-0 top-0 -z-50 h-full w-full'>
				<Image
					src='/gallery/chess.jpg'
					width={1080}
					height={1920}
					alt='bg'
				/>
			</div> */}
		</div>
	);
};

export default Greating;
