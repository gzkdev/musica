import styles from "./SideBar.module.css";
import { NavLink } from "react-router-dom";
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
              <NavLink
                to="/"
                style={({ isActive }) =>
                  isActive ? { color: "#FACD66" } : { color: "inherit" }
                }
              >
                <Home3 size={20} className={styles.link__icon} variant="Bold" />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <MusicLibrary2
                  size={20}
                  className={styles.link__icon}
                  variant="Bold"
                />
                <span>My Collections</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <Radio size={20} className={styles.link__icon} variant="Bold" />
                <span>Radio</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <VideoHorizontal
                  size={20}
                  className={styles.link__icon}
                  variant="Bold"
                />
                <span>Music videos</span>
              </NavLink>
            </li>
          </ul>
          <ul>
            <ul>
              <li>
                <NavLink to="/">
                  <Profile
                    size={20}
                    className={styles.link__icon}
                    variant="Bold"
                  />
                  <span>Profile</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <LogoutCurve
                    size={20}
                    className={styles.link__icon}
                    variant="Bold"
                    style={{ transform: "rotateY(180deg)" }}
                  />
                  <span>Log out</span>
                </NavLink>
              </li>
            </ul>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SideMenu;
