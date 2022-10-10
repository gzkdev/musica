import styles from "../NewReleases/NewReleases.module.css";
import { Link } from "react-router-dom";
import { NEW_RELEASES as POPULAR_SONGS } from "../NewReleases";

function PopularSongs() {
  return (
    <div className={styles.section}>
      <div className={styles.section__heading}>Popular in your area</div>
      <div className={styles.carousel}>
        <ul className={styles.carousel__list}>
          {POPULAR_SONGS.map((data) => (
            <li key={data.id}>
              <Link to="/">
                <div className={styles.carousel__item}>
                  <div className={styles.thumbnail}>
                    <img src={data.imgURL} alt="ALbum cover art" />
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

export default PopularSongs;
