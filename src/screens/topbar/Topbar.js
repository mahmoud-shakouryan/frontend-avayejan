import { useState } from "react";
import { Link } from "react-router-dom";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import MobileMenu from "../../components/mobileMenu/MobileMenu";

const Topbar = () => {

    const [active,setActive] = useState(false);
    const showMenu = () => {
        setActive(!active)
    }



  return (
    <div className="z-10 fixed w-full h-10 flex justify-between items-center bg-blueDark text-blueLighter">
      <div className="basis-1/3 text-sm font-semibold text-left pl-2 ">
        <Link to='/' className="font-firstFont font-thin">آوای جان</Link>
      </div>
      <div className="basis-1/3  flex justify-center">
        <ShoppingBasketOutlinedIcon />
      </div>

      <nav className="basis-1/3">
        <div className="md:hidden text-right pr-2 flex justify-end  ">
          <MenuOutlinedIcon
            onClick={showMenu}
            className="cursor-pointer scale-150 "
          />
        </div>

        <ul className="hidden md:flex gap-8 p-6">
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

        <MobileMenu showMenu={showMenu} active={active}/>
      </nav>
    </div>
  );
};

export default Topbar;
