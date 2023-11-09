import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderStyle } from './header-style'

export const Header = () => {
  return (
    <HeaderStyle>
        <h1>My Challenges</h1>
        <nav>
            <span>
                LOGO
            </span>
            <ul>
                <li><Link to='/'> Tarefas </Link></li>
                <li><Link to='/poke'> PokemonAPI </Link></li>
                <li><Link to='/pagination'> Pagination </Link></li>
            </ul>
        </nav>
    </HeaderStyle>
  )
}
