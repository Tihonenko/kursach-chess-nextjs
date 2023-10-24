import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: {
		gallery: [
			{ img: '/gallery/club-girl-photo-2.jpg' },
			{ img: '/gallery/club-photo-1.jpg' },
			{ img: '/gallery/club-photo-2.jpg' },
			{ img: '/gallery/coach/girl-coach-1.jpg', title: 'coach' },
			{ img: '' },
			{ img: '' },
		],
	},
	imagePaginations: [],
};

export const GallerySlice = createSlice({
	name: 'gallery',
	initialState,
	reducers: {
		imagePagin: (state) => {
			state.imagePaginations = state.data.gallery.slice(0, 4);
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

export const { imagePagin } = GallerySlice.actions;

export const Gallery = GallerySlice.reducer;
