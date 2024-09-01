import { useSelector } from "react-redux";
import css from "./OptionsSearch.module.css";
import { PiWindLight } from "react-icons/pi";
import { TbAutomaticGearbox } from "react-icons/tb";
import { VscCoffee } from "react-icons/vsc";
import { BsDroplet, BsGrid1X2, BsGrid3X3Gap } from "react-icons/bs";
import { MdMonitor } from "react-icons/md";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { CiMap } from "react-icons/ci";

export default function OptionsSearch() {
  const trucks = useSelector((state) => state.trucks.items);
  return (
    <div className={css.optionsSearchContainer}>
      <div className={css.location}>
        <label className={css.locationLabel}>Location</label>
        <div className={css.inputContainer}>
          <input
            type="text"
            placeholder="Kyiv, Ukraine"
            className={css.inputField}
          />
          <CiMap size={20} className={css.mapIcon} />
        </div>
      </div>
      <div className={css.filters}>
        <h3>Filters</h3>
        <div className={css.filterSection}>
          <h4>Vehicle equipment</h4>
          <div className={css.filterOptions}>
            <button className={css.filterButton}>
              <PiWindLight size={32} /> AC
            </button>
            <button className={css.filterButton}>
              <TbAutomaticGearbox size={32} /> Automatic
            </button>
            <button className={css.filterButton}>
              <VscCoffee size={32} /> Kitchen
            </button>
            <button className={css.filterButton}>
              <MdMonitor size={32} /> TV
            </button>
            <button className={css.filterButton}>
              <BsDroplet size={32} /> Bathroom
            </button>
          </div>
        </div>
        <div className={css.filterSection}>
          <h4>Vehicle type</h4>
          <div className={css.filterOptions}>
            <button className={css.filterButton}>
              <BsGrid1X2 size={32} />
              Van
            </button>
            <button className={css.filterButton}>
              {" "}
              <HiOutlineSquares2X2 size={32} />
              Fully Integrated
            </button>
            <button className={css.filterButton}>
              {" "}
              <BsGrid3X3Gap size={32} />
              Alcove
            </button>
          </div>
        </div>
      </div>
      <button className={css.searchButton}>Search</button>
    </div>
  );
}
