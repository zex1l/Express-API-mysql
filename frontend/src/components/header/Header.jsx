import {Link} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';

import './header.css'

const Header = () => {

    const auth = false

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
                        { auth ? 
                            <Link to='/profile' className="nav__item">Profile</Link> :
                            <Link to='/signin' className="nav__item">Sign In</Link>
                        }
                    </nav>
               </div>
            </div>
        </header>
    );
};

export default Header;