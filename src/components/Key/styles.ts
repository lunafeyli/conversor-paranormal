import { styled } from "@styles";

export const Container = styled("button", {
	textTransform: "uppercase",
	color: "$white",
	background: "$darkGray",
	border: 0,
	outline: 0,
	fontSize: 38,
	fontWeight: 600,
	// padding: "12px 14px",
	borderRadius: 4,
	height: "8.23vw",
	maxHeight: 64,
	aspectRatio: 1 / 1,
	fontFamily: "OutroLado",
	$flex: { fullCenter: true },

	"@bp1": {
		aspectRatio: 1 / 2,
		fontSize: 32,
		height: "19.1vw",
	},

	"&#delete-key": {
		aspectRatio: 3 / 1,
		fontSize: 28,

		"@bp1": {
			aspectRatio: 1.7 / 1,
		},
	},

	"&#space-key": {
		fontFamily: "Poppins",
		fontSize: 14,
		aspectRatio: 6 / 1,

		"@bp1": {
			aspectRatio: 3 / 1,
		},
	},

	svg: {
		fill: "$white",
	},
});
