import { useEffect, useState } from "react";
import { GameData } from "../../interfaces/GameData";

const Stationeers = {
	name: "Stationeers",
	steamId: "544550",
};

// const appDetailsUrl = 'http://store.steampowered.com/api/appdetails?appids='

const appDetailsUrl = "http://localhost:3001/game/";

async function getGameDetails(steamId: string): Promise<GameData> {
	let response = await fetch(appDetailsUrl + steamId);
	let data = await response.json();
	return data;
}

function GameCard() {
	const [game, setGameDetails] = useState<GameData | null>(null);

	useEffect(() => {
		getGameDetails(Stationeers.steamId).then((data) =>
			setGameDetails(data)
		);
	}, []);

	return (
		<div>
			<h1>{Stationeers.name}</h1>
			<h2>{game.data}</h2>
			{/* <p>{gameDetails && JSON.stringify(gameDetails)}</p> */}
			{/* <h2>{game.key.GameData}</h2> */}
		</div>
	);
}

export default GameCard;
