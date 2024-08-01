import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useUserById } from '../requests/requests'
import Profil from './components/Profil'

const Details = () => {
	const { id } = useParams()
	const { user, loading, error } = useUserById(id)
	const [team, setTeam] = useState(() => {
		const savedTeam = JSON.parse(localStorage.getItem('team'))
		return savedTeam ?? []
	})

	useEffect(() => {
		localStorage.setItem('team', JSON.stringify(team))
	}, [team])

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error: {error.message}</p>

	const addToTeam = (user) => {
		if (team.length < 3 && !team.includes(user.id)) {
			setTeam([...team, user.id])
		}
	}

	const removeFromTeam = (user) => {
		setTeam(team.filter(id => id !== user.id))
	}

	if (!user) {
		return <p>Loading...</p>
	}

	return (
		<div>
			<Profil user={user} team={team} addToTeam={addToTeam} removeFromTeam={removeFromTeam} />
		</div>
	)
}

export default Details
