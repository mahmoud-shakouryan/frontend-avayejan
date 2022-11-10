import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { removeFromCard } from "../store/actions/cardActions.js";
import { toast } from 'react-toastify';




const VideoCard = ({video}) => {

  const navigate = useNavigate();
  const { id, videoName, category, price, duration, imgSrc } = video;
  const TOMAN = price/10;
  
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
        return navigate('/signin?redirect=videos?page=1')
    }
    navigate(`/card/${id}`)
  }

    return (
    <div className='bg-superLightBlue p-1 w-56 sm:w-64 h-72 sm:h-80 bg-white flex flex-col rounded-xl shadow-sm shadow-dark sm:hover:scale-105 duration-150 font-firstFont'>
      <div className="h-1/2 flex flex-col items-center justify-center text-sm sm:text-md font-bold mt-1 "><div className='w-full h-full flex'><img src={imgSrc} className='w-full h-full object-cover rounded-md'/></div></div>
      <div className="text-center font-bold mt-2"><p className='text-[14px]'>{videoName}</p><p className='font-secondFont text-[8px] sm:text-[11px]'>{category}</p></div>
      <div className="p-1 text-xs h-[16%] mt-4">
        <Link to={`/videos/${id}`}><button className='bg-lightBlue h-full w-full rounded-md shadow-sm shadow-dark font-bold text-dark flex items-center justify-center gap-2'> <MoreHorizIcon/><span>توضیح بیشتر</span></button></Link>
      </div>
      <div className='p-1 text-xs h-[16%]'>
      { (cardItems && cardItems.find( cardItem => cardItem.id === id )) ?  <button className='bg-lightBlue h-full w-full rounded-md shadow-sm shadow-dark font-bold text-dark flex items-center justify-center gap-2' onClick={()=>removeFromCartHandler(cardItems.find( cardItem => cardItem.id === id ).id)}><DeleteOutlineOutlinedIcon/><span>حذف از سبد خرید</span></button> : <button className='bg-lightBlue h-full w-full rounded-md shadow-sm shadow-dark font-bold text-dark flex items-center justify-center gap-2' onClick={addToCardHandler}><AddShoppingCartIcon/><span>افزودن به سبد خرید</span> </button> }
      </div>
    </div>
  )
}

export default VideoCard