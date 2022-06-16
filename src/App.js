import './App.css';
import Topbar from './screens/Topbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import Videos from './screens/Videos';


function App() {
  return (
    <BrowserRouter>
    <div className="h-screen w-screen">
      <Topbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/videos' element={<Videos/>}/>
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
