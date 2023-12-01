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
				<div className='mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
					<div>
						<h4 className='heading-medium text-mainColor'>Address</h4>
						<p className='mt-2 text-descColor'>
							Lenina 123, Minsk, Belarus
						</p>
					</div>
					<div>
						<h4 className='heading-medium text-mainColor'>Contact</h4>
						<div className='mt-2'>
							<Link
								href='/web.telegram.org'
								className=' footer-link-animate text-descColor'
							>
								<p>Telegram</p>
							</Link>
						</div>
						<div className='mt-2'>
							<Link
								href='/instagram.com'
								className=' footer-link-animate text-descColor'
							>
								<p>Instagram</p>
							</Link>
						</div>
						<div className='footer-link-animate mt-2 text-descColor'>
							<p>checkmate.info@gmail.com</p>
						</div>
					</div>
					<div>
						<h4 className='heading-medium text-mainColor'>Club</h4>
						<div className='mt-2'>
							<div className='mt-2'>
								<Link
									href='/education'
									className='footer-link-animate text-descColor'
								>
									<p>Education</p>
								</Link>
							</div>
							<div className='mt-2'>
								<Link
									href='/tournaments'
									className=' footer-link-animate text-descColor'
								>
									<p>Tournaments</p>
								</Link>
							</div>
							<div className='mt-2'>
								<Link
									href='/teams'
									className=' footer-link-animate text-descColor'
								>
									<p>Team</p>
								</Link>
							</div>
							<div className='mt-2'>
								<Link
									href='/#faq'
									className=' footer-link-animate text-descColor'
								>
									<p>FAQ</p>
								</Link>
							</div>
							<div className='mt-2'>
								<Link
									href='/#price'
									className=' footer-link-animate text-descColor'
								>
									<p>Price</p>
								</Link>
							</div>
							<div className='mt-2'>
								<Link
									href='/gallery'
									className=' footer-link-animate text-descColor'
								>
									<p>Gallery</p>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
