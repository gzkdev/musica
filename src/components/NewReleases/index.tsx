import styles from "./NewReleases.module.css";
import { Link } from "react-router-dom";
import { aIMG1, aIMG2, aIMG3, aIMG4, aIMG5, aIMG6, aIMG7 } from "../../assets";

export const NEW_RELEASES = [
  {
    id: 0,
    imgURL: aIMG1,
    title: "Life in a bubble",
    artist: "The van",
  },
  {
    id: 1,
    imgURL: aIMG2,
    title: "Mountain",
    artist: "Krisx",
  },
  {
    id: 2,
    imgURL: aIMG3,
    title: "Limits",
    artist: "John Dillion",
  },
  {
    id: 3,
    imgURL: aIMG4,
    title: "Everything's black",
    artist: "Armeed",
  },
  {
    id: 4,
    imgURL: aIMG5,
    title: "Cancelled",
    artist: "Enimen",
  },
  {
    id: 5,
    imgURL: aIMG6,
    title: "Normad",
    artist: "Makrol eli",
  },
  {
    id: 6,
    imgURL: aIMG7,
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
