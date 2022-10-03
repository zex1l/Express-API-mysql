import {Routes, Route, Navigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';

import Header from './components/header/Header';

import Home from './components/Home/Home';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import Profile from './Pages/Profile/Profile';
import Friends from './Pages/Friends/Friends';
import EnemyProfile from './Pages/EnemyProfile/EnemyProfile';

import {setAllUsers} from './store/slices/allUsersSlice'

function App() {

  const isAuth = useSelector(state => state.reducer.user.isAuth)
  const dispatch = useDispatch()
  const token = useSelector(state => state.reducer.user.token)



  useEffect(() => {
    if(token) {
      axios.get('http://localhost:5000/api/users',{
      headers: {
          'Authorization': token
      }
    })
        .then(res => {
            dispatch(setAllUsers(res.data.value))
        })
    }

}, [isAuth])



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
