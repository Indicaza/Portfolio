module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
				colors: {
					primary: "#FAFAFA", // Off-White
					secondary: "#2D2D2D", // Dark Gray
					accent1: "#52B788", // Mint Green
					accent2: "#FFD166", // Goldenrod
					accent3: "#EF476F", // Coral Pink
				},
			},
		},
		variants: {
			extend: {},
		},
		plugins: [],
	};
