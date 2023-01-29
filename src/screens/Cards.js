import { useEffect } from "react";
import { addToCard } from "../store/actions/cardActions";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";

import CardItem from "../components/CardItem";
import { toast } from "react-toastify";

const Cards = () => {
  const { id } = useParams();
  const cardState = useSelector((state) => state.cardReducer);
  const { cardItems } = cardState;
  const { userInfo } = useSelector((state) => state.userSigninReducer);

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

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!userInfo) {
      toast.warn("ابتدا باید وارد شوید", options);
      return navigate("/signin?redirect=card");
    }
    if (id) {
      dispatch(addToCard(id));
    }
  }, [dispatch, id]);

  return (
    <div className="h-screen w-screen bg-theWhite  fixed top-10">
      <div className="bg-lightBlue text-dark h-14 m-1 sm:w-[450px] md:w-[500px] sm:mx-auto font-firstFont flex flex-col items-center justify-center gap-1 text-[10px] sm:text-xs text-right rounded">
        <p>
          .برای فعال شدن امکان دانلود، باید ابتدا هزینه ویدیو آموزشی پرداخت شود{" "}
          <span className="font-bold text-[17px]">&#10003;</span>
        </p>
        <p>
          .بعد از پرداخت موفق، به صورت آنی و همیشگی امکان دانلود دارید{" "}
          <span className="font-bold text-[17px]">&#10003;</span>
        </p>
      </div>
      <div className=" flex flex-wrap justify-around  items-start gap-4 pb-44  pr-2 pl-2 pt-4  w-screen h-screen overflow-y-auto">
        {cardItems && cardItems.length === 0 ? (
          <div className="w-full flex flex-col items-center gap-5">
            <div className="bg-red text-center  p-4 font-firstFont rounded w-60 flex items-center justify-center gap-2">
              <span>
                <ProductionQuantityLimitsIcon className="scale-110" />
              </span>
              <span className="text-sm font-semibold font-secondFont">
                سبد خرید خالی است
              </span>
            </div>
            <Link to="/videos?page=1">
              <button
                type="button"
                className="bg-orange text-xs  text-dark font-bold font-secondFont p-3 rounded-lg shadow-sm shadow-dark sm:hover:scale-105 duration-150 ease-out"
              >
                <span>
                  <VideoLibraryOutlinedIcon className="mr-1 font-bold" />
                </span>
                <span>برو به ویدیوهای آموزشی</span>
              </button>
            </Link>
          </div>
        ) : (
          cardItems &&
          cardItems.map((cardItem, index) => (
            <CardItem key={index} video={cardItem} />
          ))
        )}
      </div>
    </div>
  );
};

export default Cards;
