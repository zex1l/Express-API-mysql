import { useParams} from 'react-router-dom';
import { useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import FriendProfile from '../../components/FriendProfile/FriendProfile';

const EnemyProfile = () => {
    const [profileData, setProfileData] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const params = useParams()
    const userFriends = useSelector(state => state.reducer.user.userFriendsData)

    useEffect(() => {
        const filterData = userFriends.filter(user => user.id === Number(params.id))
        setProfileData(filterData)
        setLoading(false)
    }, [])
    

    return (
        <>
            {loading ? <div>loading</div> : <FriendProfile user={profileData}/>}
        </>
    );
};




export default EnemyProfile;