import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: {
		tournament: [
			{
				id: 1,
				date: 'November 5, 2023',
				title: 'Grandmaster Invitational',
				href: '/tournaments',
				img: '/gallery/poster/grandmaster-invitational.jpg',
			},
			{
				id: 2,
				date: 'November 20, 2023',
				title: '5 Minutes Blitz Bonanza',
				href: '/tournaments',
				img: '/gallery/poster/blitz-bonanz.jpg',
			},
			{
				id: 3,
				date: 'December 1, 2023',
				title: 'All-round Amateur Battle',
				href: '/tournaments',
				img: '/gallery/poster/all-round.jpg',
			},
			{
				id: 4,
				date: 'December 11, 2023',
				title: 'Elite Rapid Clash',
				href: '/tournaments',
				img: '/gallery/poster/rapid-clash.jpg',
			},
			{
				id: 5,
				date: 'Januar 3, 2024',
				title: "New Year's Chess Extravaganza",
				href: '/tournaments',
				img: '/gallery/poster/tournament-3.jpg',
			},
			{
				id: 6,
				date: 'Januar 18, 2024',
				title: 'All-round Amateur Blitz',
				href: '/tournaments',
				img: '/gallery/poster/all-round.jpg',
			},
			{
				id: 7,
				date: 'Januar 28, 2024',
				title: 'Real Knight',
				href: '/tournaments',
				img: '/gallery/poster/real-knight.jpg',
			},
		],
	},
	tournamentPagination: [],
	tournamentOne: null,
};

export const TournamentSlice = createSlice({
	name: 'tournament',
	initialState,
	reducers: {
		tournamentPagin: (state) => {
			state.tournamentPagination = state.data.tournament.slice(0, 5);
		},
	},
	extraReducers: {},
});

export const { tournamentPagin } = TournamentSlice.actions;

export const Tournament = TournamentSlice.reducer;
