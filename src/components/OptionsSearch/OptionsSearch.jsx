import { useSelector } from "react-redux";
import css from "./OptionsSearch.module.css";

export default function OptionsSearch() {
  const trucks = useSelector((state) => state.trucks.items);
  return (
    <div className={css.optionsSearchContainer}>
      OptionsSearch
      <button onClick={() => console.log(trucks)}>Get Trucks</button>
    </div>
  );
}
