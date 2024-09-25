import { useEffect, useState } from "react";
import { GameData } from "../../interfaces/GameData";

const Stationeers = {
	name: "Stationeers",
	steamId: "544550",
};

const appDetailsUrl = "http://localhost:3001/game/";

async function getGameDetails(steamId: string): Promise<GameData> {
	const response = await fetch(appDetailsUrl + steamId);
	const data = await response.json();
	return data;
}

function GameCard2() {
	const [game, setGameDetails] = useState<GameData | null>(null);

	useEffect(() => {
		getGameDetails(Stationeers.steamId).then((data) => setGameDetails(data));
	}, []);

	return (
		<div>
			<h1>{Stationeers.name}</h1>
			{game ? (
				<>
					{/* Extract the first key from the game object */}
					{Object.keys(game).map((key) => (
						<div key={key}>
							<h2>Success: {game[key].success ? "Yes" : "No"}</h2>
							{/* Adjust this based on the actual structure of GameDetails */}
							<p>{JSON.stringify(game[key].data)}</p>
						</div>
					))}
				</>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
}

export default GameCard2;
