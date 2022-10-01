import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

import { parseJwt } from '../../instruments/parseJwt'
import { removeUser } from '../../store/slices/userSlice'

import './profile.css'

const Profile = () => {
    const [user, setUser] = useState({
        userId: null,
        email: null,
        name: null
    })

    const dispatch = useDispatch()
    const token = useSelector(state => state.reducer.user.token)
    const userData = useSelector(state => state.reducer.user.user)

    useEffect(() => {
        setUser(userData)
    }, [])

    const onLogout = () => {
        dispatch(removeUser())
    }
    
    return(
        <div className='profile' key={user.userId}>
            <div className="container">
                <div className="profile__inner">
                    <div className="profile__main">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-REr89iWROi6ScePs5agSIHpG9BPBDDZ_g&       usqp=CAU" alt="" className="profile__img" />
                        <div className="profile__info">
                            <span className="info__item">{user.name}</span>
                            <span className="info__item">{user.email}</span>
                        </div>
                    </div>
                    <div className="profile__other">
                        <Link to={`/profile/${user.userId}/friends`} className="other__item">Friends</Link>
                        <Link to={`/profile/${user.userId}/posts`} className="other__item">Posts</Link>
                    </div>
                    <button 
                        className="profile__btn"
                        onClick={onLogout}
                    >Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Profile