import styles from "./NewReleases.module.css";
import { Link } from "react-router-dom";
import { NEW_RELEASES } from "../../data/NewReleases";

function NewReleases() {
  return (
    <div className={styles.section}>
      <div className={styles.section__heading}>New Realeases</div>
      <div className={styles.carousel}>
        <ul className={styles.carousel__list}>
          {NEW_RELEASES.map((data) => (
            <li key={data.id}>
              <Link to="/">
                <div className={styles.carousel__item}>
                  <div className={styles.thumbnail}>
                    <img src={data.imgURL} alt="Album cover art" />
                  </div>
                  <div className={styles.title}>{data.title}</div>
                  <div className={styles.artist}>{data.artist}</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NewReleases;
