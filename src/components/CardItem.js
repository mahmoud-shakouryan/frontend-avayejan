import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {  removeFromCard } from "../store/actions/cardActions.js";
import { toast } from 'react-toastify';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import { pay } from '../store/actions/payActions.js';




const CardItem = ({video}) => {



  const navigate = useNavigate();
  const { id, videoName, category, price, duration } = video;
  const TOMAN = price/10;
  
  const cardState = useSelector( state => state.cardReducer );
  const { cardItems } = cardState;

  const userSigninState = useSelector( state => state.userSigninReducer );
  const { userInfo } = userSigninState;
  
  const payState = useSelector( state => state.payReducer );
  const { error, loading, payment } = payState;
  
  
  const dispatch = useDispatch();
  const removeFromCartHandler = (videoIdToRemove) => {
    dispatch(removeFromCard(videoIdToRemove));
  };

    
    

    const addToCardHandler = () => {
      if(!userInfo){
         toast.warn('ابتدا وارد حساب شوید');
         return navigate('/signin')
      }
      navigate(`/card/${id}`)
    }

    const payHandler = () =>{
      dispatch(pay(price, id));
    }
    

    return (
      <>
    <div className='p-1 w-72 h-72 bg-white flex flex-col rounded-xl shadow-sm shadow-dark sm:hover:scale-105  duration-150 font-firstFont'>
          <div className="basis-2/5  flex flex-col items-center justify-center gap-3 font-bold"><div>{videoName}</div><div className="text-center"> <button className="w-full bg-orange font-secondFont font-bold text-xs p-1 rounded-xl shadow-sm shadow-dark">{category}</button></div></div>
          
          <div className="basis-1/5  flex  justify-around p-1">
            <div className="basis-2/5 flex flex-col rounded-sm shadow-sm shadow-dark">
              <span className="basis-1/3  text-center"><AccessAlarmIcon/></span>
              <span className="basis-2/3 flex items-center justify-center font-bold text-xs pt-1"> {duration}</span>
            </div>
            <div className="basis-2/5 flex flex-col rounded-sm shadow-sm shadow-dark">
            <span className=" text-center"><PaidOutlinedIcon /></span>
              <span className="flex items-center justify-evenly font-bold text-sm "> <span className='basis-1/3 text-right text-xs'>تومان</span><span className='pt-1 bsis-2/3 text-left text-xs '>{TOMAN.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span> </span>
            </div>
          </div>
          <div className='basis-1/5  p-1 text-xs'>
          { (cardItems && cardItems.find( cardItem => cardItem.id === id )) ?  <button className=' h-full w-full rounded-md shadow-sm shadow-dark font-bold text-dark flex items-center justify-center gap-2' onClick={()=>removeFromCartHandler(cardItems.find( cardItem => cardItem.id === id ).id)}><DeleteOutlineOutlinedIcon/><span>حذف از سبد خرید</span></button> : <button className='bg-orange h-full w-full rounded-md shadow-sm shadow-dark font-bold text-dark flex items-center justify-center gap-2' onClick={addToCardHandler}><AddShoppingCartIcon/><span>افزودن به سبد خرید</span> </button> }
          </div>
          <div className="basis-1/5 p-1 text-xs">
          { payment ? <button  className='bg-dark text-theWhite font-thin h-full w-full rounded-md shadow-sm shadow-dark  flex items-center justify-center gap-3'><a  href={payment} className='w-full h-full flex items-center justify-center'> برو به درگاه</a></button> :<button className='bg-dark text-theWhite font-thin h-full w-full rounded-md shadow-sm shadow-dark  flex items-center justify-center gap-3' onClick={payHandler}>{ loading? <CurrencyExchangeOutlinedIcon className='font-thin animate-spin'/> :<CurrencyExchangeOutlinedIcon className='font-thin'/>} {loading ? <span>آغاز فرایند پرداخت</span> : <span>پرداخت</span>}</button>}
          </div>
    </div>
    </>
  )
}

export default CardItem;

