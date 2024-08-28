import { getAllTrucks } from "../../redux/operations.js";
import css from "./OptionsSearch.module.css";

export default function OptionsSearch() {
  return (
    <div className={css.optionsSearchContainer}>
      OptionsSearch
      <button onClick={getAllTrucks}>Get Trucks</button>
    </div>
  );
}
