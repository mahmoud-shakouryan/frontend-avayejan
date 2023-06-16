import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
import { toastStyle as options } from "../utils/styles";


const VideoCard = ({ video }) => {
  const [showModal, setShowModal] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  const { id, videoName, category, price, duration, imgSrc } = video;
  const formatttedPrice = (price / 10)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const [hours, minutes] = getExpalantoryDuration(duration);

  const cardState = useSelector((state) => state.cardReducer);
  const { cardItems } = cardState;

  const userSigninState = useSelector((state) => state.userSigninReducer);
  const { userInfo } = userSigninState;

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
    <div className={`relative ${cardItems && cardItems.find((cardItem) => cardItem.id === id) ? 'bg-vio' : 'bg-shade'} text-dark  w-32 sm:w-44 sm:h-52 h-44 flex flex-col items-center justify-start font-firstFont`}>
      <div className="h-1/2 overflow-hidden w-full items-center justify-center">
        <img src={imgSrc} className="w-full h-full object-cover " />
      </div>

      <div className="text-center text-dark p-1">
        <p className="text-[8px] sm:text-[11px] font-semibold">{videoName}</p>
        <p className=" text-hashtag text-[6px] sm:text-[9px]">
          {getHahtagForm(category)}
        </p>
      </div>
      <div className="absolute bottom-8 sm:bottom-10 h-6 w-full flex flex-col items-center justify-around text-[9px] sm:text-[11px]">
        <span className="basis-1/2 flex items-center justify-center gap-1">
          {location.pathname==='/videos'?<span>تومان</span>:<span>پرداخت شده</span>}
          {location.pathname==='/videos'? <span>{enToPerNum(formatttedPrice)}</span>: null}
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
              <DeleteOutlineOutlinedIcon style={{ fontSize: "20px" }} />
            </button>
          ) : (
            <button
              className="p-3 h-full w-full text-dark flex  items-center justify-center gap-2"
              onClick={addToCardHandler}
            >
              <AddShoppingCartIcon style={{ fontSize: "20px" }} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
