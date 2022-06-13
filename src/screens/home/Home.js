import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Home = () => {
  return (
    <div className="w-full h-screen  fixed top-10 p-2 bg-blueLighter flex flex-col justify-between">
      
      <div className="text-center text-xs basis-1/5 md:font-bold">
        <p className="pt-2 font-secondFont"> به آوای جان خوش آمدید</p>
        <p className="font-firstFont text-base font-semibold pt-2 mt-3 md:text-2xl">کلینیک آوای جان با مدیریت دکتر فاطمه رضابخش</p>
        <p className="text-center font-secondFont">متخصص اعصاب و روان، روان‌درمانگر و مشاور ازدواج و خانواده</p>
      </div>
      <div className="basis-2/5 text-center  flex flex-col items-center justify-start gap-10">
        <button type="button" className="w-40 bg-red text-xs text-blueDark font-semibold font-secondFont p-3 rounded-lg shadow-sm shadow-blueDark"> <VideoLibraryOutlinedIcon className='mr-1' />ویدیوهای آموزشی</button>
        <button type="button" className="w-40 bg-blueLighter text-xs text-blueDark font-semibold font-secondFont p-3 rounded-lg shadow-sm shadow-blueDark flex items-center justify-center"> <ExitToAppIcon className='mr-1' /><span className=''>وارد شوید</span></button>
        <button type="button" className="w-40 bg-blueLighter text-xs text-blueDark font-semibold font-secondFont p-2.5 rounded-lg shadow-sm shadow-blueDark flex items-center justify-center"> <HowToRegIcon  className='mr-1  mb-1' /><span className=''>ثبت نام کنید</span></button>
      </div>
      <footer className="basis-2/5 flex flex-col justify-center">
          <div className='text-blueDark flex items-center justify-around'><TelegramIcon className="rounded shadow-sm shadow-blueDark scale-150"/><WhatsAppIcon className='rounded shadow-sm shadow-blueDark scale-150'/><InstagramIcon className='rounded shadow-sm shadow-blueDark  scale-150'/><YouTubeIcon className='rounded shadow-sm shadow-blueDark  scale-150'/></div>
    </footer>
    </div>
    
  )
}

export default Home