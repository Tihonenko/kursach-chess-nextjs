import Image from 'next/image';

const AsideLogo = () => {
	return (
		<aside className='col-span-2 w-full place-self-start'>
			<div>
				<div>
					<Image
						className='mx-auto invert'
						src='/logo.png'
						width={500}
						height={500}
						alt='logo'
					/>
				</div>
			</div>
		</aside>
	);
};

export default AsideLogo;
