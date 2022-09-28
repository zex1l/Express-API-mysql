import {Routes, Route, Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux';

import Header from './components/header/Header';

import Home from './components/Home/Home';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import Profile from './Pages/Profile/Profile';

function App() {
  const isAuth = useSelector(state => state.reducer.user.isAuth)

  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/profile' element={isAuth ? <Profile/> : <Navigate to='/signin' replace/>}/>
      </Routes>
    </div>
  );
}

export default App;
