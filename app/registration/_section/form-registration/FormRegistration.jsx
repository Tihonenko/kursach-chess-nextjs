'use client';

import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

import CardPay from './CardPay';
import InputForm from '@/app/_components/UI/InputForm/InputForm';

const FormRegistration = () => {
	const [isPlan, setIsPlan] = useState('');
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (isPlan === 'Enthusiast' || isPlan === 'Competitor') {
			setIsOpen(true);
		} else {
			setIsOpen(false);
		}
	}, [isPlan]);

	return (
		<section className='container my-64'>
			<div className='grid'>
				<div className='w-auto place-self-center rounded-2xl bg-black bg-opacity-30 px-5 pb-20 pt-10 text-heroColor md:px-20'>
					<div>
						<h3 className='heading-medium text-mainColor'>
							Registration
						</h3>
					</div>
					<form className='grid place-items-center gap-6 pt-10'>
						<InputForm
							id='name'
							htmlFor='name'
							type='text'
							label='Name:'
						/>
						<InputForm
							id='secondName'
							htmlFor='secondName'
							type='text'
							label='Second Name:'
						/>

						<InputForm
							id='email'
							htmlFor='email'
							type='email'
							label='Email:'
						/>
						<InputForm
							id='phone'
							htmlFor='block'
							type='tel'
							label='Phone number:'
						/>
						<div className='w-full'>
							<p className='ml-3 text-lg text-descColor'>Select plan:</p>
							<select
								onChange={(e) => setIsPlan(e.target.value)}
								name='plan'
								id='plan'
								className='bg-black pl-3 pt-2'
							>
								<option value=''>None</option>
								<option value='Enthusiast'>Enthusiast 🎉 4.99$</option>
								<option value='Competitor'>Competitor 🏆 9.99$</option>
							</select>
						</div>
						<div className='w-full'>
							<AnimatePresence>{isOpen && <CardPay />}</AnimatePresence>
						</div>
						<button className='mt-4 w-full rounded-md bg-mainBlue py-2 font-bold hover:bg-mainColor hover:text-mainBlue'>
							Send
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default FormRegistration;
