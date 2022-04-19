import React, { useState } from "react";
import { Key } from "../Key";
import {
	Header,
	Title,
	KeyBoard,
	KeyRow,
	Container,
	ConverterGroup,
	Converter,
	ConverterWrapper,
} from "./styles";

const keys = [
	["q", "w", "e", "r", "t", "u", "i", "o", "p"],
	["a", "s", "d", "f", "g", "h", "j", "l"],
	["z", "c", "v", "b", "n", "m", "<="],
	[",", "Espaço", "."],
];

const App: React.FC = () => {
	const [normalToSig, setNormalToSig] = useState("");
	const [sigToNormal, setSigToNormal] = useState("");

	const handleKey = (key: string) => {
		if (key === "<=")
			return setSigToNormal((text) => text.substring(0, text.length - 1));
		if (key === "Espaço") return setSigToNormal((text) => text + " ");

		return setSigToNormal((text) => text + key);
	};

	return (
		<Container>
			<Header>
				<Title>O conversor Paranormal</Title>
			</Header>
			<ConverterWrapper>
				<ConverterGroup>
					<Converter
						onChange={(e) => setNormalToSig(e.target.value)}
						value={normalToSig}
						placeholder="Escreva o texto..."
					/>
					<Converter
						readOnly
						value={normalToSig}
						id="converter-sig"
					/>
				</ConverterGroup>
				<ConverterGroup>
					<Converter
						value={sigToNormal}
						readOnly
						id="converter-sig"
						placeholder="Escreva o texto (use o teclado de sigilos)..."
					/>
					<Converter readOnly value={sigToNormal} />
				</ConverterGroup>
			</ConverterWrapper>
			<KeyBoard>
				{keys.map((keyRow, index) => (
					<KeyRow key={index}>
						{keyRow.map((key) => (
							<Key
								keyName={key}
								key={key}
								onClick={() => handleKey(key)}
								id={
									key === "<="
										? "delete-key"
										: key === "Espaço"
										? "space-key"
										: ""
								}
							/>
						))}
					</KeyRow>
				))}
			</KeyBoard>
		</Container>
	);
};

export { App };
