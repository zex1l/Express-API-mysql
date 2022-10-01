import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';

import './header.css'
import { parseJwt } from '../../instruments/parseJwt';

const Header = () => {
    const initialState = {
        userId: null,
        name: null,
        email: null,
        userFriends: null
    }

    const [user, setUser] = useState(initialState)

    const isAuth = useSelector(state => state.reducer.user.isAuth)
    const userData = useSelector(state => state.reducer.user.user)

    useEffect(() => {

        if(isAuth) {
            setUser(userData)
        }
        else {
            setUser(initialState)
        }
        console.log(user);
    }, [isAuth])

    return (
        <header>
            <div className="header__inner">
                <div className="header__left">
                    <Link to='/' className="header__logo">Logo</Link>
                </div>
               <div className="header__center">
                    <div className="center__inner">
                        <SearchIcon className='search__icon'/>
                        <input type="text" placeholder='Search' className="serch__input" />
                    </div>
               </div>
               <div className="header__right">
                <nav className="header__nav">
                        <Link to='' className="nav__item">Nav</Link>
                        <Link to='/news' className="nav__item">News</Link>
                        { isAuth ? 
                            <Link to={`/profile/${user.userId}`} className="nav__item">Profile</Link> :
                            <Link to='/signin' className="nav__item">Sign In</Link>
                        }
                    </nav>
               </div>
            </div>
        </header>
    );
};

export default Header;