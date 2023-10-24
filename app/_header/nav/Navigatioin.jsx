import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

import { height, translate, translateImg } from './anim';
import Body from './body/Body';
import styles from './nav.module.scss';

const navData = [
	{
		name: 'Home',
		path: '/',
	},
	{
		name: 'Plans',
		path: 'plans',
	},
	{
		name: 'About us',
		path: 'about',
	},
	{
		name: 'Teams',
		path: 'teams',
	},
	{
		name: 'Rules',
		path: 'rules',
	},
	{
		name: 'Registr.',
		path: 'registration',
	},
];

const burgerVariant = {
	hidden: {
		transform: 'translateY(-100%)',
		opacity: 1,
		transition: {
			type: 'spring',
			duration: 0.37,
			delay: 0.47,
			stiffness: 47,
		},
	},
	visible: {
		transform: 'translateY(-5%)',
		opacity: 1,
		transition: {
			type: 'spring',
			duration: 0.3,
			delay: 0.2,
			stiffness: 47,
		},
	},
	exit: {
		transform: 'translateY(-100%)',
		opacity: 0,
	},
};

const Navigation = () => {
	const [isHover, setIsHover] = useState({ active: false, index: 0 });

	return (
		<motion.nav
			variants={height}
			initial='initial'
			animate='enter'
			exit='exit'
			className={styles.nav}
		>
			<div className={styles.wrapper}>
				<div className={`md:container ${styles.container}`}>
					<Body
						links={navData}
						isHover={isHover}
						setIsHover={setIsHover}
					/>
					<div className='hidden overflow-hidden md:block'>
						<motion.div
							variants={translateImg}
							initial='initial'
							animate='enter'
							exit='exit'
						>
							<Image
								className='invert'
								src='/logo.png'
								width={500}
								height={500}
								alt='logo'
							/>
						</motion.div>
					</div>
				</div>
			</div>
		</motion.nav>
	);
};

export default Navigation;
