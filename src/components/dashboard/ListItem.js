import { enToPerNum, formattedPersianPrice } from "../../utils/utils";


const liStyle =
  "w-full flex items-center justify-center gap-2 text-[8px] sm:text-[11px] md:text-[12px]";

const ListItem = ({ index, user }) => {
  return (
    <tbody className="w-full flex justify-center cursor-pointer">
      <tr className="bg-vio w-[95%] md:w-[85%] lg:w-[75%] xl:w-[60%] h-10 text-xs font-secondFont flex items-center rounded overflow-hidden">
        <td className="w-full h-full text-shade">
          <ul className="w-full h-full flex flex-row-reverse justify-center gap-1">
            <li className={liStyle}>
              <span className="w-11/12 text-center">{user.name}</span>
            </li>
            <li className={liStyle}>
              <span className="w-11/12 text-center">{user.email}</span>
            </li>
            <li className={liStyle}>
              <span className="w-11/12 text-center">
                {user.paidVidIds.length > 0
                  ? enToPerNum(user.paidVidIds.join(" , "))
                  : "بدون خرید"}
              </span>
            </li>
            <li className={liStyle}>
              <span className="w-11/12 text-center">
                {formattedPersianPrice(user.paysSoFar)}
              </span>
            </li>
          </ul>
        </td>
        <td className="w-10 bg-shade h-full flex flex-col items-center justify-center">
          <span className="basis-1/ flex items-center justify-center">
            {enToPerNum(index + 1)}
          </span>
        </td>
      </tr>
    </tbody>
  );
};

export default ListItem;
