import { useSelector } from "react-redux";
import { IoIosHeartEmpty, IoIosStar } from "react-icons/io";
import css from "./TrucksList.module.css";
import { CiMap } from "react-icons/ci";
import { PiWindLight } from "react-icons/pi";
import { TbAutomaticGearbox } from "react-icons/tb";
import { VscCoffee } from "react-icons/vsc";
import { MdMonitor, MdOutlineMicrowave } from "react-icons/md";
import { BsDroplet, BsFuelPump, BsFuelPumpDiesel } from "react-icons/bs";
import { useState } from "react";

export default function TrucksList() {
  const [visibleTrucks, setVisibleTrucks] = useState(4);
  const trucks = useSelector((state) => state.trucks.items);
  const loadMore = () => {
    setVisibleTrucks((prevVisible) => prevVisible + 4);
  };

  return (
    <div className={css.listMainContainer}>
      <ul className={css.listContainer}>
        {trucks.slice(0, visibleTrucks).map((truck) => (
          <li key={truck.id} className={css.truckItem}>
            <img
              src={truck.gallery[0].thumb}
              alt={truck.name}
              className={css.truckImage}
            />
            <div className={css.truckInfo}>
              <div className={css.truckHeader}>
                <h2 className={css.truckName}>{truck.name}</h2>
                <div className={css.truckPriceContainer}>
                  <span className={css.truckPrice}>
                    €{truck.price.toFixed(2)}
                  </span>
                  <button className={css.favoriteButton}>
                    <IoIosHeartEmpty size={24} />
                  </button>
                </div>
              </div>
              <div className={css.truckRating}>
                <span className={css.ratingStars}>
                  <IoIosStar size={16} />
                </span>
                <span className={css.reviewCount}>
                  {truck.rating}({truck.reviews.length} Reviews)
                </span>
                <span className={css.location}>
                  <CiMap size={20} />
                  {truck.location}
                </span>
              </div>
              <p className={css.truckDescription}>
                {truck.description.slice(0, 60)}
                {truck.description.length > 60 ? "..." : ""}
              </p>
              <div>
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
              </div>
              <button className={css.showMoreButton}>Show more</button>
            </div>
          </li>
        ))}
      </ul>
      {visibleTrucks < trucks.length && (
        <button onClick={loadMore} className={css.loadMoreButton}>
          Load More
        </button>
      )}
    </div>
  );
}
