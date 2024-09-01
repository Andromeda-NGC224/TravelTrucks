import { useDispatch, useSelector } from "react-redux";
import css from "./OptionsSearch.module.css";
import { PiWindLight } from "react-icons/pi";
import { TbAutomaticGearbox } from "react-icons/tb";
import { VscCoffee } from "react-icons/vsc";
import { BsDroplet, BsGrid1X2, BsGrid3X3Gap } from "react-icons/bs";
import { MdMonitor } from "react-icons/md";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { CiMap } from "react-icons/ci";
import { selectFilter } from "../../redux/secectors.js";
import {
  setLocation,
  setVehicleType,
  toggleFilter,
} from "../../redux/filter/filterSlice.js";

export default function OptionsSearch() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilter);

  const handleFilterClick = (filterName) => {
    dispatch(toggleFilter(filterName));
  };

  const handleVehicleTypeClick = (type) => {
    if (filters.VehicleType === type) {
      dispatch(setVehicleType(""));
    } else {
      dispatch(setVehicleType(type));
    }
  };
  return (
    <div className={css.optionsSearchContainer}>
      <div className={css.location}>
        <label className={css.locationLabel}>Location</label>
        <div className={css.inputContainer}>
          <input
            type="text"
            placeholder="Kyiv, Ukraine"
            className={css.inputField}
            onChange={(e) => dispatch(setLocation(e.target.value))}
          />
          <CiMap size={20} className={css.mapIcon} />
        </div>
      </div>
      <div className={css.filters}>
        <h3>Filters</h3>
        <div className={css.filterSection}>
          <h4>Vehicle equipment</h4>
          <div className={css.filterOptions}>
            <button
              className={`${css.filterButton} ${filters.AC ? css.active : ""}`}
              onClick={() => handleFilterClick("AC")}
            >
              <PiWindLight size={32} /> AC
            </button>
            <button
              className={`${css.filterButton} ${
                filters.Automatic ? css.active : ""
              }`}
              onClick={() => handleFilterClick("Automatic")}
            >
              <TbAutomaticGearbox size={32} /> Automatic
            </button>
            <button
              className={`${css.filterButton} ${
                filters.Kitchen ? css.active : ""
              }`}
              onClick={() => handleFilterClick("Kitchen")}
            >
              <VscCoffee size={32} /> Kitchen
            </button>
            <button
              className={`${css.filterButton} ${filters.TV ? css.active : ""}`}
              onClick={() => handleFilterClick("TV")}
            >
              <MdMonitor size={32} /> TV
            </button>
            <button
              className={`${css.filterButton} ${
                filters.Bathroom ? css.active : ""
              }`}
              onClick={() => handleFilterClick("Bathroom")}
            >
              <BsDroplet size={32} /> Bathroom
            </button>
          </div>
        </div>
        <div className={css.filterSection}>
          <h4>Vehicle type</h4>
          <div className={css.filterOptions}>
            <button
              className={`${css.filterButton} ${
                filters.VehicleType === "panelTruck" ? css.active : ""
              }`}
              onClick={() => handleVehicleTypeClick("panelTruck")}
            >
              <BsGrid1X2 size={32} />
              Van
            </button>
            <button
              className={`${css.filterButton} ${
                filters.VehicleType === "fullyIntegrated" ? css.active : ""
              }`}
              onClick={() => handleVehicleTypeClick("fullyIntegrated")}
            >
              {" "}
              <HiOutlineSquares2X2 size={32} />
              Fully Integrated
            </button>
            <button
              className={`${css.filterButton} ${
                filters.VehicleType === "alcove" ? css.active : ""
              }`}
              onClick={() => handleVehicleTypeClick("alcove")}
            >
              {" "}
              <BsGrid3X3Gap size={32} />
              Alcove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
