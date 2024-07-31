import React, { useEffect } from 'react'
import { useState } from 'react'
import { useUsers } from '../requests/requests'
import PersonList from './components/PersonList'
import Team from './components/Team'
import './Home.css'

function Home() {
	const { users } = useUsers()
	const [team, setTeam] = useState(() => {
		const savedTeam = JSON.parse(localStorage.getItem('team'))
		return savedTeam ?? []
	})

	useEffect(() => {
		localStorage.setItem('team', JSON.stringify(team))
	}, [team])

	const addToTeam = (user) => {
		if (team.length < 3 && !team.includes(user.id)) {
			setTeam([...team, user.id])
		}
	}

	const removeFromTeam = (user) => {
		setTeam(team.filter(id => id !== user.id))
	}

	return (
		<div className="page-container">
			<h2>Zombie Apocalypse Team</h2>
			<div className="team-indicator">
				<p>Current Team Members: {team.length} / 3</p>
			</div>
			<div className="row">
				<Team users={users} team={team} />
				<PersonList users={users} team={team} addToTeam={addToTeam} removeFromTeam={removeFromTeam} />
			</div>
		</div>
	)
}

export default Home
