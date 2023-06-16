import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
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
import { toastStyle as options } from "../utils/styles";


const VideoDetail = ({ id, showModalHandler, closeModalHandler }) => {
  const { userInfo } = useSelector((state) => state.userSigninReducer);
  const videoDetailsState = useSelector((state) => state.videoDetailsReducer);
  const { video, loading, error } = videoDetailsState;
  const {
    videoName,
    category,
    desc,
    price,
    duration,
    vol,
    videoTitle,
    imgSrc,
  } = video;

  const formatttedPrice = (price / 10)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const Toman = enToPerNum(formatttedPrice);
  let categoryHashtagForm;
  if (category) {
    categoryHashtagForm = getHahtagForm(category);
  }

  const navigate = useNavigate();

  let parts;
  if (Object.keys(video).length > 0) {
    parts = videoTitle.length;
  } else {
    parts = 0;
  }

  const videoPropsStyle = "flex flex-col items-center justify-center text-dark";
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

  if (!video.category) {
    return (
      <div className="fixed top-0 left-0 bottom-0 right-0">
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-opacity" />
        <div className="flex flex-col items-center justify-center h-2/3 w-2/3 relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-superLightBlue shadow-md shadow-dark rounded">
          <LoadingSpinner />
        </div>
      </div>
    );
  }
  return (
    <div className="h-screen w-screen fixed top-0 bottom-0 right-0 left-0 font-secondFont bg-opacity flex flex-col justify-start items-center gap-2 pt-40">
      <button
        onClick={closeModalHandler}
        className="fixed right-1/2 translate-x-1/2 top-10 text-[70px] text-vio font-bold px-5 font-firstFont"
      >
        &times;
      </button>
      <div className="relative flex flex-col items-center justify-start max-h-60 overflow-y-auto w-11/12 sm:w-2/3  bg-superLightBlue rounded pt-1">
        <div className="font-bold">{videoName}</div>
        <div className="text-[10px] text-hashtag">{categoryHashtagForm}</div>
        <p className="text-[12px] sm:text-sm text-right p-4">{desc}</p>
      </div>
      <div className="bg-lightBlue rounded w-11/12 sm:w-2/3 lg:w-2/3 h-20 flex items-center justify-around gap-4 md:justify-center md:gap-16">
        <span className={videoPropsStyle}>
          <span>
            <AccessAlarmIcon />
          </span>
          <span className="text-[11px] md:font-bold">
            {enToPerNum(duration)}
          </span>
        </span>
        <span className={videoPropsStyle}>
          <span>
            <PaidOutlinedIcon />
          </span>
          <span className="flex gap-1">
            <span className="text-[10px] flex items-center justify-center">
              تومان
            </span>
            <span className="text-[11px] md:font-bold">{Toman}</span>
          </span>
        </span>
        <span className={videoPropsStyle}>
          <span>
            <SdStorageIcon />
          </span>
          <span className="flex gap-1">
            <span className="text-[10px] flex items-center justify-center">
              مگابایت
            </span>
            <span className="text-[11px] md:font-bold">{enToPerNum(vol)}</span>
          </span>
        </span>
        <span className={videoPropsStyle}>
          <span>
            <span>
              <StorageIcon />
            </span>
          </span>
          <span className="flex gap-1">
            <span className="text-[10px] flex items-center justify-center">
              فایل
            </span>
            <span className="text-[11px] md:font-bold">
              {enToPerNum(parts)}
            </span>
          </span>
        </span>
      </div>
      <div className="rounded w-11/12 sm:w-2/3 lg:w-2/3 h-20 flex items-center justify-around">
        <button
          onClick={closeModalHandler}
          className="w-32 sm:w-40 bg-vio rounded border border-vio text-dark font-bold p-2  flex flex-col justify-center"
        >
          <span className="w-full flex items-center justify-center">
            <ArrowBackIcon />
          </span>
          <span className="w-full flex items-center justify-center text-[10px] sm:text-xs">
            برگشت
          </span>
        </button>
        <button className="w-32 sm:w-40 bg-vio rounded border border-vio text-dark font-bold p-2  flex flex-col justify-center  ">
          <span className="w-full flex items-center justify-center">
            <AddShoppingCartIcon />
          </span>
          <span className="w-full flex items-center justify-center text-[10px] sm:text-xs">
            اضافه به سبد دانلود
          </span>
        </button>
      </div>
    </div>
  );
};

export default VideoDetail;
