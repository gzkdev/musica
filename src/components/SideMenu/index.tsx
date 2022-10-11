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
import { AppContextStore } from "../../context/AppContext";

function SideMenu() {
  const { isNavOpen, toggleIsNavOpen } = AppContextStore();
  return (
    <div className={styles.menu} data-active={isNavOpen}>
      <button className={styles.close__btn} onClick={toggleIsNavOpen}></button>
      <div className={styles.menu__ctn}>
        <nav className={styles.menu__nav}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
                end
              >
                <Home3 size={18} className={styles.link__icon} variant="Bold" />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/collections"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
                end
              >
                <MusicLibrary2
                  size={18}
                  className={styles.link__icon}
                  variant="Bold"
                />
                <span>My Collections</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/radio"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
                end
              >
                <Radio size={18} className={styles.link__icon} variant="Bold" />
                <span>Radio</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/videos"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
                end
              >
                <VideoHorizontal
                  size={18}
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
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive ? styles.active : undefined
                  }
                  end
                >
                  <Profile
                    size={18}
                    className={styles.link__icon}
                    variant="Bold"
                  />
                  <span>Profile</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/logout"
                  className={({ isActive }) =>
                    isActive ? styles.active : undefined
                  }
                  end
                >
                  <LogoutCurve
                    size={18}
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
