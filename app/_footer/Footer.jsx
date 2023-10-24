import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='mt-52 border-t border-mainBlue py-10'>
			<div className='container'>
				<div className='grid place-items-center'>
					<div>
						<Image
							src='/logo.png'
							className='invert'
							width={100}
							height={100}
							alt='logo'
						/>
					</div>
					<div className='mt-5'>
						<h3 className='font-main text-4xl text-heroColor md:text-7xl'>
							CHECKMATE
						</h3>
					</div>
				</div>
				<div className='mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
					<div>
						<h4 className='heading-medium text-mainColor'>Address</h4>
						<p className='mt-2 text-descColor'>
							Lenina 123, Minsk, Belarus
						</p>
					</div>
					<div>
						<h4 className='heading-medium text-mainColor'>Contact</h4>
						<div className='mt-2'>
							<Link href='/web.telegram.org' className=' text-descColor'>
								<p>Telegram</p>
							</Link>
						</div>
						<div className='mt-2'>
							<Link href='/instagram.com' className=' text-descColor'>
								<p>Instagram</p>
							</Link>
						</div>
						<div className='mt-2 text-descColor'>
							<p>checkmate.info@gmail.com</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
