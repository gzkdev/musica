import styles from "./SideBar.module.css";
import { Link } from "react-router-dom";
import {
  Home3,
  MusicLibrary2,
  Radio,
  VideoHorizontal,
  Profile,
  LogoutCurve,
} from "iconsax-react";

function SideMenu() {
  return (
    <div className={styles.menu}>
      <div className={styles.menu__ctn}>
        <nav className={styles.menu__nav}>
          <ul>
            <li>
              <Link to="/" data-active={true}>
                <Home3 size={18} className={styles.link__icon} variant="Bold" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/collections">
                <MusicLibrary2
                  size={18}
                  className={styles.link__icon}
                  variant="Bold"
                />
                <span>My Collections</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <Radio size={18} className={styles.link__icon} variant="Bold" />
                <span>Radio</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <VideoHorizontal
                  size={18}
                  className={styles.link__icon}
                  variant="Bold"
                />
                <span>Music videos</span>
              </Link>
            </li>
          </ul>
          <ul>
            <ul>
              <li>
                <Link to="/">
                  <Profile
                    size={18}
                    className={styles.link__icon}
                    variant="Bold"
                  />
                  <span>Profile</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <LogoutCurve
                    size={18}
                    className={styles.link__icon}
                    variant="Bold"
                    style={{ transform: "rotateY(180deg)" }}
                  />
                  <span>Log out</span>
                </Link>
              </li>
            </ul>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SideMenu;
