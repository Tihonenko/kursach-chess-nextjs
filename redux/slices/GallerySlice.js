import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: {
		gallery: [
			{ img: '/gallery/club-girl-photo-2.jpg', title: 'club' },
			{ img: '/gallery/club-photo-1.jpg', title: 'club' },
			{ img: '/gallery/club-photo-2.jpg', title: 'club' },
			{ img: '/gallery/coach/Alice-coach.jpg', title: 'coach' },
			{ img: '/gallery/club-photo-3.jpg', title: 'club' },
			{ img: '/gallery/club-photo-4.jpg', title: 'club' },
			{ img: '/gallery/club-photo-5.jpg', title: 'club' },
			{ img: '/gallery/club-photo-6.jpg', title: 'club' },
			{ img: '/gallery/club-photo-7.jpg', title: 'club' },
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

export const { imagePagin } = GallerySlice.actions;

export const Gallery = GallerySlice.reducer;
