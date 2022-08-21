import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import ErrorBox from "../components/ErrorBox";
import { toast } from 'react-toastify';
import { removeFromCard } from "../store/actions/cardActions";
import DownloadItem from "../components/DownloadItem";
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import { getPaymentStatusAction } from "../store/actions/payActions";
import { myVidsAction } from "../store/actions/videoActions";






const DownloadScr = () => {

  const options = { style: { 'font':'shabnam', 'textAlign': 'center','color':'#16001E', 'fontFamily':'firstFont', 'fontSize':'14px', 'fontWeight':'bold'}}
  
  // const userSigninState = useSelector( state => state.userSigninReducer );
  // const { userInfo } = userSigninState;
  
  const { myVidsArr, loading, error } = useSelector( state => state.myVidsReducer );
  console.log('myVidsArr', myVidsArr)
  const { videos } = useSelector( state => state.videoListReducer);
 
  
  const [searchParams] = useSearchParams({});
  let status = searchParams.get('status');
  const order_id = searchParams.get('order_id');
  const payId = searchParams.get('id');


  


  const myVideos = [];
  if(myVidsArr.length > 0){
    for (let id of myVidsArr){
      const video = videos.find( video => video.id === id);
      myVideos.push(video);
    }
  }
  
  let userId = '';
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
    console.log('1st useEffect')
    if(JSON.parse(localStorage.getItem('userInfo'))) {
      userId = JSON.parse(localStorage.getItem('userInfo'))._id
    };
    if(status){
      dispatch(getPaymentStatusAction(status, order_id, payId))
    }
  },[dispatch]);

  useEffect(()=>{
    // if(!userInfo){
    //   toast.warn('ابتدا وارد حساب شوید', options);
    //   return navigate('/signin?redirect=myvideos');
    // }
    if(status && userId){
      dispatch(myVidsAction(status, userId, payId, order_id))
       if(+status === 10){
        toast.error('پرداخت ناموفق', options)
      }
      else if(+status !== 10){
         dispatch(removeFromCard(order_id));
         toast.success('پرداخت موفق', options)
       }
    }
    if(!status && userId){
      dispatch(myVidsAction(status, userId, payId, order_id))
    }
  },[dispatch]);

 
  
  return (
    
    <div className="h-screen w-screen bg-theWhite  fixed top-14 flex justify-center gap-3 flex-wrap overflow-y-scroll pb-20">
       { loading ? <div className="w-full font-firstFont font-semibold text-dark text-center">... در حال دریافت</div> : error ? <ErrorBox error={error}/>
       : myVidsArr.length == 0 ? <div className="w-full font-firstFont font-semibold text-dark text-center"><div className="mb-5"> شما تاکنون هیچ ویدیویی خریداری نکرده‌اید</div><div className="w-full flex justify-center"><Link to='/videos'><button  type="button" className="w-40 bg-orange text-xs text-dark font-secondFont p-2.5 rounded-lg shadow-sm shadow-dark flex items-center justify-center  sm:hover:scale-105 duration-150 ease-out"> <span><VideoLibraryOutlinedIcon  className='mr-1  mb-1' /></span><span className='font-bold'>ویدیوهای آموزشی</span></button></Link></div></div>
       : myVideos.length == 0 ?
       (
        <div className="w-full font-firstFont font-semibold text-dark text-center">شما تاکنون هیچ ویدیویی خریداری نکرده‌اید </div>
       ):
       (
        myVideos.map( myVideo => <DownloadItem key={myVideo.id} video={myVideo}/>)
       )
       }
    </div>
       
      
  )
}

export default DownloadScr;