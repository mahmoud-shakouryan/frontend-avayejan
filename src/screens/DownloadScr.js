import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import ErrorBox from "../components/ErrorBox";
import { toast } from 'react-toastify';
import { removeFromCard } from "../store/actions/cardActions";
import DownloadItem from "../components/DownloadItem";
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import { getPaymentStatusAction } from "../store/actions/payActions";
import { myVidsAction, videoList } from "../store/actions/videoActions";






const DownloadScr = () => {

  const options = { style: { 'font':'shabnam', 'textAlign': 'center','color':'#16001E', 'fontFamily':'firstFont', 'fontSize':'14px', 'fontWeight':'bold'}};
  
  const userSigninState = useSelector( state => state.userSigninReducer );
  const { userInfo } = userSigninState;
  let userId = ''
  if(userInfo){
    userId = userInfo._id;
  }
  
  //const { loading, error } = useSelector( state => state.paymentStatusReducer);
  const { loading, error, myVidsArr } = useSelector( state => state.myVidsReducer );
  const { videos } = useSelector( state => state.videoListReducer);
 
  
  const [searchParams] = useSearchParams({});
  const status = searchParams.get('status');
  const order_id = searchParams.get('order_id');
  const payId = searchParams.get('id');


  


  const myVideos = [];
  if(myVidsArr.length > 0){
    for (let id of myVidsArr){
      const video = videos.find( video => video.id === id);
      myVideos.push(video);
    }
  }


  const navigate = useNavigate();
  const myVidsHandler = () => {
    if(userId){
      dispatch(myVidsAction(status, userInfo._id, payId, order_id))
    }
    else{
      toast.warn('ابتدا وارد حساب شوید', options);
      return navigate('/signin?redirect=myvideos');
    }
  }
  

  
  const dispatch = useDispatch();
  useEffect(()=>{
    console.log('useEffect')
    dispatch(videoList(1));
    dispatch(getPaymentStatusAction(status, order_id, payId));
    if(+status === 10) dispatch(removeFromCard(order_id))
  },[dispatch])
  
  // useEffect(()=>{
  //   console.log('umad 2nd useEffect')
  //     if(userInfo){
  //       console.log('umad tu if(userInfo)')
  //       dispatch(myVidsAction(status, userInfo._id, payId, order_id))
  //     }
      
  // },[dispatch, userId])
  
  return (
    
    <div className="h-screen w-screen bg-theWhite  fixed top-24 flex justify-center gap-3 flex-wrap overflow-y-scroll pb-28">
      <div className="w-full h-9 fixed top-12 left-0 text-center"><button onClick={myVidsHandler}  className="font-firstFont text-xs bg-theWhite border border-dark p-2 rounded text-dark shadow-sm shadow-dark sm:hover:scale-105 ease-out duration-150"><VideoLibraryOutlinedIcon className='mr-2'/>برای مشاهده ویدیوهای خود کلیک کنید  </button></div>
      {
        loading ? <p>در حال دریافت</p> : error ? <ErrorBox error={error}/> :
        (
          myVideos.map( myVideo => <DownloadItem key={myVideo.id} video={myVideo}/>)
        )
      }
      </div>
  )
}

export default DownloadScr;