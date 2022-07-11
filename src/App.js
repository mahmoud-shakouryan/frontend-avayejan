import './App.css';
import Topbar from './screens/Topbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import Videos from './screens/Videos';
import Card from './screens/Card';
import VideoDetail from './screens/VideoDetail';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Contact from './screens/Contact';



function App() {
  return (
    <BrowserRouter>
    <div className="w-screen h-screen bg-theWhite">
      <Topbar/>
      <ToastContainer className='toastContainer' autoClose='1000'/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/videos' element={<Videos/>}/>
        <Route path='/videos/:id' element={<VideoDetail/>}/>
        <Route path="/card/:id" element={<Card/>} />
        <Route path='/card' element={<Card/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
