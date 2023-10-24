'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Body from './body/Body';
import { tournamentPagin } from '@/redux/slices/TournamentSlice';

const ListTournament = () => {
	const dispatch = useDispatch();

	const tournament = [
		...useSelector((state) => state.tournament.tournamentPagination),
	];

	useEffect(() => {
		dispatch(tournamentPagin());
	}, []);

	return (
		<div className='mt-10'>
			{tournament.map((info, idx) => (
				<Body key={idx} info={info} />
			))}
			<Body info={{ title: 'View more tournaments', href: '/tournament' }} />
		</div>
	);
};

export default ListTournament;
