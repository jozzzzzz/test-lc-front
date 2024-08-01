import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/Home'
import Details from './pages/Details'


function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/details/:id" element={<Details />} />
			</Routes>
		</Router>
	)
}

export default App
