import React from 'react'
import './Team.css'

function Team({ users, team }) {
    users = users.filter(user => team.includes(user.id))
    return (
        <div className="team-container">
            <h1>Team</h1>
            <div className="team-members">
                {users.map(user => (
                    <div key={user.id} className="team-member">
                        <img src={user.avatar} alt={users.first_name} />
                        <p>{user.first_name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Team