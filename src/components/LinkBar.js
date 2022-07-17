import { useDispatch, useSelector } from "react-redux"
import { linksAction } from "../store/actions/dlListActions";

const LinkBar = ({title}) => {
  
  const theNum = title.split('.')[0].match(/\d+/);
  

  const { link } = useSelector( state => state.linksReducer);

  const dispatch = useDispatch();
  const downloadHandler = () => {
    dispatch(linksAction(title));
  }


  return (
    
     <div onClick={downloadHandler} className="w-32 sm:w-48 bg-dark text-orange flex items-center justify-center gap-2 font-firstFont text-xs p-3 shadow-dark rounded shadow-md ">
        { link ? <a className="cursor-pointer w-full text-center" href={`${link}`} download target='_blank'>  {theNum} کلیک  دانلود</a> : <span className="text-xs cursor-pointer w-full text-center">پارت  { theNum == null ? '' : `${theNum}`}</span>}
     </div>
    
  )
}

export default LinkBar