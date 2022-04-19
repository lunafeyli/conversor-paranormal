import React from "react";
import { Container } from "./styles";

const Key: React.FC<{
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	keyName: string;
	id: string;
}> = ({ onClick, keyName, id }) => {
	return (
		<Container onClick={onClick} data-key={keyName} id={id}>
			{keyName}
		</Container>
	);
};

export { Key };
