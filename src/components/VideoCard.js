import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCard } from "../store/actions/cardActions.js";
import { toast } from "react-toastify";
import { useState } from "react";
import VideoDetail from "../screens/VideoDetail.js";
import {
  enToPerNum,
  getExpalantoryDuration,
  getHahtagForm,
} from "../utils/utils.js";

const VideoCard = ({ video }) => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const { id, videoName, category, price, duration, imgSrc } = video;
  const formatttedPrice = (price / 10)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const [hours, minutes] = getExpalantoryDuration(duration);
  console.log(isNaN(hours), minutes);

  const cardState = useSelector((state) => state.cardReducer);
  const { cardItems } = cardState;

  const userSigninState = useSelector((state) => state.userSigninReducer);
  const { userInfo } = userSigninState;

  const options = {
    style: {
      font: "shabnam",
      textAlign: "center",
      color: "#16001E",
      fontFamily: "firstFont",
      fontSize: "14px",
      fontWeight: "bold",
    },
  };

  const showModalHandler = () => {
    setShowModal(true);
  };
  const closeModalHandler = () => {
    setShowModal(false);
  };

  const dispatch = useDispatch();
  const removeFromCartHandler = (videoIdToRemove) => {
    dispatch(removeFromCard(videoIdToRemove));
  };

  const addToCardHandler = () => {
    if (!userInfo) {
      toast.warn("ابتدا وارد حساب شوید", options);
      return navigate("/signin?redirect=videos?page=1");
    }
    navigate(`/card/${id}`);
  };

  const videoDuration = hours ? (
    <span className="flex items-center justify-center gap-1">
      <span>دقیقه</span>
      <span> {enToPerNum(minutes)} </span>
      <span>ساعت و</span>
      <span>{enToPerNum(hours)}</span>
    </span>
  ) : (
    <span className="flex items-center justify-center gap-1">
      <span>دقیقه</span>
      <span> {enToPerNum(minutes)} </span>
    </span>
  );

  return (
    <div className=" relative bg-active text-dark shadow-sm shadow-red rounded-xl w-40 sm:w-52 sm:h-64 h-44  bg-white flex flex-col items-center justify-start  font-firstFont">
      {showModal && (
        <VideoDetail
          id={id}
          showModalHandler={showModalHandler}
          closeModalHandler={closeModalHandler}
        />
      )}

      <div className="h-1/2 overflow-hidden w-full items-center justify-center">
        <img src={imgSrc} className="w-full h-full object-cover rounded-t-lg" />
      </div>

      <div className="text-center text-dark p-1">
        <p className="text-[10px] sm:text-[13px]">{videoName}</p>
        <p className="font-secondFont text-hashtag text-[8px] sm:text-[9px]">
          {getHahtagForm(category)}
        </p>
      </div>
      <div className="absolute bottom-8 sm:bottom-10 h-6 w-full flex items-center justify-around text-[9px] sm:text-[11px]">
        <span className="basis-1/2 flex items-center justify-center gap-1">
          <span>تومان</span>
          <span>{enToPerNum(formatttedPrice)}</span>
        </span>
        <span className="basis-1/2">
          <>{videoDuration}</>
        </span>
      </div>
      <div className="absolute bottom-0 h-8 sm:h-10 flex w-full ">
        <div className="w-full">
          <button
            onClick={showModalHandler}
            className="p-2  h-full w-full text-dark flex items-center justify-center sm:hover:bg-lightBlue"
          >
            <InfoOutlinedIcon style={{ fontSize: "20px" }} />
          </button>
        </div>
        <div className="w-full">
          {cardItems && cardItems.find((cardItem) => cardItem.id === id) ? (
            <button
              className="p-2 h-full w-full text-dark flex items-center justify-center"
              onClick={() =>
                removeFromCartHandler(
                  cardItems.find((cardItem) => cardItem.id === id).id
                )
              }
            >
              <DeleteOutlineOutlinedIcon style={{ fontSize: "20px", }} />
            </button>
          ) : (
            <button
              className="p-3 h-full w-full text-dark flex  items-center justify-center gap-2"
              onClick={addToCardHandler}
            >
              <AddShoppingCartIcon style={{ fontSize: "20px"}} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
