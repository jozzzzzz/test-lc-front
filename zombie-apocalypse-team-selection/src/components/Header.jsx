import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'

function Header() {
    const logo = 'https://media.discordapp.net/attachments/985546275665625188/1268249415739506688/nnpg5twjiznwa_600.jpg?ex=66abbccf&is=66aa6b4f&hm=0001ed80febdb21ee532cbd8350ae1bae88d3fbaf69cb1bbcc6a91a19001052a'
    const navigate = useNavigate()

    return (
        <header className='my-header'>
            <h1 onClick={() => navigate('/')}>Zombie Apocalypse Team Selection</h1>
            <img src={logo} className="app-logo" alt="logo" onClick={() => navigate('/')} />
        </header>
    )
}

export default Header
