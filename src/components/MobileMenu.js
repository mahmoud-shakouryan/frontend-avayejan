import { Link } from "react-router-dom";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const MobileMenu = ({showMenu, active}) => {
  return (
    <div className=''>
        <ul className={active ? 'font-secondFont text-sm fixed right-0 top-0 h-screen w-1/2  bg-dark flex  flex-col justify-start items-center md:hidden' : 'hidden'}>
            <li className=" p-2" onClick={showMenu}><CloseOutlinedIcon className="scale-150" /></li>
          <li className="p-4">
            <Link to="/">صفحه اصلی</Link>
          </li>
          <li className="p-4">
            <Link to="/videos">ویدیوهای آموزشی</Link>
          </li>
          <li className="p-4">
            <Link to="/signup">ثبت‌نام</Link>
          </li>
          <li className="p-4">
            <Link to="/signin">ورود</Link>
          </li>
          <li className="p-4">
            <Link to="/cart">سبد خرید</Link>
          </li>
          <li className="p-4">
            <Link to="/about">درباره‌ی ما</Link>
          </li>
          <li className="p-4">
            <Link to="/contact">ارتباط با ما</Link>
          </li>
          
        </ul>
    </div>
  )
}

export default MobileMenu