import { createStitches } from "@stitches/react";
import { Property } from "@stitches/react/types/css";

type Flex = {
	dir?: Property.FlexDirection;
	align?: Property.AlignItems;
	justify?: Property.JustifyContent;
	wrap?: Property.FlexWrap;
	fullCenter?: boolean;
};

export const { styled, globalCss } = createStitches({
	theme: {
		colors: {
			yellow: "#F7B926",
			lightYellow: "#F9C74F",
			white: "#FAFBFF",
			lightGray: "#A0A2A7",
			gray: "#696E77",
			darkGray: "#1A1B1F",
			dark: "#000000",
		},
	},
	utils: {
		$flex: ({
			dir = "column",
			align = "flex-start",
			justify = "flex-start",
			wrap = "nowrap",
			fullCenter,
		}: Flex) => ({
			display: "flex",
			alignItems: fullCenter ? "center" : align,
			justifyContent: fullCenter ? "center" : justify,
			flexWrap: wrap,
			flexDirection: dir,
		}),
	},
	media: {
		bp1: "(max-width: 490px)",
	},
});

const globalStyles = globalCss({
	"*, input, a": { margin: 0, padding: 0, boxSizing: "border-box" },
	body: {
		fontFamily: "Poppins, sans-serif",
		background: "$dark",
		color: "$yellow",
	},
});

globalStyles();
