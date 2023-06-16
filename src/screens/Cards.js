import { useEffect, useState } from "react";
import { addToCard } from "../store/actions/cardActions";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toastStyle as options } from "../utils/styles";
import { toast } from "react-toastify";
import CardItem from "../components/CardItem";
import { homeBtnStyleHorizontal } from "../utils/styles";
import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded';
import OndemandVideoRoundedIcon from "@mui/icons-material/OndemandVideoRounded";


const Cards = () => {

  const { id } = useParams();
  const cardState = useSelector((state) => state.cardReducer);
  const { cardItems } = cardState;
  const { userInfo } = useSelector((state) => state.userSigninReducer);

  const [selectedCard, setSelectedCard] = useState(null);
  const selectedCardHandler = (key) => {
    setSelectedCard(key !== selectedCard ? key : null);
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
    <div className="h-screen w-screen bg-white fixed top-10 text-dark">
      {cardItems.length > 0 ? (
        <div className=" bg-shade h-14 m-1 sm:w-[450px] md:w-[500px] sm:mx-auto font-firstFont flex flex-col items-center justify-center gap-1 text-[10px] sm:text-xs text-right rounded">
          <p>
            .برای فعال شدن امکان دانلود، باید ابتدا هزینه ویدیو آموزشی پرداخت
            شود
            <span ><ArrowLeftRoundedIcon/></span>
          </p>
          <p>
            .بعد از پرداخت موفق، به صورت آنی و همیشگی امکان دانلود دارید
            <span ><ArrowLeftRoundedIcon/></span>
          </p>
        </div>
      ) : null}
      <div className="flex flex-wrap justify-around  items-start gap-4 pb-44  pr-2 pl-2 pt-4  w-screen h-screen overflow-y-auto">
        {cardItems && cardItems.length === 0 ? (
          <div className="w-full flex flex-col items-center gap-5">
            <div className="text-center  p-4 font-firstFont rounded w-60 flex items-center justify-center gap-2">
              <span className="w-28 h-28 text-sm font-semibold font-secondFont">
                <img src="/images/emptycart.png" alt="empty shopping cart" />
              </span>
            </div>
            <Link to="/videos?page=1" className="w-28 md:w-32 lg:w-40">
              <button type="button" className={homeBtnStyleHorizontal}>
                <span>
                  <OndemandVideoRoundedIcon />
                </span>
                <span>برو به ویدیوها</span>
              </button>
            </Link>
          </div>
        ) : (
          cardItems &&
          cardItems.map((cardItem, index) => (
            <CardItem
              key={index}
              video={cardItem}
              selectedCard={selectedCard}
              selectedCardHandler={selectedCardHandler}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Cards;
