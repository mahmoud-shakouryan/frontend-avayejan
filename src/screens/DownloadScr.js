import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { dlListAction } from "../store/actions/dlListActions";
import ErrorBox from "../components/ErrorBox";
import { toast } from 'react-toastify';
import { removeFromCard } from "../store/actions/cardActions";
import DownloadItem from "../components/DownloadItem";





const DownloadScr = () => {

  const options = { style: { 'font':'shabnam', 'textAlign': 'center','color':'#16001E', 'fontFamily':'firstFont', 'fontSize':'14px', 'fontWeight':'bold'}}
  
  const userSigninState = useSelector( state => state.userSigninReducer );
  const { userInfo } = userSigninState;

  const { videoIdsArr, loading, error } = useSelector( state => state.dlListReducer );
  const { videos } = useSelector( state => state.videoListReducer);

 
  
  
  

 
  
  const [searchParams, setSearchParams] = useSearchParams({});
  let status = searchParams.get('status');
  const order_id = searchParams.get('order_id');
  const payId = searchParams.get('id');

  const myVideos = [];
  if(videoIdsArr){
    for (let id of videoIdsArr){
      const video = videos.find( video => video.id === id);
      myVideos.push(video);
    }
  }

  
  
  
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
    console.log('umad tu useEffect')
    if(!userInfo){
      toast.warn('ابتدا وارد حساب شوید', options);
      return navigate('/signin?redirect=myvideos');
    }
    if(status){
      dispatch(dlListAction(userInfo._id, status, order_id, payId));
       if(+status !== 100){
        toast.error('پرداخت ناموفق', options)
      }
      else if(+status === 100){
         dispatch(removeFromCard(order_id));
         toast.success('پرداخت موفق', options)
       }
    }
    if(!status){
      dispatch(dlListAction(userInfo._id, status = null, order_id, payId));
    }
  },[dispatch]);

  
  return (
    
    <div className="h-screen w-screen bg-theWhite  fixed top-14 flex justify-center gap-3 flex-wrap overflow-y-scroll pb-20">
       { loading ? <div className="w-full font-firstFont font-semibold text-dark text-center">... در حال دریافت</div> : error ? <ErrorBox error={error}/>
       : videoIdsArr.length == 0 ? <div className="w-full font-firstFont font-semibold text-dark text-center"> شما تاکنون هیچ ویدیویی خریداری نکرده‌اید</div>
       : myVideos.length == 0 ?
       (
        <div className="w-full font-firstFont font-semibold text-dark text-center">... </div>
       ):
       (
        myVideos.map( myVideo => <DownloadItem key={myVideo.id} video={myVideo}/>)
       )
       }
    </div>
       
      
  )
}

export default DownloadScr;