import React from 'react';

import { aboutData } from './aboutData';
import BodyItem from './body-item/BodyItem';
import styles from './body.module.scss';

const BodyAbout = () => {
	return (
		<section className={styles.wrapper}>
			<div>
				{aboutData.map((obj, idx) => (
					<BodyItem
						key={idx}
						description={obj.description}
						title={obj.title}
					/>
				))}
			</div>
			<p className='mt-20 text-center text-white/70 underline'>
				checkmate.info@gmail.com
			</p>
		</section>
	);
};

export default BodyAbout;
