import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { removeFromCard } from "../store/actions/cardActions.js";
import { ToastContainer ,toast } from 'react-toastify';
import { useState } from 'react';




const VideoCard = ({video}) => {

  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const { id, videoName, category, likes, numOfDownloads, price, duration } = video;
  
  const cardState = useSelector( state => state.cardReducer );
  const { cardItems } = cardState;

  const userSigninState = useSelector( state => state.userSigninReducer );
  const { userInfo } = userSigninState;
  
  const options = { style: { 'font':'shabnam', 'textAlign': 'center','color':'#16001E', 'fontFamily':'firstFont', 'fontSize':'14px', 'fontWeight':'bold'} }
  
  
  const dispatch = useDispatch();
  const removeFromCartHandler = (videoIdToRemove) => {
    dispatch(removeFromCard(videoIdToRemove));
  };

    
    

    const addToCardHandler = () => {
      if(!userInfo){
         toast.warn('ابتدا وارد حساب شوید', options);
         return navigate('/signin?redirect=videos')
      }
      navigate(`/card/${id}`)
    }

    return (
      <>
    <div className='p-1 w-64 h-80 bg-white flex flex-col rounded-xl shadow-sm shadow-dark sm:hover:scale-105 cursor-pointer duration-150 font-firstFont'>
          <div className="basis-2/6  flex items-center justify-center font-bold">{videoName}</div>
          <div className="basis-1/6 text-center"> <button className="w-1/3 bg-orange font-secondFont font-bold text-xs p-1 rounded-xl shadow-sm shadow-dark">{category}</button></div>
          <div className="basis-1/6  flex  justify-around p-1">
            <div className="basis-2/5 flex flex-col rounded-sm shadow-sm shadow-dark">
              <span className="basis-1/3  text-center"><AccessAlarmIcon/></span>
              <span className="basis-2/3 flex items-center justify-center font-bold text-xs pt-1"> {duration}</span>
            </div>
            <div className="basis-2/5 flex flex-col rounded-sm shadow-sm shadow-dark">
            <span className=" text-center"><PaidOutlinedIcon /></span>
              <span className="flex items-center justify-evenly font-bold text-sm "> <span className='basis-1/3 text-right text-xs'>تومان</span><span className='pt-1 bsis-2/3 text-left text-xs '>{price/10}</span> </span>
            </div>
          </div>
          <div className="basis-1/6 flex justify-around p-1 ">
            <div className="basis-2/5 flex flex-col rounded-sm shadow-sm shadow-dark">
              <span className="basis-1/3 bg-theWhite text-center" title='کاربران پسندیده‌اند'><FavoriteBorderOutlinedIcon /></span>
              <span className="basis-2/3 flex items-center justify-center font-bold text-xs"> {likes}</span>
            </div>
            <div className="basis-2/5 flex flex-col rounded-sm shadow-sm shadow-dark">
            <span className=" text-center" title='تعداد دانلود'><FileDownloadOutlinedIcon /></span>
              <span className="basis-1/2 flex items-center justify-center font-bold text-xs bg-theWhite">{numOfDownloads}</span>
            </div>
          </div>
          <div className="basis-1/6  p-1 text-xs">
            <Link to={`/videos/${id}`}><button className='bg-orange h-full w-full rounded-md shadow-sm shadow-dark font-bold text-dark flex items-center justify-center gap-2'> <MoreHorizIcon/><span>توضیح بیشتر</span></button></Link>
          </div>
          <div className='basis-1/6  p-1 text-xs'>
          { (cardItems && cardItems.find( cardItem => cardItem.id === id )) ?  <button className='bg-orange h-full w-full rounded-md shadow-sm shadow-dark font-bold text-dark flex items-center justify-center gap-2' onClick={()=>removeFromCartHandler(cardItems.find( cardItem => cardItem.id === id ).id)}><DeleteOutlineOutlinedIcon/><span>حذف از سبد خرید</span></button> : <button className='bg-orange h-full w-full rounded-md shadow-sm shadow-dark font-bold text-dark flex items-center justify-center gap-2' onClick={addToCardHandler}><AddShoppingCartIcon/><span>افزودن به سبد خرید</span> </button> }
          

          </div>
    </div>
    </>
  )
}

export default VideoCard