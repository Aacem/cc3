import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function DetailUser() {
    const {data} = useSelector(state => state.user)
    const {id} = useParams()
    const selectedUser = data.users.filter(user => user.id == id)
    return (
        <div>
            {
                selectedUser.map(user => <div className='detail' key={user.id}>
                    <div className='image'>
                        <img src={user.image} alt="img_profile" />
                    </div>
                    <div>
                        <div className='DS'>
                            <label>Full Name: </label>
                            <span>{`${user.firstName} ${user.lastName}`}</span>
                        </div>
                        <div className='DS'>
                            <label>Age: </label>
                            <span>{user.age}</span>
                        </div>
                        <div className='DS'>
                            <label>Gender: </label>
                            <span>{user.gender}</span>
                        </div>
                        <div className='DS'>
                            <label>Email: </label>
                            <span>{user.email}</span>
                        </div>
                        <div className='DS'>
                            <label>Phone number: </label>
                            <span>{user.phone}</span>
                        </div>
                        <div className='DS'>
                            <label>Weight: </label>
                            <span>{user.weight}</span>
                        </div>
                        <div className='DS'>
                            <label>Height: </label>
                            <span>{user.height}</span>
                        </div>
                        <div className='DS'>
                            <label>Birth Date: </label>
                            <span>{user.birthDate}</span>
                        </div>
                        <div className='DS'>
                            <label>Blood Group: </label>
                            <span>{user.bloodGroup}</span>
                        </div>
                        <div className='DS'>
                            <label>Eye Color: </label>
                            <span>{user.eyeColor}</span>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}