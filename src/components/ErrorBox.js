
const ErrorBox = ({showErrorModal, setShowErrorModal, children}) => {
  console.log('rendering errorBox', showErrorModal)
  return (
    <div className={showErrorModal ? 'hidden': 'fixed w-full h-full bg-opactiy left-0 z-30 flex justify-center pt-14'}>
        <div className='bg-red w-2/3 h-1/5 rounded-lg shadow-dark shadow-sm flex flex-col justify-around items-center'>
            <p>{children}</p>
            <button className=' text-6xl w-2/3 text-dark font-bold' onClick={()=>setShowErrorModal(!showErrorModal)}>&times;</button>
        </div>
    </div>
  )
}

export default ErrorBox;