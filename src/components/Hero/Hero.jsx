import { Link } from "react-router-dom";
import css from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={css.hero}>
      <h1 className={css.title}>Campers of your dreams</h1>
      <h2 className={css.subtitle}>
        You can find everything you want in our catalog
      </h2>
      <Link to="/catalog" className={css.button}>
        View Now
      </Link>
    </div>
  );
}
