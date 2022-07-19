import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';  
import { useDispatch, useSelector } from 'react-redux';
import { signupAction } from '../store/actions/userActions';
import ErrorBox from '../components/ErrorBox';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer ,toast } from 'react-toastify';


const  Signup = () => {

        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [confirmedPassword, setConfirmedPassword] = useState('');
        let [ searchParams, setSearchParams ] = useSearchParams({});
        const navigate = useNavigate();
        
        const userSignupState = useSelector( state => state.userSignupReducer)
        const { userInfo, loading, error } = userSignupState;


        const dispatch = useDispatch();
        const submitSignupFormHandler = (e) =>{
            e.preventDefault();
            dispatch(signupAction(name, email, password, confirmedPassword));
            // if( password !== confirmedPassword ){
            //    toast.error('پسووردها همخوانی ندارند')
            // }
            // else{
            // }
        }

        
        

        const redirect = searchParams && Object.keys(searchParams).length === 0 ? '/' : searchParams ? searchParams.get('redirect') : '/';

        useEffect(()=>{
            if(userInfo){
                navigate(redirect);
            }
        },[redirect, userInfo]);
        
          
        
  return (
    <>
    {/* { error && <ErrorBox error={error}/>} */}
    {/* {<ToastContainer/>} */}
    <div className='p-2 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-5/6 sm:w-2/3 md:w-1/2 lg:w-5/12 xl:w-1/3 2xl:w-1/4  shadow-md shadow-dark font-secondFont text-dark rounded'>
        <form onSubmit={submitSignupFormHandler} className='h-full flex flex-col justify-between' noValidate>

            <div className='basis-1/5 flex flex-col items-center justify-center gap-1'>
                <span><HowToRegIcon className='scale-150'/></span>
                <span className='text-sm font-bold' >ایجاد حساب کاربری</span>
            </div>
            
            <div  className='basis-1/5 flex flex-col items-end justify-center gap-1'>
            <label htmlFor="name" className='text-sm font-bold'> : نام </label>
            <input  onChange={(e) => setName(e.target.value)} className='bg-theWhite focus:outline-dark w-full p-1 pt-2 pl-2 font-semibold tracking-wider text-sm rounded  border border-dark' type="text" id="name" name='name' placeholder="Enter Email"/>
            </div>

            <div  className='basis-1/5 flex flex-col items-end justify-center gap-1 mt-3'>
            <label htmlFor="email" className='text-sm font-bold'> : ایمیل </label>
            <input name='email' className='bg-theWhite focus:outline-dark w-full p-1 pt-2 pl-2 font-semibold tracking-wider text-sm rounded  border broder-dark' type="email" id="email" placeholder="Enter Email" required onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className='basis-1/5 flex flex-col items-end justify-center gap-1  mt-3'>
            <label htmlFor="password" className='text-sm font-bold'> : رمز عبور </label>
            <input name='password' className='bg-theWhite focus:outline-dark w-full p-1 pt-2 pl-2 font-semibold tracking-wider text-sm rounded  border border-dark' type="password" id="password" placeholder="Enter Password" required onChange={(e) => setPassword(e.target.value)} autoComplete="off"/>
            </div>

            <div className='basis-1/5 flex flex-col items-end justify-center gap-1 mt-3'>
            <label htmlFor="confirm" className='text-sm font-bold'> : تکرار رمز عبور </label>
            <input name='confirm' className='bg-theWhite focus:outline-dark w-full p-1 pt-2 pl-2 font-semibold tracking-wider text-sm rounded  border border-dark' type="password" id="confirm" placeholder="Enter Password" required onChange={(e) => setConfirmedPassword(e.target.value)} autoComplete="off"/>
            </div>

            <div className='basis-1/5 flex items-center justify-center'>
                <button type='submit' className='bg-orange w-1/2 p-2 font-firstFont font-bold text-dark rounded  shadow-dark hover:scale-105 duration-150'>{loading ? ' ... بارگذاری ' : 'ثبت'}</button>
            </div>
            
            <div className='basis-1/5 flex items-center justify-center gap-2 text-sm'>
                <Link to={`/signin?redirect=${redirect}`} className='decoration-solid underline text-sm font-bold text-red'>وارد شوید</Link>
                 <span className='font-bold text-xs'> قبلا ثبت‌‌‌نام کرده‌اید ؟</span>
            </div>
        

        </form>
    </div>
    </>
  )
}

export default Signup;