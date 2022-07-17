import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { videoList } from "../store/actions/videoActions";
import { useNavigate, useSearchParams } from "react-router-dom";
import { dlListAction } from "../store/actions/dlListActions";
import ErrorBox from "../components/ErrorBox";
import { toast } from 'react-toastify';
import LinkBar from "../components/LinkBar";
import { cardEmpty } from "../store/actions/cardActions";
import DownloadItem from "../components/DownloadItem";





const DownloadScr = () => {
  const [showDlBar, setshowDlBar] = useState(false);
  
  const userSigninState = useSelector( state => state.userSigninReducer );
  const { userInfo } = userSigninState;

  const { videoIdsArr, loading, error } = useSelector( state => state.dlListReducer );
  const { videos } = useSelector( state => state.videoListReducer);
  

 
  
  const [searchParams] = useSearchParams();
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
  const titles = [];
  myVideos.map(myVideo => myVideo.videoTitle.map(videoTitle => titles.push(videoTitle)));
  console.log(titles)

    const dispatch = useDispatch();
    const downloadHandler = () =>{
      setshowDlBar(!showDlBar);
    }
   
  
  
  const navigate = useNavigate();
  useEffect(()=>{
    console.log('umad tu useEffect')
    if(!userInfo){
      toast.warn('ابتدا وارد حساب شوید');
      return navigate('/signin');
    }
    if(status){
      dispatch(dlListAction(userInfo._id, status, order_id, payId));
       dispatch(videoList());
       toast.success('پرداخت موفق')
       dispatch(cardEmpty());
    }
    if(!status){
    console.log('umad tu if(!status)')
      dispatch(dlListAction(userInfo._id, status = null, order_id, payId));
    }
  },[dispatch]);

  
  return (
    <>
    <div className="h-screen w-screen bg-theWhite  fixed top-14 flex justify-center gap-3">
       { loading ? <div className="w-full font-firstFont font-semibold text-dark text-center">... در حال دریافت</div> : error ? <ErrorBox error={error}/>
       : videoIdsArr.length == 0 ? <div className="w-full font-firstFont font-semibold text-dark text-center"> شما تاکنون هیچ ویدیویی خریداری نکرده‌اید</div>
       : myVideos.length == 0 ?
       (
        <div className="w-full font-firstFont font-semibold text-dark text-center">... </div>
       ):
       (
        myVideos.map( myVideo => <DownloadItem key={myVideo.id} video={myVideo} downloadHandler={downloadHandler}/>)
       )
       }
    </div>
       <ul className="h-36 w-full fixed bottom-0 flex flex-row-reverse justify-center items-center gap-5">
       { showDlBar ? titles.map(title => (
       <li key={Math.random()}><LinkBar title={title.title}/></li>
       ))
       : null
      }
       </ul>
       </>
  )
}

export default DownloadScr;