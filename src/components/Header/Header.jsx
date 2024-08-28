import { Link } from "react-router-dom";
import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <Link to="/" className={css.logo}>
        <span className={css.logoPartTravel}>Travel</span>
        <span className={css.logoPartTrucks}>Trucks</span>
      </Link>
      <nav className={css.nav}>
        <ul className={css.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
