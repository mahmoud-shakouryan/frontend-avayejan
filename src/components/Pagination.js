import { Link } from "react-router-dom";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';


const Pagination = ({ totalPosts, currentSearchParam }) => {

    
    const enToPerNum = (enNum) => { 
        const enNumStr = enNum.toString();
        const perDigits = '۰۱۲۳۴۵۶۷۸۹'.split('');
        const per_num = enNumStr.replace(/\d/g, m => perDigits[parseInt(m)]);
        return per_num;
     }


    const currentPage = currentSearchParam;
    const POST_PER_PAGE = 4;
    const hasNextPage = POST_PER_PAGE * currentPage < totalPosts;
    const hasPrevPage = currentPage > 1; 
    const nextPage = currentPage + 1;
    const prevPage = currentPage - 1;
    const lastPage = Math.ceil(totalPosts/POST_PER_PAGE);

  return (
    <div >
        <ul className="w-full flex justify-center gap-4 sm:gap-10">
            <li className='w-6 h-6 text-xs font-semibold mt-5 border border-active flex justify-center items-center rounded-sm  text-dark sm:hover:cursor-pointer'><Link to={`/videos?page=${prevPage}`}><NavigateBeforeOutlinedIcon/></Link></li>
            { currentPage !== 1 && prevPage !== 1 ? <li  className="w-6 h-6 text-xs font-semibold mt-5 border border-active flex justify-center items-center rounded-sm  text-dark sm:hover:cursor-pointer"><Link to='/videos?page=1'>{enToPerNum(1)}</Link></li> : null}
            { hasPrevPage ? <li  className="w-6 h-6 text-xs font-semibold mt-5 border border-active  flex justify-center items-center rounded-sm  text-dark sm:hover:cursor-pointer"><Link to={`/videos?page=${prevPage}`}>{enToPerNum(prevPage)}</Link></li> : null}
            <li  className="w-6 h-6 text-xs font-semibold mt-5 bg-active flex justify-center items-center rounded-sm  text-dark sm:hover:cursor-pointer"><Link to={`/videos?page=${currentPage}`}>{enToPerNum(currentPage)}</Link></li>
            { hasNextPage ? <li  className="w-6 h-6 text-xs font-semibold mt-5 border border-active  flex justify-center items-center rounded-sm  text-dark sm:hover:cursor-pointer"><Link to={`/videos?page=${nextPage}`}>{enToPerNum(nextPage)}</Link></li> : null}
            { lastPage !== currentPage && nextPage !== lastPage ? <li  className="w-6 h-6 text-xs font-semibold mt-5 border border-active  flex justify-center items-center rounded-sm  text-dark sm:hover:cursor-pointer"><Link to={`/videos?page=${lastPage}`}>{enToPerNum(lastPage)}</Link></li> : null}
            <li className='w-6 h-6 text-xs font-semibold mt-5 border border-active flex justify-center items-center rounded-sm text-dark sm:hover:cursor-pointer'><Link to={`/videos?page=${nextPage}`}><NavigateNextOutlinedIcon/></Link></li>
        </ul>
    </div>
  )
}

export default Pagination

