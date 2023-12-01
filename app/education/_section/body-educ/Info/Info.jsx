import Image from 'next/image';

import styles from '../body.module.scss';

const Info = () => {
	return (
		<div className={styles.info}>
			<div className={styles.wrapper}>
				<div className={styles.card}>
					<div>
						<h3 className='heading-medium heading-animate text-mainColor'>
							Learning Program at "Checkmate"
						</h3>
						<p className='mt-10 text-lg'>
							At the "Checkmate" chess club, we place great emphasis on
							education and developing chess-playing skills. Our learning
							program is designed for a wide range of participants - from
							beginners to experienced players. We aim to create a
							structured and engaging educational environment that
							promotes improvement in technical skills and strategic
							thinking.
						</p>
					</div>
					<div className={styles.image_club}>
						<Image
							src='/gallery/club-photo-3.jpg'
							width={500}
							height={700}
							alt='club'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Info;
