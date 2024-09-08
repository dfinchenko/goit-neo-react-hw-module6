import { useDispatch, useSelector } from "react-redux";

import { selectNameFilter, changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectNameFilter);

  return (
    <>
      <label className={css.searchBox}>
        Find contacts by name
        <input
          type="text"
          value={searchValue}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </>
  );
};

export default SearchBox;
