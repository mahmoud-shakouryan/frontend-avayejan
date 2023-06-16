import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCard } from "../store/actions/cardActions.js";
import { toast } from "react-toastify";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { pay } from "../store/actions/payActions.js";
import { enToPerNum } from "../utils/utils.js";
import LoadingSpinner from "../components/LoadingSpinner";
import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";
import { toastStyle as options } from "../utils/styles.js";

const payBtnStyle =
  "bg-vio sm:hover:bg-hoverBtn w-full h-full flex items-center justify-center gap-1 py-2 text-shade";

const CardItem = ({ video, selectedCard, selectedCardHandler }) => {
  const navigate = useNavigate();
  const { id, videoName, price, imgSrc } = video;
  const formatttedPrice = (price / 10)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const cardState = useSelector((state) => state.cardReducer);
  const { cardItems } = cardState;

  const payState = useSelector((state) => state.payReducer);
  const { payment, loading, error } = payState;

  const dispatch = useDispatch();
  const removeFromCartHandler = (videoIdToRemove, id) => {
    dispatch(removeFromCard(videoIdToRemove));
  };

  const payHandler = (id) => {
    selectedCardHandler(id);
    dispatch(pay(price, id));
  };

  const gatewayHandler = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("videoList");
    localStorage.removeItem("videos");
  };

  return (
    <>
      <div className="relative bg-shade text-dark  w-32 sm:w-44 sm:h-52 h-44 flex flex-col items-center justify-start font-firstFont">
        <div className="h-1/2 overflow-hidden w-full items-center justify-center">
          <img src={imgSrc} className="w-full h-full object-cover " />
        </div>
        <div className="w-full h-8 text-dark text-[9px] sm:text-[11px] flex items-center">
          <span className="h-1/2 w-full flex items-center justify-center font-semibold">
            {videoName}
          </span>
        </div>
        <div className="w-full">
          <div className="w-full h-8 sm:h-9 text-[9px] sm:text-[11px]">
            {selectedCard === id && loading ? (
              <div className={payBtnStyle}>
                <LoadingSpinner />
              </div>
            ) : error ? (
              toast.error(error, options)
            ) : selectedCard === id && payment ? (
              <button className={payBtnStyle}>
                <a
                  href={payment}
                  onClick={gatewayHandler}
                  className="w-full h-full flex items-center justify-center gap-1 p-3"
                >
                  <KeyboardDoubleArrowLeftOutlinedIcon />
                  برو به درگاه
                </a>
              </button>
            ) : (
              <button className={payBtnStyle} onClick={() => payHandler(id)}>
                <CreditCardIcon style={{ fontSize: "20px" }} />
                <span className="text-[9px] md:text-[11px]">
                  پرداخت {enToPerNum(formatttedPrice)} تومان
                </span>
              </button>
            )}
          </div>
          <div className="h-8 sm:h-9">
            {cardItems && cardItems.find((cardItem) => cardItem.id === id) && (
              <button
                className="w-full h-full bg-white border border-shade sm:hover:bg-shade text-dark text-[8px] sm:text-[10px] md:text-[11px] flex items-center justify-center py-2"
                onClick={() =>
                  removeFromCartHandler(
                    cardItems.find((cardItem) => cardItem.id === id).id, id
                  )
                }
              >
                <DeleteOutlineOutlinedIcon style={{ fontSize: "20px" }} />
                <span>حذف از سبد دانلود</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardItem;
