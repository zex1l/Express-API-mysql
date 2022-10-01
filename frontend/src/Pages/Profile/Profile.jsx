import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import './profile.css'

const Profile = () => {
    const [user, setUser] = useState({
        userId: null,
        email: null,
        name: null
    })

    const token = useSelector(state => state.reducer.user.token)

    const parseJwt = (token) => {
        try {
          return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
          return null;
        }
      }

    useEffect(() => {
        setUser(parseJwt(token))
    }, [])
    
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
                        <Link to='/:id/friends' className="other__item">Friends</Link>
                        <Link className="other__item">Posts</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile