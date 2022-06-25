import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import ErrorBox from "../components/ErrorBox";
import { videoDetails } from "../store/actions/videoActions";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const VideoDetail = () => {

    const videoDetailsState = useSelector(state => state.videoDetailsReducer);
    const { video, loading, error } = videoDetailsState;
    const { videoName, category, desc, price, duration, likes, numOfDownloads } = video;

    const { id } = useParams();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams({});
    const dispatch = useDispatch();
    

    useEffect(()=>{
        dispatch(videoDetails(id));
    }, [dispatch, id]);
    
    
    // if(!video){                 //hamoon error chon az videoRouter barmigarder vaghti dide video'ee ba in id nist, dar vaghe kare hamin erro ro anjam mide.          
    //     console.log('umad')
    //     return <div>'توضیحات این ویدیو یافت نشد'</div>
    // }
    

  return (
    <div className="bg-theWhite w-screen h-screen text-dark ">
    { loading ? <div className="w-full fixed top-20 p-10 text-center bg-theWhite font-firstFont text-lg font-extrabold text-dark">... در حال دریافت </div> : error ? <ErrorBox error={error} /> : (
    <div  className=" w-screen h-screen fixed top-10 pt-5 flex flex-col items-center justify-start gap-2 bg-theWhite">
        
            <p className="font-bold text-md font-firstFont">{videoName}</p>
            <p className=" font-secondFont text-xs bg-theWhite font-bold p-1 rounded-md shadow-dark shadow-sm">{category}</p>
            <p className="font-firstFont font-bold shadow-dark shadow-md rounded-md p-2 text-xs">مدرس: دکتر فاطمه رضابخش</p>
            <p className="text-right bg-theWhite  w-11/12 md:w-3/4 h-1/2 p-3 sm:p-5 leading-7 sm:leading-8 tracking-wide sm:tracking-wider font-firstFont text-xs sm:text-sm rounded-md shadow-sm shadow-dark overflow-y-auto"  >{desc}</p>
            <div className="w-full  flex items-center justify-center gap-8 text-xs sm:mt-2">
                <span className="flex flex-col  font-bold"><span className="text-center"><AccessAlarmIcon/></span><span className="text-center ">{duration}</span></span>
                <span className="flex flex-col  font-bold"><span className="text-center"><PaidOutlinedIcon/></span><span className="text-center flex"><span className="font-secondFont">ت</span><span>{price}</span></span></span>
                <span className="flex flex-col  font-bold"><span className="text-center"><FavoriteBorderOutlinedIcon/></span><span className="text-center">{likes}</span></span>
                <span className="flex flex-col font-bold"><span className="text-center"><FileDownloadOutlinedIcon/></span><span className="text-center">{numOfDownloads}</span></span>
            </div>
            <div className=" w-full flex items-center justify-center gap-10 text-xs font-firstFont sm:mt-10">
                <Link to='/videos' className="bg-orange p-2 rounded shadow-dark shadow-sm w-2/5 sm:w-40 h-10"><button className="w-full flex items-center justify-between"><span><ArrowBackIcon/></span><span className="font-bold">برگشت به ویدیوها</span> </button></Link>
                <button className="bg-orange p-2 rounded shadow-dark shadow-sm w-2/5 sm:w-40 h-10 flex items-center justify-between"><span><AddShoppingCartIcon/></span><span className="font-bold">افزودن به سبد خرید</span></button>
            </div>
        
    </div>
    )}
    </div>
  )
}

export default VideoDetail