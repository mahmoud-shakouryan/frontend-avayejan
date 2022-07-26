import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MobileMenu from "../components/MobileMenu";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import * as actions from '../store/actions/actionTypes';

const Topbar = () => {

    const [activeSideMenu, setActiveSideMenu] = useState(false);
    const showMenu = () => {
      setActiveSideMenu(!activeSideMenu)
    }

    const userSigninState = useSelector( state => state.userSigninReducer );
    const { userInfo } = userSigninState;

    const cardState = useSelector( state => state.cardReducer );
    const { cardItems } = cardState;

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userSignoutHandler = () =>{
      dispatch({ type: actions.USER_SIGNOUT });
      dispatch({ type: actions.CART_EMPTY });
      navigate('/');
    }


  return (
    <div className="z-10 fixed w-full h-10 flex justify-between items-center bg-dark text-theWhite">
      <div className="basis-1/10 text-sm font-semibold text-left pl-2 ">
        <Link to='/' className="font-firstFont font-thin sm:hover:text-orange">آوای جان</Link>
      </div>
      <div className="fixed w-10 h-10 right-1/2 translate-x-1/2 flex items-center justify-center rounded">
        <Link to='/card'><ShoppingCartOutlinedIcon/>{ (cardItems && cardItems.length !== 0) ? <span className="absolute top-1 -right-1 bg-red text-dark font-bold border w-5 h-5 rounded-full flex items-center justify-center text-xs">{cardItems.length}</span> : null}</Link>
      </div>

      <nav className="h-full basis-9/10 flex items-center">
        
        <div className="md:hidden text-right pr-2 flex justify-end gap-4">
          <MenuOutlinedIcon
            onClick={showMenu}
            className="cursor-pointer scale-150 sm:hover:text-orange"
          />
        </div>

        <ul className="hidden h-full bg-dark md:flex md:items-center md:justify-around md:gap-5 font-secondFont text-xs pr-2">
          <li className="h-full hover:text-orange cursor-pointer">
            <Link to="/contact" className=" h-full flex items-center justify-center">تماس با ما</Link>
          </li>
          { !userInfo ? (
          <li className="h-full hover:text-orange cursor-pointer">
            <Link to="/signup" className=" h-full flex items-center justify-center">ثبت نام</Link>
          </li>)
          : null
          }
          <li className="h-full hover:text-orange cursor-pointer">
            { userInfo ? <button  className=" h-full flex items-center justify-center" onClick={userSignoutHandler}>خروج</button> : <Link to="/signin" className=" h-full flex items-center justify-center">ورود</Link> }
          </li>
          { userInfo ? (
             <li className="h-full hover:text-orange cursor-pointer">
             <Link to="/myvideos" className=" h-full flex items-center justify-center">ویدیوهای من</Link>
           </li>
          ):
          null}
          <li className="h-full hover:text-orange cursor-pointer">
            <Link to="/videos" className=" h-full flex items-center justify-center">ویدیوهای آموزشی</Link>
          </li>
          <li className="h-full hover:text-orange cursor-pointer">
            <Link to="/" className=" h-full flex items-center justify-center">صفحه اصلی</Link>
          </li>
        </ul>

        <MobileMenu showMenu={showMenu} activeSideMenu={activeSideMenu}/>
        
      </nav>
    </div>
  );
};

export default Topbar;
