import {Route, Routes} from 'react-router-dom'
import { Tareas } from '../challenges/Tareas-creator/tareas'
import { Pokemon } from '../challenges/PokemonAPI/Pokemon'
import { Pagination } from '../challenges/pagination/Pagination'

import React from 'react'

export const Roots = () => {
  return (
    <Routes>
        <Route path='/'  element={<Tareas/>} />
        <Route path='/poke'  element={<Pokemon/>} />
        <Route path='/pagination'  element={<Pagination/>} />
    </Routes>
  )
}



