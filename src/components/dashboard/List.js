import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allUsersAction } from "../../store/actions/adminActions";
import LoadingSpinner from "../LoadingSpinner";
import { toast } from "react-toastify";
import { toastStyle as options } from "../../utils/styles";
import ListItem from "./ListItem";
import ListFilter from "./ListFilter";

const List = () => {
  const { allUsers, loading, error } = useSelector(
    (state) => state.allUserReducer
  );

  const [radioTimeRangeSelection, setRadioTimeRangeSelection] = useState(null);
  const [radioIfPurchasedSelection, setRadionIfPurchasedSelection] =
    useState(null);
  const onRadioTimeRangeSelectionHandler = (e) => {
    setRadioTimeRangeSelection(e.target.value);
  };
  const onRadioIfPurchasedSelectionHandler = (e) => {
    setRadionIfPurchasedSelection(e.target.value);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (radioTimeRangeSelection || radioIfPurchasedSelection) {
      dispatch(
        allUsersAction(radioTimeRangeSelection, radioIfPurchasedSelection)
      );
    }
  }, [dispatch, radioTimeRangeSelection, radioIfPurchasedSelection]);

  return (
    <div className=" w-full h-full flex flex-col items-center justify-start overflow-y-auto mt-40">
      <ListFilter
        onRadioIfPurchasedSelectionHandler={onRadioIfPurchasedSelectionHandler}
        onRadioTimeRangeSelectionHandler={onRadioTimeRangeSelectionHandler}
        radioTimeRangeSelection={radioTimeRangeSelection}
        radioIfPurchasedSelection={radioIfPurchasedSelection}
      />
      {loading ? (
        <LoadingSpinner color />
      ) : error ? (
        toast.error('خطا', options)
      ) : (
        <table className="w-full h-screen flex flex-col justify-start items-center gap-2">
          {allUsers.map((user, index) => (
            <ListItem key={index} user={user} index={index} />
          ))}
        </table>
      )}
    </div>
  );
};

export default List;
