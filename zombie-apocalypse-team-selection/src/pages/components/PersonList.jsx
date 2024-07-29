import React from 'react'
import { useNavigate } from 'react-router-dom'

function PersonList ({ users, team, addToTeam, removeFromTeam }) {

    const navigate = useNavigate()
    
    return (
        <div className="person-list">
            {users.map(user => (
                <div key={user.id} className="person">
                    <img
                        src={user.avatar}
                        alt={`${user.first_name} ${user.last_name}`}
                        onClick={() => navigate(`/details/${user.id}`)}
                    />
                    <p>{user.first_name}</p>
                    {team.includes(user.id) ? (
                        <button onClick={() => removeFromTeam(user)}>Remove from Team</button>
                    ) : (
                        <button onClick={() => addToTeam(user)} disabled={team.length >= 3}>Add to Team</button>
                    )}
                </div>
            ))}
        </div>
    )
}
    

export default PersonList