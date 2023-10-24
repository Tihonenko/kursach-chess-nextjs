import React from 'react';

import InputForm from '@/app/_components/UI/InputForm/InputForm';

const FormRegistration = () => {
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
