import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useSelector} from 'react-redux'
import { parseUserFriends } from '../../instruments/parseUserFriends';

import './friends.css'

const Friends = () => {
    const [friends, setFriends] = useState([])
    const [allUsers, setAllUsers] = useState([])

    const token = useSelector(state => state.reducer.user.token)
    const userFriendsId = useSelector(state => state.reducer.user.user.userFriends)

    useEffect(() => {
        axios.get('http://localhost:5000/api/users',{
            headers: {
                'Authorization': token
            }
        })
            .then(res => setAllUsers(res.data.value))
    }, [])

    useEffect(() => {
        const userFriendsData = parseUserFriends('2&5')
        const data = allUsers.filter(friend => userFriendsData.includes(friend.id))
        setFriends(data)
        
    }, [allUsers])

    return (
        <div className='friends'>
            <div className="container">
                <div className="friends__inner">
                    <ul className="friends__items">
                        
                        {
                            friends.map(friend => {
                                return(
                                    <Link to={`/enemy_profile/${friend.id}`} className="friends__item" key={friend.id}>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-REr89iWROi6ScePs5agSIHpG9BPBDDZ_g&       usqp=CAU" alt="" className="friends__img" />
                                        <div className="friends__info">
                                            <span className="friends__name">{friend.name}</span>
                                            
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Friends;