import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';



const CardItem = () => {
  return (
    <div className='p-1 w-64 h-80 bg-white flex flex-col rounded-xl shadow-sm shadow-dark sm:hover:scale-105 cursor-pointer duration-150 font-firstFont'>
        <div className="basis-2/6  flex items-center justify-center font-bold">مهارت درست اندیشیدن</div>
          <div className="basis-1/6 text-center"> <button className="w-1/3 bg-orange font-secondFont font-bold text-xs p-1 rounded-xl shadow-sm shadow-dark">توسعه فردی</button></div>
          <div className="basis-1/6  flex  p-1">
            <div className="basis-1/2 flex flex-col rounded-md shadow-sm shadow-dark">
              <span className="basis-1/3  text-center"><AccessAlarmIcon/></span>
              <span className="basis-2/3 flex items-center justify-center font-bold text-xs pt-1"> 00:30':00"</span>
            </div>
            <div className="basis-1/2 flex flex-col rounded-md shadow-sm shadow-dark">
            <span className=" text-center"><PaidOutlinedIcon /></span>
              <span className="flex items-center justify-evenly font-bold text-sm "> <span className='basis-1/3 text-right text-xs'>تومان</span><span className='pt-1 bsis-2/3 text-left text-xs '>99,000</span> </span>
            </div>
          </div>
          <div className="basis-1/6 flex p-1">
            <div className="basis-1/2 flex flex-col rounded-md shadow-sm shadow-dark">
              <span className="basis-1/3 bg-theWhite text-center" title='کاربران پسندیده‌اند'><FavoriteBorderOutlinedIcon/></span>
              <span className="basis-2/3 flex items-center justify-center font-bold text-xs"> 5</span>
            </div>
            <div className="basis-1/2 flex flex-col rounded-md shadow-sm shadow-dark">
            <span className=" text-center" title='تعداد دانلود'><FileDownloadOutlinedIcon /></span>
              <span className="basis-1/2 flex items-center justify-center font-bold text-xs bg-theWhite">123</span>
            </div>
          </div>
          <div className="basis-1/6  p-1 text-xs">
            <button className='bg-orange h-full w-full rounded-md shadow-sm shadow-dark font-bold text-dark'>توضیح بیشتر</button>
          </div>
          <div className='basis-1/6  p-1 text-xs'>
          <button className='bg-orange h-full w-full rounded-md shadow-sm shadow-dark font-bold text-dark'><DeleteOutlineIcon/> </button>
          </div>
    </div>
  )
}

export default CardItem