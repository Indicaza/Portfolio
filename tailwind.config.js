/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#FAFAFA", // Off-White (Default)
					100: "#F5F5F5",
					200: "#EAEAEA",
					300: "#DFDFDF",
					400: "#D4D4D4",
					500: "#C9C9C9",
				},
				secondary: {
					DEFAULT: "#2D2D2D", // Dark Gray (Default)
					100: "#262626",
					200: "#1F1F1F",
					300: "#191919",
					400: "#121212",
					500: "#0B0B0B",
				},
				accent1: "#52B788", // Mint Green
				accent2: "#FFD166", // Goldenrod
				accent3: "#EF476F", // Coral Pink
			},
			scale: {
				0: "0",
				25: ".25",
				50: ".5",
				75: ".75",
				90: ".9",
				95: ".95",
				100: "1",
				105: "1.05",
				110: "1.1",
				125: "1.25",
				150: "1.5",
				160: "1.6",
				175: "1.75",
				200: "2",
				300: "3",
				400: "4",
				500: "5",
				600: "6",
				700: "7",
				800: "8",
				900: "9",
				1000: "10",
			},
		},
	},
	plugins: [],
};
