import { Link } from "react-router-dom";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";
import { enToPerNum } from "../utils/utils";

const Pagination = ({ totalPosts, currentSearchParam }) => {
  const currentPage = currentSearchParam;
  const POST_PER_PAGE = 6;
  const hasNextPage = POST_PER_PAGE * currentPage < totalPosts;
  const hasPrevPage = currentPage > 1;
  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;
  const lastPage = Math.ceil(totalPosts / POST_PER_PAGE);

  return (
    <div className="w-full h-full">
      <ul className="w-full h-full flex justify-center items-start gap-4 sm:gap-10">
        {hasPrevPage ? (
          <li className="w-6 h-6 text-xs font-semibold rounded-sm text-dark bg-shade sm:hover:cursor-pointer">
            <Link
              to={`/videos?page=${prevPage}`}
              className="w-full h-full flex justify-center items-center"
            >
              <NavigateBeforeOutlinedIcon />
            </Link>
          </li>
        ) : null}
        {currentPage !== 1 && prevPage !== 1 ? (
          <li className="w-6 h-6 text-xs font-semibold rounded-sm text-dark bg-shade sm:hover:cursor-pointer">
            <Link
              to="/videos?page=1"
              className="w-full h-full flex justify-center items-center"
            >
              {enToPerNum(1)}
            </Link>
          </li>
        ) : null}
        {hasPrevPage ? (
          <li className="w-6 h-6 text-xs font-semibold rounded-sm text-dark bg-shade sm:hover:cursor-pointer">
            <Link
              to={`/videos?page=${prevPage}`}
              className="w-full h-full flex justify-center items-center"
            >
              {enToPerNum(prevPage)}
            </Link>
          </li>
        ) : null}
        <li className="w-6 h-6 text-xs font-semibold bg-orange rounded-sm text-dark sm:hover:cursor-pointer">
          <Link
            to={`/videos?page=${currentPage}`}
            className="w-full h-full flex justify-center items-center"
          >
            {enToPerNum(currentPage)}
          </Link>
        </li>
        {hasNextPage ? (
          <li className="w-6 h-6 text-xs font-semibold rounded-sm text-dark bg-shade sm:hover:cursor-pointer">
            <Link
              to={`/videos?page=${nextPage}`}
              className="w-full h-full flex justify-center items-center"
            >
              {enToPerNum(nextPage)}
            </Link>
          </li>
        ) : null}
        {lastPage !== currentPage && nextPage !== lastPage ? (
          <li className="w-6 h-6 text-xs font-semibold rounded-sm text-dark bg-shade sm:hover:cursor-pointer">
            <Link
              to={`/videos?page=${lastPage}`}
              className="w-full h-full flex justify-center items-center"
            >
              {enToPerNum(lastPage)}
            </Link>
          </li>
        ) : null}
        <li className="w-6 h-6 text-xs font-semibold rounded-sm text-dark bg-shade sm:hover:cursor-pointer">
          <Link
            to={`/videos?page=${nextPage}`}
            className="w-full h-full flex justify-center items-center"
          >
            <NavigateNextOutlinedIcon />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
