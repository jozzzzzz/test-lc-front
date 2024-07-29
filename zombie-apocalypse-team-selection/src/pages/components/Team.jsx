import React from 'react'

function Team({ users, team }) {
    users = users.filter(user => team.includes(user.id))
    return (
        <div className="team-container">
            <h3>Team</h3>
            {users.map(user => (
                <div key={user.id} className="team-member">
                    <img src={user.avatar} alt={users.first_name} />
                    <p>{user.first_name}</p>
                </div>
            ))}
        </div>
    )
}

export default Team