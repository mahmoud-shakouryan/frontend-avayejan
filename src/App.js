import "./App.css";
import Topbar from "./screens/Topbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Signin from "./screens/Signin";
import Signup from "./screens/Signup";
import Videos from "./screens/Videos";
import VideoDetail from "./screens/VideoDetail";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Contact from "./screens/Contact";
import DownloadScr from "./screens/DownloadScr";
import Cards from "./screens/Cards";

function App() {
  return (
    <BrowserRouter>
      <div className="w-screen h-screen bg-theWhite">
        <Topbar />
        <ToastContainer autoClose="1000" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/videos/:id" element={<VideoDetail />} />
          <Route path="/card/:id" element={<Cards />} />
          <Route path="/card" element={<Cards />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/myvideos" element={<DownloadScr />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
