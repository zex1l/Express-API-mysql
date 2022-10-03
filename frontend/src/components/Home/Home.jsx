import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'

import {parseUserFriends} from '../../instruments/parseUserFriends'
import { setUserFriends } from '../../store/slices/userSlice';

const Home = () => {

    const isAuth = useSelector(state => state.reducer.user.isAuth)

   
    

    return (
        <div>
            Home
        </div>
    );
};

export default Home;