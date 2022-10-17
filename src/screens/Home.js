import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import LogoutIcon from '@mui/icons-material/Logout';
import TelegramIcon from '@mui/icons-material/Telegram';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions/actionTypes';
import Slider from '../components/Slider';

const Home = () => {


    const { userInfo } = useSelector( state => state.userSigninReducer );
    const dispatch = useDispatch();
    const signoutHandler = () =>{
      dispatch({ type: actions.USER_SIGNOUT })
    }

    const images = [
      '/images/cart.jpg',
      '/images/cart2.png',
      '/images/cart3.jpg'
    ]

  return (
    <>
      <div className="w-full h-full fixed top-10 p-2 bg-theWhite flex flex-col justify-start gap-4 md:gap-2">
        <div className='w-full md:w-[569px] md:mx-auto h-30 flex flex-col items-center gap-1 bg-homeGrandient py-2 rounded-md shadow-sm shadow-silver'>
          <span className='font-secondFont text-[8px] sm:text-sm text-dark font-semibold'>به آوای جان خوش آمدید</span>
          <span className='w-full font-firstFont text-[12px] sm:text-sm text-center text-dark font-semibold'>کلینیک آوای جان با مدیریت دکتر فاطمه رضابخش</span>
          <span className='font-secondFont text-center text-[10px] sm:text-sm text-dark font-semibold'>متخصص اعصاب و روان، روان‌درمانگر و مشاور ازدواج و خانواده</span>
          <span className='w-16 h-16 rounded-full overflow-hidden'><img src='/images/thedr.png'/></span>
        </div>
        <Slider slides={images}/> 
        <div className="w-full md:w-[569px] mx-auto text-center  flex items-center justify-center gap-1">
          <Link to='/videos?page=1' className='w-full'><button type="button" className="bg-lightBlue py-1 md:py-2 w-full  text-[8px] md:text-[11px] flex flex-col items-center  text-dark font-bold font-secondFont rounded-lg shadow-sm shadow-dark sm:hover:scale-105 duration-150 ease-out"> <span><VideoLibraryOutlinedIcon className='mr-1 font-bold' /></span><span>ویدیوهای آموزشی</span></button></Link>        
          { userInfo ? <Link to='/myvideos' className='w-full'><button type="button" className="bg-lightBlue py-1 md:py-2 w-full text-[8px] md:text-[11px] flex flex-col items-center text-dark  font-secondFont rounded-lg shadow-sm shadow-dark sm:hover:scale-105 duration-150 ease-out"> <span><MobileFriendlyIcon className='mr-1' /></span><span className='font-bold'>ویدیوهای من</span></button></Link> : <Link to='/signin' className='w-full'><button type="button" className="bg-lightBlue py-1 md:py-2 w-full text-[8px] md:text-[11px] flex flex-col items-center text-dark  font-secondFont rounded-lg shadow-sm shadow-dark sm:hover:scale-105 duration-150 ease-out"> <span><ExitToAppIcon className='mr-1' /></span><span className='font-bold'>وارد شوید</span></button></Link>}
          { userInfo ? <button onClick={signoutHandler} type="button" className="bg-lightBlue w-full py-1 md:py-2 text-[8px] md:text-[11px] flex flex-col items-center text-dark font-secondFont  rounded-lg shadow-sm shadow-dark sm:hover:scale-105 duration-150 ease-out"> <span><LogoutIcon/></span><span className='font-bold'>خروج از حساب</span></button> : <Link to='/signup' className='w-full'><button type="button" className="bg-lightBlue py-1 md:py-2 w-full text-[8px] md:text-[11px] flex flex-col items-center text-dark font-secondFont rounded-lg shadow-sm shadow-dark sm:hover:scale-105 duration-150 ease-out"> <span><HowToRegIcon  /></span><span className='font-bold'>ثبت نام کنید</span></button></Link>}
        </div>
        <footer className="fixed bottom-0 left-0 h-16 w-full md:hidden flex flex-col justify-center bg-active rounded-md shadow-sm shadow-active">
            <div className='w-1/2 md:w-1/4 m-auto text-dark flex items-center justify-around scale-150'>
            <a href='http://telegram.me/avaye_jaan' className='sm:hover:scale-110 sm:duration-150' target='_blank'><span  title='تلگرام'><img src='/images/telegram_48.png' className='scale-50'/></span></a>
              <a href='https://www.instagram.com/avaye_jaan/' className='sm:hover:scale-110 sm:duration-150' target='_blank'><span  title='اینستاگرام'><img src='/images/insta_48.png' className='scale-50'/></span></a>
              <span className='sm:hover:scale-110 sm:duration-150' title='یوتیوب'><img src='/images/youtube_48.png' className='scale-50'/></span>
              <a href='https://www.aparat.com/avaclinic' className='sm:hover:scale-110 sm:duration-150' target='_blank'><span  title='آپارات'><img src='/images/aparat_48.png' className='scale-50'/></span></a>
            </div>
      </footer>
      </div>
      <div className='hidden md:flex absolute w-20 h-screen left-0 bottom-0 pb-10'>
      <div className='w-full h-full flex flex-col items-center justify-end gap-5'>
        <a href='http://telegram.me/avaye_jaan' className='md:hover:scale-150 sm:hover:scale-110 sm:duration-150' target='_blank'><span  title='تلگرام'><img src='/images/telegram_48.png' className='scale-50'/></span></a>
          <a href='https://www.instagram.com/avaye_jaan/' className='md:hover:scale-150 sm:hover:scale-110 sm:duration-150' target='_blank'><span  title='اینستاگرام'><img src='/images/insta_48.png' className='scale-50'/></span></a>
          <span className='md:hover:scale-150 sm:hover:scale-110 sm:duration-150' title='یوتیوب'><img src='/images/youtube_48.png' className='scale-50'/></span>
          <a href='https://www.aparat.com/avaclinic' className='md:hover:scale-150 sm:hover:scale-110 sm:duration-150' target='_blank'><span  title='آپارات'><img src='/images/aparat_48.png' className='scale-50'/></span></a>
        </div>
      </div>
    </>
    
  )
}

export default Home