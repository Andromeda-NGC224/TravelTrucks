import Header from "../../components/Header/Header.jsx";
import TrucksList from "../../components/TrucksList/TrucksList.jsx";
import OptionsSearch from "../../components/OptionsSearch/OptionsSearch.jsx";
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  return (
    <div>
      <Header />
      <div className={css.mainContainer}>
        <OptionsSearch />
        <TrucksList />
      </div>
    </div>
  );
}
