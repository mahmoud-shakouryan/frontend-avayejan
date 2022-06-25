import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ErrorBox = ({error}) => {


  

  return (
    <div className='fixed w-full h-full bg-opactiy left-0 z-30 flex justify-center pt-14'>
        <div className='bg-red w-11/12 sm:w-2/3 h-1/5 rounded-lg shadow-dark shadow-sm flex flex-col justify-around items-center'>
            <p>{error}</p>
        </div>
    </div>
  )
}

export default ErrorBox;