import { PiWindLight } from "react-icons/pi";
import { TbAutomaticGearbox } from "react-icons/tb";
import { VscCoffee } from "react-icons/vsc";
import { MdMonitor, MdOutlineMicrowave } from "react-icons/md";
import { BsDroplet, BsFuelPump, BsFuelPumpDiesel } from "react-icons/bs";
import css from "./Features.module.css";
import { useSelector } from "react-redux";
import { selectCurrentTruck } from "../../redux/secectors.js";

export default function Features() {
  const truck = useSelector(selectCurrentTruck);

  return (
    <div className={css.featuresContainer}>
      <ul className={css.truckFeatures}>
        {truck.AC === true ? (
          <li className={css.feature}>
            <PiWindLight size={20} /> AC
          </li>
        ) : (
          ""
        )}
        {truck.transmission === "automatic" ? (
          <li className={css.feature}>
            {" "}
            <TbAutomaticGearbox size={20} />
            Automatic
          </li>
        ) : (
          ""
        )}
        {truck.kitchen === true ? (
          <li className={css.feature}>
            {" "}
            <VscCoffee size={20} />
            Kitchen
          </li>
        ) : (
          ""
        )}
        {truck.microwave === true ? (
          <li className={css.feature}>
            {" "}
            <MdOutlineMicrowave size={20} />
            Microwave
          </li>
        ) : (
          ""
        )}
        {truck.TV === true ? (
          <li className={css.feature}>
            {" "}
            <MdMonitor size={20} />
            TV
          </li>
        ) : (
          ""
        )}
        {truck.bathroom === true ? (
          <li className={css.feature}>
            {" "}
            <BsDroplet size={20} />
            Bathroom
          </li>
        ) : (
          ""
        )}
        {truck.gas === true ? (
          <li className={css.feature}>
            <BsFuelPump size={20} />
            Petrol
          </li>
        ) : (
          <li className={css.feature}>
            <BsFuelPumpDiesel size={20} />
            Diesel
          </li>
        )}
      </ul>
      <div className={css.vehicleDetails}>
        <h2 className={css.vehicleDetailsTitle}>Vehicle Details</h2>
        <table className={css.detailsTable}>
          <tbody>
            <tr>
              <td>Form</td>
              <td>{truck.form}</td>
            </tr>
            <tr>
              <td>Length</td>
              <td>{truck.length}</td>
            </tr>
            <tr>
              <td>Width</td>
              <td>{truck.width}</td>
            </tr>
            <tr>
              <td>Height</td>
              <td>{truck.height}</td>
            </tr>
            <tr>
              <td>Tank</td>
              <td>{truck.tank}</td>
            </tr>
            <tr>
              <td>Consumption</td>
              <td>{truck.consumption}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
