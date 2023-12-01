import Image from 'next/image';

const Hero = () => {
	return (
		<section className='container relative grid auto-cols-auto place-content-center overflow-hidden py-72 text-mainBlue md:overflow-visible'>
			<div className='overflow-hidden'>
				<div className='container'>
					<h3 className='heading-large rounded-xl bg-heroColor px-3 py-2'>
						CHECKM♘TE
					</h3>
				</div>
				<div className='absolute -left-48 top-28 -z-30 h-[300px] w-[300px] -rotate-12 blur-sm'>
					<Image
						src={'/chess/king.png'}
						width={50}
						height={50}
						alt='king'
						className='h-full w-full bg-cover object-cover'
					/>
				</div>
				<div className=' absolute -right-48 top-36 -z-30 h-[400px] w-[400px] rotate-12 blur-md'>
					<Image
						src={'/chess/bishop.png'}
						width={50}
						height={50}
						alt='bishop'
						className='h-full w-full bg-cover object-cover'
					/>
				</div>
				<div className='absolute top-44 -z-30 h-[50px] w-[50px] rotate-12'>
					<Image
						src={'/chess/rook.png'}
						width={50}
						height={50}
						alt='bishop'
						className='h-full w-full bg-cover object-cover'
					/>
				</div>
				<div className='absolute right-96 top-[30rem] -z-30 hidden h-[75px] w-[75px] -rotate-12 md:block'>
					<Image
						src={'/chess/king.png'}
						width={50}
						height={50}
						alt='bishop'
						className='h-full w-full bg-cover object-cover'
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
