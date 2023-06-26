import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import LinkBar from "./LinkBar";
import { myVidsLinksAction } from "../store/actions/videoActions";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";
import LoadingSpinner from "./LoadingSpinner";
import { toast } from "react-toastify";
import { toastStyle as options } from "../utils/styles";

const DownloadItem = ({ video, accordionOpenHandler, accordionOpen }) => {
  const { id, videoName, videoTitle, imgSrc } = video;
  const { links, loading, error } = useSelector(
    (state) => state.myVidsLinksReducer
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (accordionOpen === id) {
      dispatch(myVidsLinksAction(videoTitle)); //گرفتن لینکهای دانلود یک ویدیوی خریداری شده
    }
  }, [accordionOpen, dispatch, links.length, id, videoTitle]);

  useEffect(() => {
    if (error && accordionOpen == id) {
      toast.error("خطا", options);
    }
  }, [error, accordionOpen]);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div
        onClick={() => accordionOpenHandler(id)}
        className="bg-shade font-secondFont h-14 w-[90%] sm:w-96 flex items-center justify-end rounded-lg overflow-hidden  cursor-pointer sm:hover:shadow-sm sm:hover:shadow-dark"
      >
        <div className="h-full w-[20%] flex items-center justify-center">
          <img
            src={imgSrc}
            className="h-12 w-12 object-fill rounded-full"
            alt="desc"
          />
        </div>
        <div className=" w-[80%] h-full flex items-center justify-end">
          <p className="text-dark text-xs pr-2">{videoName}</p>
          <div className=" text-dark  h-full flex items-center justify-center w-24">
            {loading && accordionOpen === id ? (
              <LoadingSpinner />
            ) : accordionOpen === id && !loading ? (
              <>
                <KeyboardDoubleArrowDownOutlinedIcon />
                <p className="text-[8px]">لیست دانلود</p>
              </>
            ) : (
              <>
                <KeyboardDoubleArrowLeftOutlinedIcon />
                <p className="text-[8px]">لیست دانلود</p>
              </>
            )}
          </div>
        </div>
      </div>
      <div
        className={`${
          accordionOpen === id && !loading ? "opacity-100" : "opacity-0"
        } w-[90%] sm:w-96 h-auto flex flex-col gap-1 items-center justify-center transition-all duration-500 pt-1`}
      >
        {accordionOpen === id &&
          links.length > 0 &&
          links.map((link, index) => (
            <LinkBar
              key={index}
              index={index}
              link={link}
              length={links.length}
            />
          ))}
      </div>
    </div>
  );
};

export default DownloadItem;
