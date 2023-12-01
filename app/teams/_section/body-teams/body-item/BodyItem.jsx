import Image from 'next/image';

import styles from '../body.module.scss';

const BodyItem = ({ item }) => {
	return (
		<div className={styles.content}>
			<div className={styles.img}>
				<Image src={item.img} width={250} height={250} alt='team-photo' />
			</div>
			<div className={styles.info}>
				<h4>{item.name}</h4>
				<p>{item.job || 'Rating: ' + item.rating}</p>
			</div>
		</div>
	);
};

export default BodyItem;
