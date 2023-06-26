import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { removeFromCard } from "../store/actions/cardActions";
import DownloadItem from "../components/DownloadItem";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import { getPaymentStatusAction } from "../store/actions/payActions";
import { myVidsAction, videoList } from "../store/actions/videoActions";
import LoadingSpinner from "../components/LoadingSpinner";
import { toastStyle as options } from "../utils/styles";
import { enToPerNum } from "../utils/utils";

const DownloadScr = () => {
  const userSigninState = useSelector((state) => state.userSigninReducer);
  const { userInfo } = userSigninState;
  let userId = "";
  if (userInfo) {
    userId = userInfo._id;
  }
  const { loading, error, myVidsArr } = useSelector(
    //گرفتن آرایه ویدیوهای خریداری شده از استور بعد از فشردن دکمه
    (state) => state.myVidsReducer
  );

  const { loading: statusLoading } = useSelector(
    (state) => state.paymentStatusReducer
  );

  const { videos } = useSelector((state) => state.videoListReducer);
  const [searchParams] = useSearchParams({});
  const status = searchParams.get("status");
  const order_id = searchParams.get("order_id");
  const payId = searchParams.get("id");

  const myVideos = []; // گرفتن کل پراپرتیهای ویدیوهای خریداری شده، طبق آرایه آیدیهای ویدیوهای خریداری شده، از بین کل ویدیوها
  if (myVidsArr.length > 0) {
    for (let element of myVidsArr) {
      const video = videos.find((video) => video.id === element);
      myVideos.push(video);
    }
  }

  const navigate = useNavigate();
  const myVidsHandler = () => {
    // هندلر فشردن دکمه، برای دریافت آرایه ویدیوهای خریداری شده
    if (userId) {
      dispatch(myVidsAction(status, userInfo._id)); //گرفتن آرایه ویدیوهای خریداری شده‌ی یوزر از دیتابیس
    } else {
      toast.error("ابتدا وارد حساب شوید", options);
      return navigate("/signin?redirect=myvideos");
    }
  };
  const [accordionOpen, setAccordionOpen] = useState(null);
  const accordionOpenHandler = (key) => {
    //کمک به اینکه اگه روی یه آکوردیون (کامپوننت فرزند) کلیک کردیم، فقط رو همون یکی تغییرات اعمال شه
    setAccordionOpen(accordionOpen !== key ? key : null);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (myVidsArr.length > 0) {
      toast.info(
        `شما ${enToPerNum(myVidsArr.length)} سرفصل، ویدیو دارید`,
        options
      );
    }
    dispatch(videoList(1)); // همه ویدیوها رو میده و میذاره تو لوکال استوریج
    if (status) {
      dispatch(getPaymentStatusAction(status, order_id, payId)); // میره چک کنه استاتوسهای درگاه رو بعد از پرداخت، که مثلا اگه بعد از درگاه اومدیم این صفحه و استاتوس 10 بود، پرداخت رو تایید کنه و و یوزر رو لاگ‌این.
      if (+status === 10) {
        dispatch(removeFromCard(order_id));
      }
    }
  }, [dispatch, order_id, payId, status, myVidsArr.length]);

  return (
    <div className="h-screen w-screen bg-white fixed top-28 flex flex-col items-center justify-start gap-2 overflow-y-auto select-none">
      <div className="w-full h-12 fixed top-12 left-0 flex justify-center">
        <button
          onClick={myVidsHandler}
          className="w-52 sm:w-56 font-secondFont font-thin text-[9px] sm:text-[11px] bg-vio text-white flex items-center justify-center gap-2"
          disabled={statusLoading}
        >
          {loading || statusLoading ? (
            <LoadingSpinner />
          ) : (
            <VideoLibraryOutlinedIcon />
          )}
          {!loading && !statusLoading ? (
            <span> برای مشاهده ویدیوهای خود کلیک کنید</span>
          ) : null}
        </button>
      </div>
      {error
        ? toast.error(error, options)
        : myVideos.map((myVideo) => (
            <DownloadItem
              key={myVideo.id}
              video={myVideo}
              accordionOpenHandler={accordionOpenHandler}
              accordionOpen={accordionOpen}
            />
          ))}
    </div>
  );
};

export default DownloadScr;
