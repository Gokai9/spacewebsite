import logo from "../assets/shared/logo.svg";
import styles from "./styles/Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.fix}>
      <header className={styles.container}>
        <img src={logo} alt="logos" className={styles.logo} />
        <hr />
        <ul className={styles.items}>
          <Link to="/">
            <li className={styles.item}>HOME</li>
          </Link>
          <Link to="/destination">
            <li className={styles.item}>DESTINATION</li>
          </Link>
          <Link to="/crew">
            <li className={styles.item}>CREW</li>{" "}
          </Link>
          <Link to="/technology">
            <li className={styles.item}>TECHNOLOGY</li>
          </Link>
        </ul>
      </header>
    </div>
  );
};

export default Header;
