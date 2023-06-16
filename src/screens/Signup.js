import HowToRegIcon from "@mui/icons-material/HowToReg";
import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupAction } from "../store/actions/userActions";
import LoadingSpinner from "../components/LoadingSpinner";
import { signupInputStyle } from "../utils/styles";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const navigate = useNavigate();

  const userSignupState = useSelector((state) => state.userSignupReducer);
  const { userInfo, loading, error } = userSignupState;

  const dispatch = useDispatch();
  const submitSignupFormHandler = (e) => {
    e.preventDefault();
    dispatch(signupAction(name, email, password, confirmedPassword));
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo]);

  return (
    <>
      <div className="bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 sm:w-80 h-[390px]  shadow-sm shadow-dark font-secondFont text-dark ">
        <form
          onSubmit={submitSignupFormHandler}
          className="h-full flex flex-col justify-between bg-shade p-2 rounded-sm"
          noValidate
        >
          <div className="flex flex-col items-center justify-center pt-1">
            <span>
              <HowToRegIcon className="scale-150" />
            </span>
            <span className="text-xs font-bold">ایجاد حساب کاربری</span>
          </div>
          <div className="flex flex-col items-end justify-center gap-1">
            <label htmlFor="name" className="text-xs font-bold">
              : نام
            </label>
            <input
              autoFocus
              onChange={(e) => setName(e.target.value)}
              className={signupInputStyle}
              type="text"
              id="name"
              name="name"
              placeholder="Enter Email"
            />
          </div>
          <div className=" flex flex-col items-end justify-center gap-1">
            <label htmlFor="email" className="text-xs font-bold">
              : ایمیل
            </label>
            <input
              name="email"
              className={signupInputStyle}
              type="email"
              id="email"
              placeholder="Enter Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-end justify-center gap-1">
            <label htmlFor="password" className="text-xs font-bold">
              : رمز عبور
            </label>
            <input
              name="password"
              className={signupInputStyle}
              type="password"
              id="password"
              placeholder="Enter Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col items-end justify-center gap-1">
            <label htmlFor="confirm" className="text-xs font-bold">
              : تکرار رمز عبور
            </label>
            <input
              name="confirm"
              className={signupInputStyle}
              type="password"
              id="confirm"
              placeholder="Enter Password"
              required
              onChange={(e) => setConfirmedPassword(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="p-2 flex items-center justify-center">
            <button
              type="submit"
              className="bg-vio sm:hover:bg-hoverBtn w-1/2 h-9 font-firstFont text-shade text-xs flex items-center justify-center"
            >
              {loading ? <LoadingSpinner /> : "ایجاد حساب"}
            </button>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs p-2">
            <Link
              to="/signin"
              className="decoration-solid underline text-xs font-bold text-red"
            >
              وارد شوید
            </Link>
            <span className="font-bold text-xs">قبلا ثبت‌‌‌نام کرده‌اید ؟</span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
