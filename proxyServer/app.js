import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
app.use(cors());

const url = 'http://store.steampowered.com/api/appdetails?appids='

app.get('/game/:id', async (req, res) => {
	const urlRoute = url + req.params.id
	const response = await fetch(urlRoute);
	const data = await response.json();
	if (data) { console.log(`GET: ${urlRoute}`) }
	res.json(data);
});

app.listen(3001, () => console.log('Server running on port 3001'));