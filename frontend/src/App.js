import {Routes, Route} from 'react-router-dom'
import Header from './components/header/Header';

import Home from './components/Home/Home';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
