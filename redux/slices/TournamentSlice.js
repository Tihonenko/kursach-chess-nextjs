import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: {
		tournament: [
			{
				date: 'November 5, 2023',
				title: 'Grandmaster Invitational',
				href: '/tournament',
			},
			{
				date: 'November 20, 2023',
				title: '5 Minutes Blitz Bonanza',
				href: '/tournament',
			},
			{
				date: 'December 1, 2023',
				title: 'All-round Amateur Battle',
				href: '/tournament',
			},
			{
				date: 'December 11, 2023',
				title: 'Elite Rapid Clash',
				href: '/tournament',
			},
			{
				date: 'Januar 3, 2024',
				title: "New Year's Chess Extravaganza",
				href: '/tournament',
			},
			{
				date: 'Januar 18, 2024',
				title: 'All-round Amateur Blitz',
				href: '/tournament',
			},
			{
				date: 'Januar 28, 2024',
				title: 'Real Knight',
				href: '/tournament',
			},
		],
	},
	tournamentPagination: [],
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

// export const coffeeTypesAction = createAction('coffeeTypes', () => {
// 	return {
// 		data: [
// 			{
// 				name: 'Americano',
// 				price: 9.99,
// 			},
// 			{
// 				name: 'Latte',
// 				price: 7.99,
// 			},
// 			{
// 				name: 'Сappuccino',
// 				price: 7.99,
// 			},
// 		],
// 	};
// });
// const teaTypesAction = createAction('teaTypes');

// MenuSlice.actions.coffeeTypes = coffeeTypesAction;
// MenuSlice.actions.teaTypes = teaTypesAction;

export const { tournamentPagin } = TournamentSlice.actions;

export const Tournament = TournamentSlice.reducer;
