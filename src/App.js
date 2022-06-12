import './App.css';
import Topbar from './screens/topbar/Topbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/home/Home';


function App() {
  return (
    <BrowserRouter>
    <div className="bg-vector h-screen w-screen">
      <Topbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
