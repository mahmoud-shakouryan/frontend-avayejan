import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import ErrorBox from "../components/ErrorBox";
import { videoDetails } from "../store/actions/videoActions";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import SdStorageIcon from "@mui/icons-material/SdStorage";
import StorageIcon from "@mui/icons-material/Storage";
import { addToCard } from "../store/actions/cardActions";
import { toast } from "react-toastify";
import { enToPerNum, getHahtagForm } from "../utils/utils";
import LoadingSpinner from "../components/LinkBar";

const VideoDetail = () => {
  const { id } = useParams();
  const { userInfo } = useSelector((state) => state.userSigninReducer);
  const videoDetailsState = useSelector((state) => state.videoDetailsReducer);
  const { video, loading, error } = videoDetailsState;
  const { videoName, category, desc, price, duration, vol, videoTitle, imgSrc } = video;
  
  const TOMAN = price / 10;
  let categoryHashtagForm;
  if(category){
    categoryHashtagForm = getHahtagForm(category)
  }


  const navigate = useNavigate();

  let parts;
  if (Object.keys(video).length > 0) {
    parts = videoTitle.length;
  } else {
    parts = 0;
  }

  const options = {
    autoClose: 2000,
    style: {
      font: "shabnam",
      textAlign: "center",
      color: "#16001E",
      fontFamily: "firstFont",
      fontSize: "14px",
      fontWeight: "bold",
    },
  };
  const addToCardHandler = () => {
    if (userInfo) {
      addToCard(id);
      return navigate(`/card/${id}`);
    } else if (!userInfo) {
      toast.warn("ابتدا باید وارد شوید", options);
      return navigate(`/signin?redirect=videos/${id}`);
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(videoDetails(id));
  }, [dispatch, id]);

  if (!video) {
    return (
      <div className="fixed top-0 left-0 bottom-0 right-0">
      <div className="fixed top-0 left-0 bottom-0 right-0 z-100 bg-opacity2" />
      <div className="flex flex-col items-center justify-center h-2/3 w-2/3 relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-superLightBlue shadow-md shadow-dark rounded z-101">
        <LoadingSpinner/>
      </div>
    </div>
    );
  }
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 font-secondFont">
      <div className="fixed top-0 left-0 bottom-0 right-0 z-100 bg-opacity2" />
      <div className="relative overflow-y-auto scroll-smooth flex flex-col items-center justify-start h-1/3 sm:h-1/2 w-11/12 sm:w-2/3 relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-superLightBlue shadow-md shadow-dark rounded z-101 pt-1">
        <div className="">{videoName}</div>
        <div className="text-[10px] text-hashtag">{categoryHashtagForm}</div>
        <div className='text-sm text-right p-4'>{desc}</div>
        
      </div>
    </div>
  );
};

export default VideoDetail;
