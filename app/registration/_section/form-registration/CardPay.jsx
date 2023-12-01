import React from 'react';

import InputForm from '@/app/_components/UI/InputForm/InputForm';

const CardPay = () => {
	return (
		<div className='rounded-md border border-gray-100/30 bg-gray-700 bg-opacity-10 bg-clip-padding px-3 py-5 backdrop-blur-sm backdrop-filter'>
			<div>
				<h2 className='ml-3 text-lg'>CREDIT CARD</h2>
			</div>
			<div className='py-5'>
				<InputForm
					id='name'
					htmlFor='name'
					type='text'
					label='Cardholder name'
				/>
			</div>
			<div className='mt-5'>
				<h3 className='ml-3 block text-lg text-descColor'>Card number:</h3>
				<div className='flex max-w-[300px] gap-5 text-sm md:text-lg'>
					<InputForm
						maxLength='4'
						id='card-number'
						htmlFor='card-number'
						type='text'
					/>
					<InputForm
						maxLength='4'
						id='card-number'
						htmlFor='card-number'
						type='text'
					/>
					<InputForm
						maxLength='4'
						id='card-number'
						htmlFor='card-number'
						type='text'
					/>
					<InputForm
						maxLength='4'
						id='card-number'
						htmlFor='card-number'
						type='text'
					/>
				</div>
			</div>
			<div className='mt-5 flex gap-10'>
				<div>
					<h3 className='ml-3 block text-lg text-descColor'>Date:</h3>
					<div className='flex max-w-[200px] gap-5'>
						<InputForm
							maxLength='2'
							id='card-number'
							htmlFor='card-number'
							type='text'
						/>
						/
						<InputForm
							maxLength='2'
							id='card-number'
							htmlFor='card-number'
							type='text'
						/>
					</div>
				</div>
				<div className='max-w-[50px]'>
					<h3 className='ml-3 block text-lg text-descColor'>CVV</h3>
					<div>
						<InputForm
							maxLength='3'
							id='card-number'
							htmlFor='card-number'
							type='text'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardPay;
