import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full h-screen  fixed top-10 p-2 bg-theWhite flex flex-col justify-between">
      
      <div className="text-center text-xs basis-1/5 md:font-bold">
        <p className="pt-2 font-secondFont font-semibold"> به آوای جان خوش آمدید</p>
        <p className="font-firstFont text-base font-semibold pt-2 mt-3 md:text-2xl">کلینیک آوای جان با مدیریت دکتر فاطمه رضابخش</p>
        <p className="text-center font-secondFont font-bold">متخصص اعصاب و روان، روان‌درمانگر و مشاور ازدواج و خانواده</p>
      </div>
      <div className="basis-2/5 text-center  flex flex-col items-center justify-start gap-10">
        <button type="button" className="w-40 bg-orange text-xs text-dark font-bold font-secondFont p-3 rounded-lg shadow-sm shadow-dark hover:scale-105 duration-150 ease-out"> <VideoLibraryOutlinedIcon className='mr-1 font-bold' />ویدیوهای آموزشی</button>
        <Link to='/signin'><button type="button" className="w-40 bg-orange text-xs text-dark  font-secondFont p-3 rounded-lg shadow-sm shadow-dark flex items-center justify-center   hover:scale-105 duration-150 ease-out"> <ExitToAppIcon className='mr-1' /><span className='font-bold'>وارد شوید</span></button></Link>
        <button type="button" className="w-40 bg-orange text-xs text-dark font-secondFont p-2.5 rounded-lg shadow-sm shadow-dark flex items-center justify-center  hover:scale-105 duration-150 ease-out"> <HowToRegIcon  className='mr-1  mb-1' /><span className='font-bold'>ثبت نام کنید</span></button>
      </div>
      <footer className="basis-2/5 flex flex-col justify-center">
          <div className=' w-1/2 md:w-1/4 m-auto text-dark flex items-center justify-around scale-150'>
            <span className='sm:hover:scale-110 sm:duration-150'><TelegramIcon className="text-dark rounded shadow-sm shadow-dark cursor-pointer"/></span>
            <span className='sm:hover:scale-110 sm:duration-150'><WhatsAppIcon className='rounded shadow-sm shadow-dark cursor-pointer'/></span>
            <span className='sm:hover:scale-110 sm:duration-150'><InstagramIcon className='rounded shadow-sm shadow-dark cursor-pointer'/></span>
            <span className='sm:hover:scale-110 sm:duration-150'><YouTubeIcon className='rounded shadow-sm shadow-dark cursor-pointer'/></span>
          </div>
    </footer>
    </div>
    
  )
}

export default Home