'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import styles from './header.module.scss';
import Navigation from './nav/Navigatioin';

const Header = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<header
			className={`bg-lightBlack fixed left-0 top-0 z-10 w-full py-3 text-white`}
		>
			<div className='container grid grid-cols-4 place-items-center'>
				<div className='hidden md:block'>
					<Link
						href='/registration'
						className='text-left font-main text-sm font-normal md:text-xl'
					>
						Registration
					</Link>
				</div>
				<div className='col-start-1 md:col-span-2'>
					<Image
						src='/logo.png'
						width={70}
						height={70}
						alt='logo'
						className={`invert transition-all duration-500 ease-out ${
							open ? ' md:opacity-0' : 'delay-700'
						}`}
					/>
				</div>
				<div className='col-start-4'>
					<button className='h-[20px] w-[30px]' onClick={handleClick}>
						<div
							className={`${styles.burger} ${
								open ? `${styles.burgerActive} color-white` : ''
							}`}
						></div>
					</button>
				</div>
			</div>
			<AnimatePresence>{open && <Navigation />}</AnimatePresence>
		</header>
	);
};

export default Header;
