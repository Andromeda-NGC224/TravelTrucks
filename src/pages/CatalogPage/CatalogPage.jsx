import TrucksList from "../../components/TrucksList/TrucksList.jsx";
import OptionsSearch from "../../components/OptionsSearch/OptionsSearch.jsx";
import css from "./CatalogPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader.jsx";
import { fetchTrucks } from "../../redux/operations.js";
import { useEffect } from "react";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.trucks.status);
  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch]);

  return (
    <div>
      <div className={css.mainContainer}>
        <OptionsSearch />
        {status === "loading" ? <Loader /> : <TrucksList />}
      </div>
    </div>
  );
}
