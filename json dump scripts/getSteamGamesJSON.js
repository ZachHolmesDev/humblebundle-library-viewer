// get array of games by the Class Name
// steam might change this id in future  
const games = Array.from(document.getElementsByClassName("_22awlPiAoaZjQMqxJhp-KP"));
var gameListJSON = []

for (let i = 0; i <games.length; i++) {
	const gameName = games[i].innerHTML
	
	const url = games[i].href
	const parts = url.split('/')
	const steamId = parts[parts.length - 1]

	gameListJSON.push(
		{name: gameName, steamId: steamId})
}
console.log(gameListJSON);