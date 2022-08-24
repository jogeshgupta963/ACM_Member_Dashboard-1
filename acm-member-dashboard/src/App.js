import Cookies from 'js-cookie';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';
import Logins from './pages/login/Login';

function App() {
  return (
    <>
    
        <Routes>
          <Route exact path="/login" element={<Logins/>}  />
        </Routes>

      <div className="App">
      <div className="AppGlass">
        {Cookies.get('JWT') && <Sidebar/>}
        <Routes>
          <Route path='/' element={<MainDash/>} exact />
        </Routes>
        {Cookies.get('JWT') && <RightSide/>}
        </div>
        </div>
    
    
    
    </>
  );
}

export default App;
