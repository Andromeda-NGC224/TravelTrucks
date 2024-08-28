import { Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy } from "react";
import CatalogPage from "../../pages/CatalogPage/CatalogPage.jsx";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage.jsx")
);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/catalog" element={<CatalogPage />}></Route>
      <Route path="/catalog/:id"></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}
