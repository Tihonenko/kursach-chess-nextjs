'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

import { translate, translateHover } from '../anim';

const Body = ({ links, isHover, setIsHover }) => {
	const getChars = (word) => {
		let chars = [];

		word.split('').forEach((char, i) => {
			chars.push(
				<motion.span
					custom={[i * 0.02, (word.length - i) * 0.01]}
					variants={translate}
					initial='initial'
					animate='enter'
					exit='exit'
					key={char + i}
				>
					{char}
				</motion.span>,
			);
		});

		return chars;
	};

	return (
		<div className='grid grid-rows-6'>
			{links.map((link, idx) => {
				const { name, path } = link;
				return (
					<Link
						onMouseOver={() => setIsHover({ active: true, index: idx })}
						onMouseLeave={() => setIsHover({ active: false, index: idx })}
						className='relative h-full w-full overflow-hidden text-left font-main uppercase'
						key={idx}
						href={`/${path}`}
					>
						<motion.div
							variants={translateHover}
							initial='initial'
							animate={
								isHover.active && isHover.index === idx
									? 'enter'
									: 'exit'
							}
							exit='exit'
							className='absolute h-full w-full bg-green-400'
						/>
						<motion.p className='ml-5 mt-5 flex overflow-hidden text-4xl'>
							{getChars(name)}
						</motion.p>
					</Link>
				);
			})}
		</div>
	);
};

export default Body;
