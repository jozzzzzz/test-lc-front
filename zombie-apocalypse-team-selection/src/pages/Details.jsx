import React from 'react'
import { useParams } from 'react-router-dom'
import './Details.css'
import { useUserById } from '../requests/requests'

const Details = () => {
	const { id } = useParams()
	const { user } = useUserById(id)

	if (!user) {
		return <div>Loading...</div>
	}

	return (
		<div className="person-detail">
			<img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
			<h2>{user.first_name} {user.last_name}</h2>
			<p>Email: {user.email}</p>
		</div>
	)
}

export default Details
