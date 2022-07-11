import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

const Contact = () => {
  return (
    <div className='h-screen w-screen fixed top-20 flex flex-col  justify-start items-center gap-4 font-firstFont text-dark bg-theWhite'>
        <div className=' w-9/12 h-28 flex flex-col justify-center items-center gap-2'>
            <p className='font-bold'>درباره ما</p>
            <p className='text-sm text-center'>کلینیک آوای جان با مدیریت دکتر فاطمه رضابخش، متخصص اعصاب و روان، روان‌درمانگر و مشاور ازدواج و خانواده، آماده است تا علاوه بر درمان مراجعان و بیماران، سواد روانی جامعه را با دوره‌ها و مطالب آموزشی خود بالابرده تا جامعه‌ای سالم تر و پویاتر داشته باشیم</p>
        </div>
        <div className='w-9/12 h-20 flex flex-col gap-2 justify-center items-center'>
            <div><LocationOnIcon className='scale-125'/></div>
            <p className='text-sm text-center'>رشت، گلسار، کوچه 91 جنوبی، ساختمان مدیکو</p>
        </div>
        <div className='w-9/12 h-20 flex  justify-center items-center'>
            <div className=' basis-1/2 flex flex-col gap-2'>
            <div className='text-center'><PhoneIcon className='scale-125'/></div>
            <p className='text-center text-base font-bold'>013-32124757</p>
            <p className='text-center text-base font-bold'>0935-152-8387</p>
            </div>
            <div className=' basis-1/2 flex flex-col gap-2'>
            <div className='text-center'><AlternateEmailIcon className='scale-125'/></div>
            <p className='text-center text-base font-bold'>info@avayejaan.com</p>
            </div>
            
        </div>
        <div className='bg-theWhite w-9/12 h-20 text-dark flex items-center justify-around'>
            <a href='http://t.me/avaye_jaan' className='sm:hover:scale-110 sm:duration-150' target='_blank'><span  title='تلگرام'><TelegramIcon className="scale-125 text-dark rounded shadow-sm shadow-dark cursor-pointer"/></span></a>
            <a href='https://www.instagram.com/avaye_jaan/' className='sm:hover:scale-110 sm:duration-150' target='_blank'><span  title='اینستاگرام'><InstagramIcon className='scale-125 rounded shadow-sm shadow-dark cursor-pointer'/></span></a>
            <span className='sm:hover:scale-110 sm:duration-150' title='یوتیوب'><YouTubeIcon className='scale-125 rounded shadow-sm shadow-dark cursor-pointer'/></span>
            <a href='https://www.aparat.com/avaclinic' className='sm:hover:scale-110 sm:duration-150' target='_blank'><span  title='آپارات'><OndemandVideoIcon className='scale-125 rounded shadow-sm shadow-dark cursor-pointer'/></span></a>
          </div>
    </div>
  )
}

export default Contact