import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import User from './user';
import Accueil from './accueil';

export default function ListUser() {
    const navigate = useNavigate()
    const { data } = useSelector(state => state.user)
    return (
        <div className='liste_users'>
            {data.length != 0 && data.users.map(user => <User key={user.id} image={user.image} nom={`${user.firstName} ${user.lastName}`} details={e => navigate(`/DetailUser/${user.id}`)} listeTaches={e => navigate(`/ListePost/${user.id}`)} />)}
        </div>
    )
}