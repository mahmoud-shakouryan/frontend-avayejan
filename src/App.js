import './App.css';
import Topbar from './screens/topbar/Topbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/home/Home';
import Signin from './screens/signin/Signin';


function App() {
  return (
    <BrowserRouter>
    <div className="h-screen w-screen">
      <Topbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<Signin/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
