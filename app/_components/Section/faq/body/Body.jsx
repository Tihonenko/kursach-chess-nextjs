import React from 'react';

import styles from './body.module.scss';

const Body = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<h3 className={styles.title}>What is a chess club?</h3>
				<p className={styles.text}>
					A chess club is a place where enthusiasts and professionals
					gather to play chess, receive training, practice, and compete.
				</p>
			</div>
			<div className={styles.content}>
				<h3 className={styles.title}>How can I join your club?</h3>
				<p className={styles.text}>
					Joining our club is straightforward. First, get in touch with us
					through the contact form on our website or by phone. We will
					provide you with all the necessary information about membership
					and entry conditions.
				</p>
			</div>
			<div className={styles.content}>
				<h3 className={styles.title}>Who can join your club?</h3>
				<p className={styles.text}>
					Our club is open to all ages and skill levels. We have groups for
					beginners, enthusiasts, and experienced chess players.
				</p>
			</div>
			<div className={styles.content}>
				<h3 className={styles.title}>Can I rent chess sets at the club?</h3>
				<p className={styles.text}>
					Yes, we provide chess sets for rent on-site. You can also bring
					your own chess sets.
				</p>
			</div>
		</div>
	);
};

export default Body;
