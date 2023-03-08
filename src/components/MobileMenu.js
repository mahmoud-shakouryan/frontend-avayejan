import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions/actionTypes";
import { toast } from "react-toastify";
import { toastStyle as options } from "../utils/styles";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import SlowMotionVideoRoundedIcon from "@mui/icons-material/SlowMotionVideoRounded";
import GiteRoundedIcon from "@mui/icons-material/GiteRounded";
import OndemandVideoRoundedIcon from "@mui/icons-material/OndemandVideoRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const MobileMenu = ({ showMenu, activeSideMenu }) => {
  const userSigninState = useSelector((state) => state.userSigninReducer);
  const { userInfo } = userSigninState;

  const liStyle = "w-full flex items-center justify-center sm:hover:text-shade";
  const navLinkActiveStyle =
    "py-5 w-full flex items-center justify-around text-shade text-[10px] sm:text-xs";
  const navLinkNonActiveStyle =
    "py-5 w-full flex items-center justify-around text-[10px] sm:text-xs";

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userSignoutHandler = () => {
    dispatch({ type: actions.USER_SIGNOUT });
    dispatch({ type: actions.CART_EMPTY });
    toast.success("خارج شدید", options);
    navigate("/");
  };

  return (
    <ul
      className={
        activeSideMenu
          ? "z-50 font-secondFont text-sm h-full w-1/3 fixed transition-all duration-200 right-0 top-0 bg-dark flex  flex-col justify-start items-center md:hidden"
          : "fixed h-screen -right-28"
      }
    >
      <li onClick={showMenu} className={`p-5 ${liStyle} cursor-pointer z-60`}>
        <CloseRoundedIcon className="scale-150 flex items-center justify-center " />
      </li>
      <li onClick={showMenu} className={liStyle}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? navLinkActiveStyle : navLinkNonActiveStyle
          }
        >
          <span className="w-[70%] flex justify-end"> صفحه اصلی</span>
          <GiteRoundedIcon />
        </NavLink>
      </li>
      <li onClick={showMenu} className={liStyle}>
        <NavLink
          to="/videos?page=1"
          className={({ isActive }) =>
            isActive ? navLinkActiveStyle : navLinkNonActiveStyle
          }
        >
          <span className="w-[70%] flex justify-end">ویدیوهای آموزشی</span>
          <OndemandVideoRoundedIcon />
        </NavLink>
      </li>
      <li onClick={showMenu} className={liStyle}>
        <NavLink
          to="myvideos"
          className={({ isActive }) =>
            isActive ? navLinkActiveStyle : navLinkNonActiveStyle
          }
        >
          <span className="w-[70%] flex justify-end"> ویدیوهای من</span>
          <SlowMotionVideoRoundedIcon />
        </NavLink>
      </li>
      {!userInfo ? (
        <li onClick={showMenu} className={liStyle}>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive ? navLinkActiveStyle : navLinkNonActiveStyle
            }
          >
            <span className="w-[70%] flex justify-end">ثبت‌نام</span>
            <HowToRegIcon />
          </NavLink>
        </li>
      ) : null}
      <li onClick={showMenu} className={liStyle}>
        {userInfo ? (
          <NavLink
            to="/"
            className={navLinkNonActiveStyle}
            onClick={userSignoutHandler}
          >
            <span className="w-[70%] flex justify-end">خروج</span>
            <LogoutRoundedIcon />
          </NavLink>
        ) : (
          <NavLink
            to="/signin"
            className={({ isActive }) =>
              isActive ? navLinkActiveStyle : navLinkNonActiveStyle
            }
          >
            <span className="w-[70%] flex justify-end">ورود</span>
            <ExitToAppIcon />
          </NavLink>
        )}
      </li>
      <li onClick={showMenu} className={liStyle}>
        <NavLink
          to="/card"
          className={({ isActive }) =>
            isActive ? navLinkActiveStyle : navLinkNonActiveStyle
          }
        >
          <span className="w-[70%] flex justify-end">سبد خرید</span>
          <ShoppingCartOutlinedIcon />
        </NavLink>
      </li>
      <li onClick={showMenu} className={liStyle}>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? navLinkActiveStyle : navLinkNonActiveStyle
          }
        >
          <span className="w-[70%] flex justify-end">تماس با ما</span>
          <PhoneOutlinedIcon />
        </NavLink>
      </li>
    </ul>
  );
};

export default MobileMenu;
