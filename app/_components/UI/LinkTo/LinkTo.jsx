import Link from 'next/link';

import styles from './linkto.module.scss';

const LinkTo = ({ children, href }) => {
	return (
		<Link href={href} className={styles.link_to}>
			<p>{children}</p>
		</Link>
	);
};

export default LinkTo;
