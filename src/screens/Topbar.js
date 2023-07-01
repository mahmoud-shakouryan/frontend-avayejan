import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import MobileMenu from "../components/MobileMenu";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import { useDispatch, useSelector } from "react-redux";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import * as actions from "../store/actions/actionTypes";
import { toast } from "react-toastify";
import { toastStyle as options } from "../utils/styles";
import { enToPerNum } from "../utils/utils";

const navLiStyle = "h-full md:w-[60px] xl:w-[75px]  cursor-pointer";
const navLinkNotActive =
  "h-full w-full flex items-center justify-center text-white hover:text-shade lg:hover:border-b lg:hover:border-shade";
const navLinkActive =
  "h-full w-full flex items-center justify-center text-shade sm:hover:text-shade lg:border-b lg:hover:border-shade";

const Topbar = () => {
  const [activeSideMenu, setActiveSideMenu] = useState(false);
  const showMenu = () => {
    setActiveSideMenu(!activeSideMenu);
  };

  const userSigninState = useSelector((state) => state.userSigninReducer);
  const { userInfo } = userSigninState;

  const cardState = useSelector((state) => state.cardReducer);
  const { cardItems } = cardState;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userSignoutHandler = () => {
    dispatch({ type: actions.CART_EMPTY });
    dispatch({ type: actions.USER_SIGNOUT });
    toast.success("خارج شدید", options);
    navigate("/");
  };

  return (
    <div className="z-50 w-full h-10 fixed top-0 right-0 flex justify-between items-center bg-dark text-white px-2">
      <NavLink
        to="/"
        className="w-28 h-full flex items-center text-xs cursor-pointer font-firstFont md:hover:text-shade"
      >
        آوای جان
      </NavLink>
      <div className="fixed w-10 h-10 right-1/2 translate-x-1/2 flex items-center justify-center rounded">
        <NavLink
          to="/card"
          className={({ isActive }) =>
            isActive ? "text-shade" : "sm:hover:text-shade"
          }
        >
          <ShoppingBasketRoundedIcon />
          {cardItems && cardItems.length !== 0 ? (
            <span className="absolute top-1 -right-1 bg-shade text-dark font-semibold font-firstFont w-4 h-4 rounded-full flex items-center justify-center text-xs">
              {enToPerNum(cardItems.length)}
            </span>
          ) : null}
        </NavLink>
      </div>
      <MobileMenu showMenu={showMenu} activeSideMenu={activeSideMenu} />
      <nav className="h-full basis-5/12 lg:basis-6/12 flex justify-between items-center">
        <div className="md:hidden w-full h-full text-right flex justify-end items-center">
          <MenuOpenRoundedIcon
            onClick={showMenu}
            className="cursor-pointer sm:hover:text-shade"
          />
        </div>
        <ul className="hidden h-full w-full md:flex md:items-center md:justify-end md:text-[9px] lg:text-[10px] font-firstFont">
          {/* <li className={navLiStyle}>
            <NavLink
              to="/admin/"
              className={({ isActive }) =>
                isActive ? navLinkActive : navLinkNotActive
              }
            >
              ادمین
            </NavLink>
          </li> */}
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
              <NavLink
                className={navLinkNotActive}
                onClick={userSignoutHandler}
                to="/"
              >
                خروج
              </NavLink>
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
              ویدیوها
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
