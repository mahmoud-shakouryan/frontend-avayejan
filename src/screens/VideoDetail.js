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
import { formattedPersianPrice } from "../utils/utils";

const VideoDetail = () => {
  const { userInfo } = useSelector((state) => state.userSigninReducer);
  const videoDetailsState = useSelector((state) => state.videoDetailsReducer);
  const { video } = videoDetailsState;
  const { id } = useParams();
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

  const Toman = formattedPersianPrice(price);
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
      addToCard();
      return navigate(`/card/${id}`);
    } else if (!userInfo) {
      toast.warn("ابتدا باید وارد شوید", options);
      return navigate(`/signin?redirect=videos/${id}`);
    }
  };

  function goBack() {
    return navigate(-1);
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(videoDetails(id));
  }, [dispatch, id]);

  if (!video.category) {
    return (
      <div className="h-screen w-screen">
        <div className="fixed top-0 left-0 bottom-0 right-0 " />
        <div className="flex flex-col items-center justify-center h-2/3 w-2/3 relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-superLightBlue shadow-md shadow-dark rounded">
          <LoadingSpinner />
        </div>
      </div>
    );
  }
  return (
    <div className=" font-secondFont bg-white flex flex-col justify-start items-center gap-2 pt-11">
      {/* <div className="w-80 h-52 bg-vio text-[70px] text-vio font-bold px-5 font-firstFont overflow-hidden">
        <img src={imgSrc} alt={category} className="object-contain" />
      </div> */}
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
          onClick={goBack}
          className="w-32 sm:w-40 bg-vio border border-vio text-shade p-2 flex flex-col justify-center"
        >
          <span className="w-full flex items-center justify-center">
            <ArrowBackIcon />
          </span>
          <span className="w-full flex items-center justify-center text-[10px] sm:text-xs">
            برگشت
          </span>
        </button>
        <button
          onClick={addToCardHandler}
          className="w-32 sm:w-40 bg-vio border border-vio text-shade p-2  flex flex-col justify-center  "
        >
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
