import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import ErrorBox from "../components/ErrorBox";
import { videoDetails } from "../store/actions/videoActions";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import SdStorageIcon from '@mui/icons-material/SdStorage';
import StorageIcon from '@mui/icons-material/Storage';
import { addToCard } from "../store/actions/cardActions";
import { toast } from "react-toastify";
import { enToPerNum } from "../utils/utils";

const VideoDetail = () => {
  
    const { id } = useParams();
    const dispatch = useDispatch();
    dispatch(videoDetails(id));

    const videoDetailsState = useSelector(state => state.videoDetailsReducer);
    const { video, loading, error } = videoDetailsState;
    const { videoName, category, desc, price, duration, vol, videoTitle } = video;
    const TOMAN = price/10;

    const { userInfo } = useSelector( state => state.userSigninReducer );

    const navigate = useNavigate();
    
    let parts = 0;
    if(Object.keys(video).length > 0){
      parts = videoTitle.length;
     }else{
      parts = 0;
     }
    
    const options = { autoClose: 2000 ,style: { 'font':'shabnam', 'textAlign': 'center','color':'#16001E', 'fontFamily':'firstFont', 'fontSize':'14px', 'fontWeight':'bold'}}
    const addToCardHandler = () => {
      if(userInfo){
        addToCard(id)
        return navigate (`/card/${id}`)
      }else if(!userInfo){
        toast.warn('ابتدا باید وارد شوید', options)
        return navigate(`/signin?redirect=videos/${id}`)
      }
    }
    
    // useEffect(()=>{
    // }, [dispatch, id]);
    


  return (
    <div className="bg-theWhite w-screen h-screen text-dark ">
    { loading ? <div className="w-full fixed top-20 p-10 text-center bg-theWhite font-firstFont text-lg font-extrabold text-dark">... در حال دریافت </div> : error ? <ErrorBox error={error} /> : (
    <div  className=" w-screen h-screen fixed top-10 pt-5 flex flex-col items-center justify-start gap-2 bg-theWhite">
        
            <p className="font-bold text-md font-firstFont text-xl sm:text-2xl">{videoName}</p>
            <p className=" font-secondFont text-xs font-bold">{category}</p>
            <p className="font-firstFont font-bold  p-2 text-xs">مدرس: دکتر فاطمه رضابخش</p>
            <p className="text-right bg-theWhite  w-11/12 md:w-3/4 h-1/2 p-3 sm:p-5 leading-7 sm:leading-8 tracking-wide sm:tracking-wider font-firstFont text-xs sm:text-sm rounded-md shadow-sm shadow-dark overflow-y-auto"  >{desc}</p>
            <div className="w-full  flex items-center justify-center gap-8 text-xs sm:mt-2">
                <span className="flex flex-col  font-bold"><span className="text-center"><AccessAlarmIcon/></span><span className="text-center font-firstFont">{enToPerNum(duration)}</span></span>
                <span className="flex flex-col  font-bold"><span className="text-center"><PaidOutlinedIcon/></span><span className="text-center flex gap-2"><span className="font-secondFont">تومان</span><span className="font-firstFont">{enToPerNum(TOMAN)}</span></span></span>
                <span className="flex flex-col  font-bold"><span className="text-center"><SdStorageIcon/></span><span className="text-center flex flex-row-reverse gap-1 font-secondFont"><span>{ enToPerNum(vol) }</span><span>مگابایت</span></span></span>
                <span className="flex flex-col font-bold"><span className="text-center"><StorageIcon/></span><span className="text-center flex flex-row-reverse gap-1 font-secondFont"><span>{ enToPerNum(parts) }</span><span>فایل</span></span></span>
            </div>
            <div className=" w-full flex items-center justify-center gap-10 text-xs font-firstFont sm:mt-10">
                <Link to='/videos?page=1' className="bg-lightBlue p-2 rounded shadow-dark shadow-sm w-2/5 sm:w-40 h-10"><button className="w-full flex items-center justify-between"><span><ArrowBackIcon/></span><span className="font-bold">برگشت به ویدیوها</span> </button></Link>
                <button onClick={addToCardHandler} className="bg-lightBlue p-2 rounded shadow-dark shadow-sm w-2/5 sm:w-40 h-10 flex items-center justify-between"><span><AddShoppingCartIcon/></span><span className="font-bold">افزودن به سبد خرید</span></button>
            </div>
        
    </div>
    )}
    </div>
  )
}

export default VideoDetail