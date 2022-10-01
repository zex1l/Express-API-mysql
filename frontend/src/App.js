import {Routes, Route, Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux';

import Header from './components/header/Header';

import Home from './components/Home/Home';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import Profile from './Pages/Profile/Profile';
import Friends from './Pages/Friends/Friends';
import EnemyProfile from './Pages/EnemyProfile/EnemyProfile';


function App() {

  const isAuth = useSelector(state => state.reducer.user.isAuth)

  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/profile/:id' element={isAuth ? <Profile/> : <Navigate to='/signin' replace/>}/>
          <Route path='/profile/:id/friends' element={<Friends/>}/>
          <Route path='/enemy_profile/:id' element={isAuth ? <EnemyProfile/> : <Navigate to='/signin' replace/>}/>

          <Route path='*' element={isAuth ? <Home/> : <SignIn/>}/>
      </Routes>
    </div>
  );
}

export default App;
