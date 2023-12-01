'use client';

import { useSelector } from 'react-redux';

import BodyItem from './body-item/BodyItem';
import styles from './body.module.scss';

const BodyTeams = () => {
	const teams = useSelector((state) => state.teams.data.teams);
	const coach = useSelector((state) => state.teams.data.coach);

	console.log('teams', teams);

	return (
		<section className='container'>
			<div className={styles.wrapper}>
				{teams.map((item, idx) => (
					<BodyItem key={idx} item={item} />
				))}
			</div>
			<div className='mt-14'>
				<div>
					<h3 className='heading-medium heading-animate text-mainColor'>
						Coaches
					</h3>
				</div>
				<div className={styles.wrapper}>
					{coach.map((item, idx) => (
						<BodyItem item={item} key={idx} />
					))}
				</div>
			</div>
		</section>
	);
};

export default BodyTeams;
