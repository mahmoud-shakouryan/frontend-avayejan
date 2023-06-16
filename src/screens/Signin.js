import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { signinAction } from "../store/actions/userActions";
import { signupInputStyle } from "../utils/styles";

const Signin = () => {
  const [searchParams] = useSearchParams({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const userSigninState = useSelector((state) => state.userSigninReducer);
  const { userInfo, loading, error } = userSigninState;

  const redirect = [];
  for (const entry of searchParams.entries()) {
    redirect.push(entry);
  }

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signinAction(email, password));
  };

  useEffect(() => {
    if (userInfo && redirect[0]) {
      if (redirect[0][1] === "/") {
        navigate("/");
      } else {
        navigate("/" + redirect[0][1]);
      }
    } else if (userInfo && !redirect[0]) {
      navigate("/");
    }
  }, [redirect, userInfo]);

  return (
    <div className="bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 sm:w-80 h-80 sm:h-1/2 shadow-sm shadow-dark font-secondFont text-dark rounded">
      <form
        className="bg-shade p-2 h-full flex flex-col justify-between"
        onSubmit={submitHandler}
        noValidate
      >
        <div className="basis-1/5 flex flex-col items-center justify-center gap-1">
          <span>
            <ExitToAppIcon className="scale-150" />
          </span>
          <span className="text-xs font-bold">ورود به حساب کاربری</span>
        </div>
        <div className="basis-1/5 flex flex-col items-end justify-center gap-1">
          <label htmlFor="email" className="text-xs font-bold">
            : ایمیل
          </label>
          <input
            autoFocus
            name="email"
            className={signupInputStyle}
            type="email"
            id="email"
            placeholder="Enter Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
         <div className="basis-1/5 flex flex-col items-end justify-center gap-1">
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
        <div className="basis-1/5 flex items-center justify-center">
          <button
            type="submit"
            className="bg-vio w-1/2 h-9 font-firstFont text-white text-xs flex items-center justify-center shadow-sm shadow-vio sm:hover:bg-hoverBtn"
          >
            {loading ? <LoadingSpinner /> : "ورود"}
          </button>
        </div>
        <div className="basis-1/5 flex items-center justify-center gap-2 text-xs">
          <Link
            to="/signup"
            className="decoration-solid underline text-xs font-bold text-red"
          >
            ثبت‌نام کنید
          </Link>
          <span className="font-bold text-xs">
            اگر قبلا ثبت‌‌‌نام نکرده‌اید
          </span>
        </div>
      </form>
    </div>
  );
};

export default Signin;
