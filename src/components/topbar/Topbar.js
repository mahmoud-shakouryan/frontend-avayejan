import { useState } from "react";
import { Link } from "react-router-dom";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Topbar = () => {

    const [active,setActive] = useState(false)

    const showMenu = () => {
        setActive(!active)
    }



  return (
    <div className="fixed w-full flex justify-between items-center bg-blueDark">
      <div className="basis-1/3 text-sm font-semibold text-left pl-1 bg-red">
        <p className="font-firstFont">آوای جان</p>
      </div>
      <div className="basis-1/3 bg-red flex justify-center">
        basket
      </div>

      <nav className="basis-1/3 bg-red">
        <div className="md:hidden text-right pr-1">
          <MenuOutlinedIcon
            onClick={showMenu}
            className="text-right cursor-pointer bg-blueLight"
          />
        </div>

        <ul className="hidden md:flex gap-8 p-6 uppercase">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Testimonials</Link>
          </li>
          <li>
            <Link to="/">Information</Link>
          </li>
          <li>
            <Link to="/">Jobs</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>

        {/* <MenuItems showMenu={showMenu} active={active} /> */}
      </nav>
    </div>
  );
};

export default Topbar;
