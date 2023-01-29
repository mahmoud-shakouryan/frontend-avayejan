import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCard } from "../store/actions/cardActions.js";
import { toast } from "react-toastify";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import { pay } from "../store/actions/payActions.js";
import { enToPerNum } from "../utils/utils.js";

const CardItem = ({ video }) => {
  const navigate = useNavigate();
  const { id, videoName, category, price, duration, imgSrc } = video;
  const TOMAN = price / 10;

  const cardState = useSelector((state) => state.cardReducer);
  const { cardItems } = cardState;

  const userSigninState = useSelector((state) => state.userSigninReducer);
  const { userInfo } = userSigninState;

  const payState = useSelector((state) => state.payReducer);
  const { error, loading, payment } = payState;

  const dispatch = useDispatch();
  const removeFromCartHandler = (videoIdToRemove) => {
    dispatch(removeFromCard(videoIdToRemove));
  };

  const addToCardHandler = () => {
    if (!userInfo) {
      toast.warn("ابتدا وارد حساب شوید");
      return navigate("/signin");
    }
    navigate(`/card/${id}`);
  };

  const payHandler = () => {
    dispatch(pay(price, id));
  };

  const gatewayHandler = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("videoList");
    localStorage.removeItem("videos");
  };

  return (
    <>
      <div className="bg-superLightBlue p-2 w-56 sm:w-64 h-72  bg-white flex flex-col rounded-xl shadow-sm shadow-dark sm:hover:scale-105 duration-150 font-firstFont">
        <div className="overflow-hidden flex flex-col items-center justify-center text-sm sm:text-md font-bold mt-1 w-full h-full flex relative">
          <img src={imgSrc} className="w-full h-full object-cover rounded-md" />
          <span className="absolute bg-opacity2 text-lightBlue w-full h-full flex flex-col justify-between rounded-md">
            <span className="text-center font-bold mt-2">
              <p className="text-[12px] sm:text-[15px]">{videoName}</p>
              <p className="font-secondFont text-[8px] sm:text-[9px]">
                {category}
              </p>
            </span>
            <span className="text-center font-bold mt-2">
              <p className="text-[14px] flex justify-center gap-2">
                <span>تومان</span>
                <span>{enToPerNum(TOMAN)}</span>
              </p>
              <p className="font-secondFont text-[8px] sm:text-[11px]">
                {enToPerNum(duration)}
              </p>
            </span>
          </span>
        </div>

        <div className="py-2 text-xs">
          {cardItems && cardItems.find((cardItem) => cardItem.id === id) ? (
            <button
              className="h-full w-full rounded-md shadow-sm  shadow-dark sm:hover:shadow-md sm:hover:shadow-dark font-bold text-dark flex items-center justify-center gap-2 p-2"
              onClick={() =>
                removeFromCartHandler(
                  cardItems.find((cardItem) => cardItem.id === id).id
                )
              }
            >
              <DeleteOutlineOutlinedIcon />
              <span>حذف از سبد خرید</span>
            </button>
          ) : (
            <button
              className="bg-orange h-full w-full rounded-md shadow-sm shadow-dark font-bold text-dark flex items-center justify-center gap-2"
              onClick={addToCardHandler}
            >
              <AddShoppingCartIcon />
              <span>افزودن به سبد خرید</span>
            </button>
          )}
        </div>
        <div className="pb-2 text-xs">
          {payment ? (
            <button className="bg-dark text-theWhite font-thin h-full w-full rounded-md shadow-sm shadow-dark sm:hover:shadow-md sm:hover:shadow-dark flex items-center justify-center gap-3">
              <a
                href={payment}
                onClick={gatewayHandler}
                className="w-full h-full flex items-center justify-center p-3"
              >
                برو به درگاه
              </a>
            </button>
          ) : (
            <button
              className="bg-dark text-theWhite font-thin h-full w-full rounded-md shadow-sm shadow-dark sm:hover:shadow-md sm:hover:shadow-dark  flex items-center justify-center gap-3 p-2"
              onClick={payHandler}
            >
              {loading ? (
                <CurrencyExchangeOutlinedIcon className="font-thin animate-spin" />
              ) : (
                <CurrencyExchangeOutlinedIcon className="font-thin" />
              )}
              {loading ? <span>آغاز فرایند پرداخت</span> : <span>پرداخت</span>}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default CardItem;
