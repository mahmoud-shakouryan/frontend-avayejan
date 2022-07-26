
const LinkBar = ({index, link}) => {

  return (
     <div className="w-32 sm:w-48 bg-dark mt-5 m-auto  text-orange text-center  font-firstFont text-xs  shadow-dark rounded shadow-md ">
        { link ? <a className="block cursor-pointer w-full h-full  text-center p-3" href={`${link}`} download target='_blank'>  {index+1} دانلود</a> : null}
     </div>
  )
};

export default LinkBar;