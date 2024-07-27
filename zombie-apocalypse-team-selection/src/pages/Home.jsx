import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useUsers from '../requests/requests'

function Home() {
	const { users } = useUsers()
	const [team, setTeam] = useState([])
	const navigate = useNavigate()

	const addToTeam = (user) => {
		if (team.length < 3 && !team.includes(user)) {
			setTeam([...team, user])
		}
	}

	const removeFromTeam = (user) => {
		setTeam(team.filter(member => member.id !== user.id))
	}
	return (
		<div className="page-container">
			<h2>Zombie Apocalypse Team</h2>
			<p>Welcome to the Zombie Apocalypse Team selection. Choose your teammates wisely!</p>
			<div className="team-indicator">
				<p>Current Team Members: {team.length} / 3</p>
			</div>
			{/* mettre dans un component + nouveau composant avc la team*/}
			<div className="users-list">
				{users.map(user => (
					<div key={user.id}>
						<img
							src={user.avatar}
							alt={`${user.first_name} ${user.last_name}`}
							onClick={() => navigate(`/details/${user.id}`)}
						/>
						<p>{user.first_name}</p>
						{team.includes(user) ? (
							<button onClick={() => removeFromTeam(user)}>Remove from Team</button>
						) : (
							<button onClick={() => addToTeam(user)} disabled={team.length >= 3}>Add to Team</button>
						)}
					</div>
				))}
			</div>
		</div>
	)
}

export default Home
