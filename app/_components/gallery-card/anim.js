export const arrowBgTranslate = {
	initial: {
		opacity: 0,
	},

	enter: {
		opacity: 1,
		transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
	},

	leave: {
		opacity: 0,
		transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
	},
};

export const arrowTranslate = {
	initial: {
		y: 100,
		opacity: 0,
	},

	enter: {
		y: 0,
		opacity: 1,
		transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.1 },
	},

	leave: {
		y: 100,
		opacity: 0,
		transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.1 },
	},
};
