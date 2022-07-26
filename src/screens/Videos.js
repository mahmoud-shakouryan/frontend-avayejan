import VideoCard from "../components/VideoCard"
import {useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { videoList } from "../store/actions/videoActions";
import ErrorBox from "../components/ErrorBox";
import { Link, useSearchParams } from "react-router-dom";

const Videos = () => {

  const videoListState = useSelector(state =>  state.videoListReducer)
  const { curPageVids, videos, loading, error } = videoListState;

  const btnsQty = Math.ceil(videos.length/4);
  const paginationBtnsArr = [...Array(btnsQty).keys()];

  const [searchParams] = useSearchParams({});
  const page = [];
  for (const entry of searchParams.entries()) {
      page.push(entry)
  }

  

  const dispatch = useDispatch();
  useEffect(()=>{
    if(!+searchParams.get('page')){
      dispatch(videoList(0));       
    }
    else if(searchParams.get('page')){
      dispatch(videoList(+searchParams.get('page')))
    }
  },[dispatch, searchParams.get('page')])


  return (
    <div className="h-screen w-screen bg-theWhite  fixed top-10">
      <div className=" flex flex-wrap justify-around  items-start gap-4 pb-10  pr-2 pl-2 pt-4  w-screen h-screen overflow-y-scroll">
      { loading ? <div className="w-full font-firstFont font-semibold text-dark text-center">... در حال دریافت</div> : error ? <ErrorBox error={error}/> 
      :(
        curPageVids.map(video => (
          <VideoCard key={video.id} video={video}/>
        ))
      )}
      <div className=" h-12 w-full flex justify-center gap-5 select-none">
       { paginationBtnsArr.length > 0 ? paginationBtnsArr.map( i => <Link key={i} to={`/videos?page=${i+1}`} ><button className={` ${i+1 === +searchParams.get('page') ? 'bg-dark' : 'bg-opactiy text'}  w-8 h-8 text-red text-sm font-bold rounded-full shadow-dark shadow-sm`}>{i + 1}</button></Link>) : loading ? null : null }
      </div>
      </div>
    </div>
  )
}

export default Videos


