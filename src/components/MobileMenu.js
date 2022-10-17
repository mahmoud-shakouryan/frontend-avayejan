import { Link, NavLink, useNavigate } from "react-router-dom";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../store/actions/actionTypes';
import { toast } from "react-toastify";



const MobileMenu = ({showMenu, activeSideMenu}) => {

  const userSigninState = useSelector( state => state.userSigninReducer );
  const { userInfo } = userSigninState;

  const options = { style: { 'font':'shabnam', 'textAlign': 'center','color':'#16001E', 'fontFamily':'firstFont', 'fontSize':'14px', 'fontWeight':'bold'}}

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userSignoutHandler = () =>{
      dispatch({ type: actions.USER_SIGNOUT });
      dispatch({ type: actions.CART_EMPTY });
      toast.success('خارج شدید', options)
      navigate('/');
  } 

  return (
    <div className=''>
        <ul className={activeSideMenu ? 'font-secondFont text-sm fixed right-0 top-0 h-screen w-1/2  bg-dark flex  flex-col justify-start items-center md:hidden' : 'hidden'}>
            <li  onClick={showMenu} className="p-5 w-full flex items-center justify-center sm:hover:text-orange cursor-pointer"><CloseOutlinedIcon className="scale-150 flex items-center justify-center" /></li>
          <li  onClick={showMenu} className="w-full flex items-center justify-center sm:hover:text-orange">
            <NavLink to="/" className={({isActive}) => isActive ? "p-5 w-full flex items-center justify-center text-active" : "p-5 w-full flex items-center justify-center"}>صفحه اصلی</NavLink>
          </li>
          <li  onClick={showMenu} className="w-full flex items-center justify-center sm:hover:text-orange">
            <NavLink to="/videos?page=1"  className={({isActive}) => isActive ? "p-5 w-full flex items-center justify-center text-active" : "p-5 w-full flex items-center justify-center"}>ویدیوهای آموزشی</NavLink>
          </li>
             <li  onClick={showMenu} className="w-full flex items-center justify-center sm:hover:text-orange">
             <NavLink to='myvideos'  className={({isActive}) => isActive ? "p-5 w-full flex items-center justify-center text-active" : "p-5 w-full flex items-center justify-center"}>ویدیوهای من</NavLink>
          </li>
          { !userInfo ? (
          <li  onClick={showMenu} className="w-full flex items-center justify-center sm:hover:text-orange">
            <NavLink to="/signup"  className={({isActive}) => isActive ? "p-5 w-full flex items-center justify-center text-active" : "p-5 w-full flex items-center justify-center"}>ثبت‌نام</NavLink>
          </li>
          ):
          null}
          <li  onClick={showMenu} className="w-full flex items-center justify-center sm:hover:text-orange">
            { userInfo ? <button  className="p-5 w-full flex items-center justify-center" onClick={userSignoutHandler}>خروج</button> : <NavLink to="/signin" className={({isActive}) => isActive ? "p-5 w-full flex items-center justify-center text-active" : "p-5 w-full flex items-center justify-center"}>ورود</NavLink> }
          </li>
          <li  onClick={showMenu} className="w-full flex items-center justify-center sm:hover:text-orange">
            <NavLink to="/card" className={({isActive}) => isActive ? "p-5 w-full flex items-center justify-center text-active" : "p-5 w-full flex items-center justify-center"}>سبد خرید</NavLink>
          </li>
          <li  onClick={showMenu} className="w-full flex items-center justify-center sm:hover:text-orange">
            <NavLink to="/contact" className={({isActive}) => isActive ? "p-5 w-full flex items-center justify-center text-active" : "p-5 w-full flex items-center justify-center"}>تماس با ما</NavLink>
          </li>
        </ul>
    </div>
  )
}

export default MobileMenu