import { styled } from "@styles";

export const Container = styled("div", {
	$flex: {
		align: "center",
		justify: "space-between",
	},
	height: "100vh",
	padding: "16px 0 32px",
});

export const Header = styled("header", {
	width: "100%",
	$flex: {
		justify: "center",
		dir: "row",
	},
	textAlign: "center",
});

export const Title = styled("h1", {
	fontSize: 32,

	"&::after": {
		fontSize: 24,
		marginTop: 8,
		display: "block",
		fontFamily: "OutroLado",
		content: "Ordem Paranormal",
	},
});

export const KeyBoard = styled("div", {
	$flex: {
		align: "center",
	},
	gap: 6,
});

export const KeyRow = styled("div", {
	$flex: {
		wrap: "wrap",
		dir: "row",
		justify: "center",
	},
	gap: 6,
});

export const ConverterWrapper = styled("div", {
	$flex: {
		dir: "row",
		justify: "space-evenly",
	},
	width: "100%",
});

export const ConverterGroup = styled("div", {
	$flex: {},
	gap: 6,
	flex: 0.45,
});

export const Converter = styled("textarea", {
	resize: "none",
	border: "1px solid $yellow",
	background: "$darkGray",
	color: "$white",
	width: "100%",
	height: 128,
	padding: 8,
	fontFamily: "Poppins",
	outline: 0,

	"&#converter-sig": {
		fontFamily: "OutroLado",
		fontSize: 18,

		"&::placeholder": {
			fontFamily: "Poppins",
		},
	},
});
