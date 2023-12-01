import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: {
		teams: [
			{
				name: 'Anna',
				job: 'Founder',
				img: '/gallery/Anna-founder.png',
			},
			{
				name: 'Liam',
				job: 'Coach Director',
				img: '/gallery/Liam-coach-dir.png',
			},
			{
				name: 'Oliver',
				job: 'Tournament Director',
				img: '/gallery/Oliver-tournament-dir.png',
			},
			{
				name: 'Emma',
				job: 'Marketing Chief',
				img: '/gallery/Emma-marketing-chief.png',
			},
			{
				name: 'Elsa',
				job: 'Art Director',
				img: '/gallery/Elsa-art-dir.png',
			},
			{
				name: 'Jhon',
				job: 'Broadcaster',
				img: '/gallery/Jhon-broadcaster.png',
			},
		],
		coach: [
			{
				name: 'Adam',
				img: '/gallery/coach/Adam-coach.png',
				rating: 2340,
			},
			{
				name: 'David',
				img: '/gallery/coach/David-coach.png',
				rating: 2553,
			},
			{
				name: 'Alex',
				img: '/gallery/coach/Alex-coach.png',
				rating: 2273,
			},
			{
				name: 'Alice',
				img: '/gallery/coach/Alice-coach.png',
				rating: 2141,
			},
		],
	},
	tournamentPagination: [],
};

export const TeamsSlice = createSlice({
	name: 'teams',
	initialState,
	reducers: {},
	extraReducers: {},
});

// export const { tournamentPagin } = TournamentSlice.actions;

export const Teams = TeamsSlice.reducer;
