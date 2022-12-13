import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ListUser from './listuser';
import DetailUser from './detailuser';

export default function Accueil() {
    return (
        <div>
            <div className='Head'>Gestion des taches</div>
            <Routes>
                <Route exact path="/" element={<ListUser />} />
                <Route path='/detailuser/:id' element={<DetailUser />} />
            </Routes>
        </div>
    )
}