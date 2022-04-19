import { styled } from "@styles";

export const Container = styled("button", {
	textTransform: "uppercase",
	color: "$white",
	background: "$darkGray",
	border: 0,
	outline: 0,
	fontSize: 28,
	fontWeight: 600,
	// padding: "12px 14px",
	borderRadius: 4,
	height: "8.23vw",
	maxHeight: 64,
	aspectRatio: 1 / 1,
	fontFamily: "OutroLado",

	"&#delete-key": {
		width: "calc(8.23vw * 2.5)",
	},

	"&#space-key": {
		fontFamily: "Poppins",
		fontSize: 14,
		width: "calc(8.23vw * 5)",
	},

	"@bp1": {
		fontSize: 20,
	},
});
