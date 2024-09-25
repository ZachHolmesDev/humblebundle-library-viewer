// import { useState } from 'react'
import './App.css'
import FileUpload from './components/FileUpload'
import GameCard from './components/GameCard'
import GameCard2 from './components/GameCard2'


function App() {
  return (
	<>
	<h1>humblebundle-library-viewer</h1>	
	<FileUpload />
	<hr />
	{/* <GameCard /> */}
	<GameCard2 />
	</>
  )
}

export default App
