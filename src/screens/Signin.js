import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { signinAction } from "../store/actions/userActions";

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
    <div className="bg-superLightBlue p-2 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 sm:w-2/3 md:w-1/2 lg:w-5/12 xl:w-1/3 2xl:w-1/4 h-1/2 sm:h-2/3  shadow-md shadow-dark font-secondFont text-dark rounded">
      <form
        className="bg- h-full flex flex-col justify-between"
        onSubmit={submitHandler}
        noValidate
      >
        <div className="basis-1/5 flex flex-col items-center justify-center gap-1">
          <span>
            <ExitToAppIcon className="scale-150" />
          </span>
          <span className="text-sm font-bold">ورود به حساب کاربری</span>
        </div>
        <div className="basis-1/5 flex flex-col items-end justify-center gap-1">
          <label htmlFor="email" className="text-sm font-bold">
            {" "}
            : ایمیل{" "}
          </label>
          <input
            name="email"
            className="bg-theWhite focus:outline-dark w-full p-1 pt-2 pl-2 font-semibold tracking-wider text-sm rounded border border-dark "
            type="email"
            id="email"
            placeholder="Enter Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="basis-1/5 flex flex-col items-end justify-center gap-1">
          <label htmlFor="password" className="text-sm font-bold">
            {" "}
            : رمز عبور
          </label>
          <input
            name="password"
            className="bg-theWhite focus:outline-dark w-full p-1 pt-2 pl-2  text-sm font-semibold tracking-wider rounded border border-dark"
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
            className="bg-lightBlue  w-1/2 p-2  font-firstFont font-semibold text-dark text-xs sm:text-base flex items-center justify-center rounded shadow-sm shadow-dark sm:hover:scale-105 sm:duration-100 sm:ease"
          >
            {loading ? <LoadingSpinner/> : "ورود"}
          </button>
        </div>
        <div className="basis-1/5 flex items-center justify-center gap-2 text-sm">
          <Link
            to="/signup"
            className="decoration-solid underline text-sm font-bold text-red"
          >
            ثبت‌نام کنید{" "}
          </Link>
          <span className="font-bold text-xs">
            اگر قبلا ثبت‌‌‌نام نکرده‌اید{" "}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Signin;
