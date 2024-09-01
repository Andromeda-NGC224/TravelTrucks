import TrucksList from "../../components/TrucksList/TrucksList.jsx";
import OptionsSearch from "../../components/OptionsSearch/OptionsSearch.jsx";
import css from "./CatalogPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader.jsx";
import { fetchTrucks } from "../../redux/operations.js";
import { useCallback, useEffect } from "react";
import { selectCurrentPage, selectStatus } from "../../redux/secectors.js";
import NotFoundPage from "../NotFoundPage/NotFoundPage.jsx";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);

  const currentPage = useSelector(selectCurrentPage);

  const initialFetch = useCallback(() => {
    if (currentPage === 1) {
      dispatch(fetchTrucks(1));
    }
  }, [dispatch, currentPage]);

  useEffect(() => {
    initialFetch();
  }, [initialFetch]);

  return (
    <div>
      <div className={css.mainContainer}>
        <OptionsSearch />
        {status === "loading" && <Loader />}
        {status === "failed" && <NotFoundPage />}
        {status === "success" && <TrucksList />}
      </div>
    </div>
  );
}
