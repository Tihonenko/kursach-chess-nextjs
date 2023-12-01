'use client';

import { useSelector } from 'react-redux';

import styles from '../body.module.scss';

import Carusel from './Slider/Carusel';

const Coaches = () => {
	const coach = useSelector((state) => state.teams.data.coach);

	return (
		<div className={styles.coaches}>
			<div className={styles.wrapper}>
				<div>
					<h2 className='heading-medium heading-animate text-mainColor'>
						What We Offer
					</h2>
					<p className='mt-10 text-lg text-white'>
						Our learning program includes various formats of classes and
						events. We offer individual sessions with experienced coaches,
						group lessons for different skill levels, thematic seminars on
						tactics and strategy, as well as masterclasses conducted by
						invited grandmasters and experts.
					</p>
				</div>
				<Carusel key={1} data={coach} />
			</div>
		</div>
	);
};

export default Coaches;
