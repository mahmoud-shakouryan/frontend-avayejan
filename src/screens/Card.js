import { useEffect } from "react";
import { addToCard, removeFromCard } from "../store/actions/cardActions";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import VideoCard from "../components/VideoCard";








const Card = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const cardState = useSelector( state => state.cardReducer );
  const { cardItems } = cardState;
  const userSigninState = useSelector( state => state.userSigninReducer );
  const { userInfo } = userSigninState;

  const dispatch = useDispatch();
  

  useEffect(()=>{
    if(id){
      dispatch(addToCard(id));
    }
  }, [dispatch, id]);


  return (
    <div className="h-screen w-screen bg-theWhite  fixed top-10">
      <div className=" bg-red h-14 w-full">dlljdfjldjf</div>
      <div className=" flex flex-wrap justify-around  items-start gap-4 pb-44  pr-2 pl-2 pt-4  w-screen h-screen overflow-y-scroll">
        { (cardItems && cardItems.length === 0) ? (
          <div className="w-full flex flex-col items-center gap-5">
            <div className="bg-red text-center  p-4 font-firstFont rounded w-60 flex items-center justify-center gap-2"><span><ProductionQuantityLimitsIcon className='scale-110'/></span> <span className="text-sm font-semibold font-secondFont">سبد خرید خالی است</span></div>
            <Link to='/videos'><button type="button" className="w-40 bg-orange text-xs  text-dark font-bold font-secondFont p-3 rounded-lg shadow-sm shadow-dark sm:hover:scale-105 duration-150 ease-out"> <span><VideoLibraryOutlinedIcon className='mr-1 font-bold' /></span><span>ویدیوهای آموزشی</span></button></Link> 
          </div>
        ): (
         cardItems.map( cardItem => <VideoCard key={ cardItems.find(cardItem => cardItem.id) } video={cardItem} />)
        )}
      </div>
      <div className="bg-orange h-16 w-screen fixed bottom-0">dfdfdf</div>
    </div>
  )
}

export default Card