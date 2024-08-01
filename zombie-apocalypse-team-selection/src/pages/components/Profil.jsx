import React from 'react'
import './Profil.css'

function Profil({ user, team, addToTeam, removeFromTeam }) {

    return (
        <div className="person-detail">
            <img
                src={user.avatar}
                alt={`${user.first_name} ${user.last_name}`}
                className={team.includes(user.id) ? 'team' : 'not-team'}
            />
            <h2>{user.first_name} {user.last_name}</h2>
            <p>Email: {user.email}</p>
            {team.includes(user.id) ? (
                <button onClick={() => removeFromTeam(user)}>Remove from Team</button>
            ) : (
                <button onClick={() => addToTeam(user)} disabled={team.length >= 3}>Add to Team</button>
            )}
        </div>
    )
}

export default Profil