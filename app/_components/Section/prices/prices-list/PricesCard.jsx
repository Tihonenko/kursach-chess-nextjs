import Image from 'next/image';
import Link from 'next/link';

import { CheckIcon } from '@/components/Proxy/proxy-library';

import styles from './prices.module.scss';

const PricesCard = ({ card }) => {
	return (
		<div className={styles.content}>
			<div>
				<p>{card.subtitle}</p>
				<h3 className='heading-medium mt-5 text-mainColor'>
					${card.price}
				</h3>
			</div>
			<div className={styles.list}>
				<ul>
					{card.priority.map((item, idx) => (
						<li key={idx}>
							<CheckIcon boxSize={10} className='mr-2' />
							{item}
						</li>
					))}
				</ul>
			</div>
			<Image
				src={card.icons}
				width={50}
				height={50}
				alt='icon'
				className={styles.icon}
			/>
			<div className={styles.link_wrapper}>
				<Link href='/registration' className='w-full'>
					<p>Get Plan</p>
				</Link>
			</div>
		</div>
	);
};

export default PricesCard;
