import React from 'react';

const Welcome = () => {
	return (
		<section className='container mt-64 overflow-hidden' id='welcome'>
			<div>
				<h3 className='heading-medium heading-animate text-mainColor'>
					Welcome to Chess Club
				</h3>
			</div>
			<div className='mt-10'>
				<div className='grid grid-rows-3 gap-5 text-white'>
					<div className='max-w-[600px]'>
						<p className='text-xl'>
							Are you tired of cramped, noisy tournament halls? Get ready
							for a seamless and thrilling online chess experience! Our
							platform hosts exciting chess competitions for players of
							all skill levels.
						</p>
					</div>
					<div className='max-w-[600px]'>
						<p className='text-xl'>
							Whether you’re a Grandmaster looking to prove your mettle
							or a casual chess enthusiast in search of a challenge,
							Chess Tournaments Online offers a diverse range of events
							to suit your needs.
						</p>
					</div>
					<div className='max-w-[600px]'>
						<p className='text-xl'>
							Register today for upcoming tournaments, follow live games,
							and engage with fellow chess lovers from around the globe.
							It's time to say goodbye to distractions and hello to the
							virtual chessboard.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Welcome;
