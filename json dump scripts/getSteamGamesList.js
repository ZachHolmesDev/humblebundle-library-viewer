// get the list of names by the Class Name 
const games = Array.from(document.getElementsByClassName("_22awlPiAoaZjQMqxJhp-KP"));

var text = '';

// games.forEach(a => text += ("\n" + a.innerHTML));
for (let i = 0; i <games.length; i++) {
	text += ("\n" + games[i].innerHTML)
}

console.log(text);