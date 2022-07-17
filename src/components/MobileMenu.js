import { Link, useNavigate } from "react-router-dom";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../store/actions/actionTypes';



const MobileMenu = ({showMenu, activeSideMenu}) => {

  const userSigninState = useSelector( state => state.userSigninReducer );
  const { userInfo } = userSigninState;



  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userSignoutHandler = () =>{
      dispatch({ type: actions.USER_SIGNOUT });
      dispatch({ type: actions.CART_EMPTY });
      navigate('/');
    } 

  return (
    <div className=''>
        <ul className={activeSideMenu ? 'font-secondFont text-sm fixed right-0 top-0 h-screen w-1/2  bg-dark flex  flex-col justify-start items-center md:hidden' : 'hidden'}>
            <li  onClick={showMenu} className="p-5 w-full flex items-center justify-center sm:hover:text-orange cursor-pointer"><CloseOutlinedIcon className="scale-150 flex items-center justify-center" /></li>
          <li  onClick={showMenu} className="w-full flex items-center justify-center sm:hover:text-orange">
            <Link to="/" className="p-5 w-full flex items-center justify-center">صفحه اصلی</Link>
          </li>
          <li  onClick={showMenu} className="w-full flex items-center justify-center sm:hover:text-orange">
            <Link to="/videos"  className="p-5 w-full flex items-center justify-center">ویدیوهای آموزشی</Link>
          </li>
          <li  onClick={showMenu} className="w-full flex items-center justify-center sm:hover:text-orange">
            <Link to="/signup"  className="p-5 w-full flex items-center justify-center">ثبت‌نام</Link>
          </li>
          <li  onClick={showMenu} className="w-full flex items-center justify-center sm:hover:text-orange">
            { userInfo ? <button  className="p-5 w-full flex items-center justify-center" onClick={userSignoutHandler}>خروج</button> : <Link to="/signin" className="p-5 w-full flex items-center justify-center">ورود</Link> }
          </li>
          <li  onClick={showMenu} className="w-full flex items-center justify-center sm:hover:text-orange">
            <Link to="/card" className="p-5 w-full flex items-center justify-center">سبد خرید</Link>
          </li>
          
          <li  onClick={showMenu} className="w-full flex items-center justify-center sm:hover:text-orange">
            <Link to="/contact" className="p-5 w-full flex items-center justify-center">تماس با ما</Link>
          </li>
          
        </ul>
    </div>
  )
}

export default MobileMenu