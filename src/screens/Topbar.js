import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MobileMenu from "../components/MobileMenu";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import * as actions from "../store/actions/actionTypes";
import { toast } from "react-toastify";

const Topbar = () => {
  const [activeSideMenu, setActiveSideMenu] = useState(false);
  const showMenu = () => {
    setActiveSideMenu(!activeSideMenu);
  };

  const userSigninState = useSelector((state) => state.userSigninReducer);
  const { userInfo } = userSigninState;

  const cardState = useSelector((state) => state.cardReducer);
  const { cardItems } = cardState;

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
  const navLiStyle = "h-full w-auto px-2 cursor-pointer";
  const navLinkNotActive =
    "h-full flex items-center justify-center text-white hover:text-shade";
  const navLinkActive =
    "h-full flex items-center justify-center text-orange hover:text-shade";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userSignoutHandler = () => {
    dispatch({ type: actions.CART_EMPTY });
    dispatch({ type: actions.USER_SIGNOUT });
    toast.success("خارج شدید", options);
    navigate("/");
  };

  return (
    <div className="z-40 fixed top-0 left-0 right-0 w-screen h-10 flex justify-between items-center bg-dark text-white">
      <NavLink
        to="/"
        className="w-28 h-full flex items-center text-xs cursor-pointer pl-2 font-firstFont md:hover:text-shade"
      >
        آوای جان
      </NavLink>
      <div className="fixed w-10 h-10 right-1/2 translate-x-1/2 flex items-center justify-center rounded">
        <NavLink
          to="/card"
          className={({ isActive }) =>
            isActive ? "text-orange" : "sm:hover:text-shade"
          }
        >
          <ShoppingCartOutlinedIcon />
          {cardItems && cardItems.length !== 0 ? (
            <span className="absolute top-1 -right-1 bg-orange text-dark font-bold border w-5 h-5 rounded-full flex items-center justify-center text-xs">
              {cardItems.length}
            </span>
          ) : null}
        </NavLink>
      </div>
      <MobileMenu showMenu={showMenu} activeSideMenu={activeSideMenu} />
      <nav className="h-full basis-5/12 lg:basis-6/12 flex justify-between items-center">
        <div className="md:hidden w-full h-full text-right pr-2 flex justify-end items-center">
          <MenuOutlinedIcon
            onClick={showMenu}
            className="cursor-pointer scale-150 sm:hover:text-shade"
          />
        </div>
        <ul className="hidden h-full w-full md:flex md:items-center md:justify-end md:text-[9px] lg:text-[11px] font-firstFont">
          <li className={navLiStyle}>
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                isActive ? navLinkActive : navLinkNotActive
              }
            >
              ادمین
            </NavLink>
          </li>
          <li className={navLiStyle}>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? navLinkActive : navLinkNotActive
              }
            >
              تماس با ما
            </NavLink>
          </li>
          {!userInfo ? (
            <li className={navLiStyle}>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive ? navLinkActive : navLinkNotActive
                }
              >
                ثبت نام
              </NavLink>
            </li>
          ) : null}
          <li className={navLiStyle}>
            {userInfo ? (
              <button
                className="h-full flex items-center justify-center"
                onClick={userSignoutHandler}
              >
                خروج
              </button>
            ) : (
              <NavLink
                to="/signin"
                className={({ isActive }) =>
                  isActive ? navLinkActive : navLinkNotActive
                }
              >
                ورود
              </NavLink>
            )}
          </li>
          {userInfo ? (
            <li className={navLiStyle}>
              <NavLink
                to="/myvideos?page=1"
                className={({ isActive }) =>
                  isActive ? navLinkActive : navLinkNotActive
                }
              >
                ویدیوهای من
              </NavLink>
            </li>
          ) : null}
          <li className={navLiStyle}>
            <NavLink
              to="/videos?page=1"
              className={({ isActive }) =>
                isActive ? navLinkActive : navLinkNotActive
              }
            >
              ویدیوهای آموزشی
            </NavLink>
          </li>
          <li className={navLiStyle}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? navLinkActive : navLinkNotActive
              }
            >
              صفحه اصلی
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Topbar;
