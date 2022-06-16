import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useState } from 'react';
import { Link } from 'react-router-dom';  

const  Signup = () => {

        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [confirmedPassword, setConfirmedPassword] = useState('')  ;
  return (
    <div className='p-2 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-4/5 sm:w-2/3 md:w-1/2 lg:w-5/12 xl:w-1/3 2xl:w-1/4  shadow-md shadow-dark font-secondFont text-dark rounded'>
        <form className='h-full flex flex-col justify-between'>

            <div className='basis-1/5 flex flex-col items-center justify-center gap-1'>
                <span><HowToRegIcon className='scale-150'/></span>
                <span className='text-sm font-bold' >ایجاد حساب کاربری</span>
            </div>
            
            <div  className='basis-1/5 flex flex-col items-end justify-center gap-1'>
            <label htmlFor="name" className='text-sm font-bold'> : نام </label>
            <input className='focus:outline-dark w-full p-2 rounded shadow-sm shadow-dark' type="email" id="name" placeholder="Enter Email" required onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div  className='basis-1/5 flex flex-col items-end justify-center gap-1'>
            <label htmlFor="email" className='text-sm font-bold'> : ایمیل </label>
            <input className='focus:outline-dark w-full p-2 rounded shadow-sm shadow-dark' type="email" id="email" placeholder="Enter Email" required onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className='basis-1/5 flex flex-col items-end justify-center gap-1'>
            <label htmlFor="password" className='text-sm font-bold'> : رمز عبور <i className="fa fa-key"></i></label>
            <input className='focus:outline-dark w-full p-2 rounded shadow-sm shadow-dark' type="password" id="password" placeholder="Enter Password" required onChange={(e) => setPassword(e.target.value)} autoComplete="off"/>
            </div>

            <div className='basis-1/5 flex flex-col items-end justify-center gap-1'>
            <label htmlFor="confirm" className='text-sm font-bold'> : تکرار رمز عبور <i className="fa fa-key"></i></label>
            <input className='focus:outline-dark w-full p-2 rounded shadow-sm shadow-dark' type="password" id="confirm" placeholder="Enter Password" required onChange={(e) => setPassword(e.target.value)} autoComplete="off"/>
            </div>

            <div className='basis-1/5 flex items-center justify-center'>
                <button type='submit' className='bg-orange w-1/2 p-2 font-firstFont font-bold text-dark rounded shadow-sm shadow-dark hover:scale-105 duration-150'>ثبت</button>
            </div>
            
            <div className='basis-1/5 flex items-center justify-center gap-2 text-sm'>
                <Link to='/signin' className='decoration-solid underline text-sm font-bold text-red'>وارد شوید</Link>
                 <span className='font-bold text-xs'> قبلا ثبت‌‌‌نام کرده‌اید ؟</span>
                {/* <Link to={`/register?redirect=${redirect}`}>ثبت‌نام کنید </Link> */}

            </div>
        

        </form>
    </div>
  )
}

export default Signup