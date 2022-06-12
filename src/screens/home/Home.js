import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';

const Home = () => {
  return (
    <div className="bg-whiteS w-full h-screen  fixed top-10 p-2 bg-blueLighter flex flex-col justify-between">
      
      <div className="text-center text-xs basis-1/4">
        <p className="pt-2 font-secondFont"> به آوای جان خوش آمدید</p>
        <p className="font-firstFont text-base font-semibold pt-2 mt-3">کلینیک آوای جان با مدیریت دکتر فاطمه رضابخش</p>
        <p className="text-center font-secondFont">متخصص اعصاب و روان، روان‌درمانگر و مشاور ازدواج و خانواده</p>
        <button type="button" className="bg-red text-xs text-blueDark font-semibold font-secondFont p-3 rounded-lg shadow-sm shadow-blueDark"> <VideoLibraryOutlinedIcon className='mr-1' />ویدیوهای آموزشی</button>
      </div>
      <div className=" basis-2/4 text-center bg-blueDark">
      </div>
      <footer className=" basis-1/4 flex bg-blueLight ">
       
    </footer>
    </div>
    
  )
}

export default Home