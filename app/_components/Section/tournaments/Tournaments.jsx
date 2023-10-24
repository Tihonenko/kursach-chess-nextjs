import Link from 'next/link';

import ListTournament from './list-tournament/ListTournament';

const Tournaments = () => {
	return (
		<section className='container mt-44'>
			<div>
				<div className='overflow-hidden'>
					<Link href='/tournaments' className='heading-link-medium'>
						Upcoming <br /> tournaments
					</Link>
				</div>
				<div>
					<ListTournament />
				</div>
			</div>
		</section>
	);
};

export default Tournaments;
