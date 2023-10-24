const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] };

export const height = {
	initial: {
		height: 0,
	},

	enter: {
		height: 'auto',
		transition,
	},

	exit: {
		height: 0,
		transition,
	},
};

export const translate = {
	initial: {
		y: '100%',
		opacity: 0,
	},

	enter: (i) => ({
		y: 0,

		opacity: 1,

		transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0] },
	}),

	exit: (i) => ({
		y: '100%',
		opacity: 0,
		transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1] },
	}),
};

export const translateImg = {
	initial: {
		y: '100%',
		opacity: 0,
	},

	enter: (i) => ({
		y: 0,

		opacity: 1,

		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 },
	}),

	exit: (i) => ({
		y: '100%',
		opacity: 0,
		transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.4 },
	}),
};

export const translateHover = {
	initial: {
		x: '-100%',
		opacity: 0,
	},

	enter: {
		x: 0,
		opacity: 1,
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 },
	},
	exit: {
		x: '-100%',
		opacity: 0,

		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 },
	},
};
