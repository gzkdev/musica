import { SearchNormal1 } from "iconsax-react";
import NavLogo from "../../assets/logo.svg";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__ctn}>
        <div className={styles.navbar__brand}>
          <button className={styles.navbar__btn}></button>
          <img
            className={styles.navbar__logo}
            src={NavLogo}
            alt="Musica logo"
          />
        </div>
        <div className={styles.navbar__search}>
          <SearchNormal1 size={18} />
          <input type="search" placeholder="Search artists" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
