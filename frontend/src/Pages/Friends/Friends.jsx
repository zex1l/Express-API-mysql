import {useState, useEffect} from 'react';

import {useSelector, useDispatch} from 'react-redux'
import { setUserFriends } from '../../store/slices/userSlice';

import './friends.css'
import FriendsList from '../../components/FriendsList/FriendsList';
import { parseUserFriends } from '../../instruments/parseUserFriends';

const Friends = () => {
    const [friends, setFriends] = useState([])
    const [loading, setLoading] = useState(true)

    const userFriendsId = useSelector(state => state.reducer.user.userData.userFriendsId)
    const allUsers = useSelector(state => state.reducer.allUsers.allUsers)
    const dispatch = useDispatch()
    
    const setFriendsData = () => {
        const userFriendsData = parseUserFriends(userFriendsId)
        const data = allUsers.filter(friend => userFriendsData.includes(friend.id))
        dispatch(setUserFriends(data))
        
        setFriends(data)
        setLoading(false)
      }
    
      useEffect(() => {
        setFriendsData()
      }, [friends])

    return (
        <div className='friends'>
            <div className="container">
                <div className="friends__inner">
                    <ul className="friends__items">
                        
                        
                        {loading ? 'loading' : <FriendsList friends={friends}/>}
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Friends;