import { NavLink, useNavigate } from "react-router-dom";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions/actionTypes";
import { toast } from "react-toastify";
import { toastStyle as options } from "../utils/styles";

const MobileMenu = ({ showMenu, activeSideMenu }) => {
  const userSigninState = useSelector((state) => state.userSigninReducer);
  const { userInfo } = userSigninState;

  const liStyle = "w-full flex items-center justify-center sm:hover:text-shade";
  const navLinkActiveStyle =
    "p-5 w-full flex items-center justify-center text-shade text-[10px] sm:text-xs";
  const navLinkNonActiveStyle =
    "p-5 w-full flex items-center justify-center text-[10px] sm:text-xs";

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
        <CloseOutlinedIcon className="scale-150 flex items-center justify-center " />
      </li>
      <li onClick={showMenu} className={liStyle}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? navLinkActiveStyle : navLinkNonActiveStyle
          }
        >
          صفحه اصلی
        </NavLink>
      </li>
      <li onClick={showMenu} className={liStyle}>
        <NavLink
          to="/videos?page=1"
          className={({ isActive }) =>
            isActive ? navLinkActiveStyle : navLinkNonActiveStyle
          }
        >
          ویدیوهای آموزشی
        </NavLink>
      </li>
      <li onClick={showMenu} className={liStyle}>
        <NavLink
          to="myvideos"
          className={({ isActive }) =>
            isActive ? navLinkActiveStyle : navLinkNonActiveStyle
          }
        >
          ویدیوهای من
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
            ثبت‌نام
          </NavLink>
        </li>
      ) : null}
      <li onClick={showMenu} className={liStyle}>
        {userInfo ? (
          <button
            className={navLinkNonActiveStyle}
            onClick={userSignoutHandler}
          >
            خروج
          </button>
        ) : (
          <NavLink
            to="/signin"
            className={({ isActive }) =>
              isActive ? navLinkActiveStyle : navLinkNonActiveStyle
            }
          >
            ورود
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
          سبد خرید
        </NavLink>
      </li>
      <li onClick={showMenu} className={liStyle}>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? navLinkActiveStyle : navLinkNonActiveStyle
          }
        >
          تماس با ما
        </NavLink>
      </li>
    </ul>
  );
};

export default MobileMenu;
