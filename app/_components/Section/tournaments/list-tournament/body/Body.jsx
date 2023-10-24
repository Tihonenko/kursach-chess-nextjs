import Link from 'next/link';

import { ArrowForwardIcon } from '@/components/Proxy/proxy-library';

import styles from './body.module.scss';

const Body = ({ info }) => {
	return (
		<div className={styles.body}>
			<Link href={info?.href} className={styles.content}>
				<p>
					{info?.date} {info?.date ? ',' : ''} <span>{info?.title}</span>
				</p>
				<div className='my-auto place-self-end'>
					<ArrowForwardIcon className={styles.icon} boxSize={25} />
				</div>
			</Link>
		</div>
	);
};

export default Body;
