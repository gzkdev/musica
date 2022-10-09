import styles from "./NewReleases.module.css";
import { Link } from "react-router-dom";

const NEW_RELEASES = [
  {
    id: 0,
    title: "Life in a bubble",
    artist: "The van",
  },
  {
    id: 1,
    title: "Mountain",
    artist: "Krisx",
  },
  {
    id: 2,
    title: "Limits",
    artist: "John Dillion",
  },
  {
    id: 3,
    title: "Everything's black",
    artist: "Armeed",
  },
  {
    id: 4,
    title: "Cancelled",
    artist: "Enimen",
  },
  {
    id: 5,
    title: "Normad",
    artist: "Makrol eli",
  },
  {
    id: 6,
    title: "Blind",
    artist: "Wiz zee",
  },
];

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
                  <div className={styles.thumbnail}></div>
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
