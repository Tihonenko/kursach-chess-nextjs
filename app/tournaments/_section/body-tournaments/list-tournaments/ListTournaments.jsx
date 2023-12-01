'use client';

import { useSelector } from 'react-redux';

import ListItem from './ListItem';

const ListTournaments = () => {
	const tournament = [
		...useSelector((state) => state.tournament.data.tournament),
	];
	console.log(tournament);
	return (
		<div>
			{tournament.map((item, idx) => (
				<ListItem data={item} key={idx} />
			))}
		</div>
	);
};

export default ListTournaments;
