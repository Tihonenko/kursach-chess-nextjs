import { configureStore } from '@reduxjs/toolkit';

import { Gallery } from './slices/GallerySlice';
import { Teams } from './slices/TeamsSlice';
import { Tournament } from './slices/TournamentSlice';

export const store = configureStore({
	reducer: {
		gallery: Gallery,
		tournament: Tournament,
		teams: Teams,
	},
});
