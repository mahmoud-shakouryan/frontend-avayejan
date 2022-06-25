import VideoCard from "../components/VideoCard"
import {useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { videoList } from "../store/actions/videoActions";
import ErrorBox from "../components/ErrorBox";

const Videos = () => {

  const videoListState = useSelector(state =>  state.videoListReducer)
  const { videos, loading, error } = videoListState;
  

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(videoList());               //chera parantez bezaram log konam un bala state state ro 3 bar log mikone(engar 3 bar render karde) va bedoone parantez yek bar.
  },[dispatch]);


  return (
    <div className="h-screen w-screen bg-theWhite  fixed top-10">
      <div className=" bg-red h-14 w-full">dlljdfjldjf</div>
      <div className=" flex flex-wrap justify-around  items-start gap-4 pb-44  pr-2 pl-2 pt-4  w-screen h-screen overflow-y-scroll">
      { loading ? <div className="w-full font-firstFont font-semibold text-dark text-center">... در حال دریافت</div> : error ? <ErrorBox error={error}/> 
      :(
        videos.map(video => (
          <VideoCard key={video.id} video={video}/>
        ))
      )}
      </div>
      <div className="bg-orange h-16 w-screen fixed bottom-0">dfdfdf</div>
    </div>
  )
}

export default Videos



// moghe'ee ke oon balaee fixed nabashe

{/* <div className="h-screen w-screen bg-theWhite  overflow-y-scroll">
      <div className=" bg-red h-14 w-full mt-10">dlljdfjldjf</div>
      <div className=" flex flex-wrap justify-around  items-center gap-4 pb-5 pt-5 pr-2 pl-2  w-screen ">
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      </div>
    </div> */}