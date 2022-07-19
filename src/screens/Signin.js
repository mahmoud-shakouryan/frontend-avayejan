import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { signinAction } from '../store/actions/userActions';


const Signin = () => {

        const [searchParams, setSearchParams] = useSearchParams({});
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const navigate = useNavigate();
        const userSigninState = useSelector(state => state.userSigninReducer);
        const { userInfo, loading, error} = userSigninState;


        const dispatch = useDispatch();
        const submitHandler = e => {
            e.preventDefault();
            dispatch(signinAction(email, password));
        }

        const redirect = searchParams && Object.keys(searchParams).length === 0 ? '/' : searchParams ? searchParams.get('redirect') : '/';

        useEffect(()=>{
            if(userInfo){
                navigate(redirect);
            }
        }, [redirect, userInfo])

  return (
    <div className='p-2 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 sm:w-2/3 md:w-1/2 lg:w-5/12 xl:w-1/3 2xl:w-1/4 h-2/3  shadow-md shadow-dark font-secondFont text-dark rounded'>
        <form className='bg- h-full flex flex-col justify-between' onSubmit={submitHandler} noValidate>

            <div className='basis-1/5 flex flex-col items-center justify-center gap-1'>
                <span><ExitToAppIcon className='scale-150'/></span>
                <span className='text-sm font-bold' >ورود به حساب کاربری</span>
            </div>

            <div  className='basis-1/5 flex flex-col items-end justify-center gap-1'>
            <label htmlFor="email" className='text-sm font-bold'> : ایمیل </label>
            <input name='email' className='bg-theWhite focus:outline-dark w-full p-1 pt-2 pl-2 font-semibold tracking-wider text-sm rounded border border-dark ' type="email" id="email" placeholder="Enter Email" required onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className='basis-1/5 flex flex-col items-end justify-center gap-1'>
            <label htmlFor="password" className='text-sm font-bold'> : رمز عبور</label>
            <input name='password' className='bg-theWhite focus:outline-dark w-full p-1 pt-2 pl-2  text-sm font-semibold tracking-wider rounded border border-dark' type="password" id="password" placeholder="Enter Password" required onChange={(e) => setPassword(e.target.value)} autoComplete="off"/>
            </div>
            <div className='basis-1/5 flex items-center justify-center'>
                <button type='submit' className='bg-orange w-1/2 p-2  font-firstFont font-semibold text-dark text-sm flex items-center justify-center rounded shadow-sm shadow-dark hover:scale-105 duration-150 ease-out '>{ loading ? ' ... بارگذاری ' : 'ورود'}</button>
            </div>
            
            <div className='basis-1/5 flex items-center justify-center gap-2 text-sm'>
                <Link to={`/signup?redirect=${redirect}`} className='decoration-solid underline text-sm font-bold text-red'>ثبت‌نام کنید </Link>
                 <span className='font-bold text-xs'>اگر قبلا ثبت‌‌‌نام نکرده‌اید </span>
                {/* <Link to={`/register?redirect=${redirect}`}>ثبت‌نام کنید </Link> */}

            </div>
        

        </form>
    </div>
  )
}

export default Signin