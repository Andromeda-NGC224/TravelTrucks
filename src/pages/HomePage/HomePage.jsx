import Header from "../../components/Header/Header.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.homePageContainer}>
      <Header />
      <Hero />
    </div>
  );
}
