import { Play } from "iconsax-react";
import styles from "./Collections.module.css";
import { aIMG3, aIMG4, aIMG5, aIMG8 } from "../../assets";

const COLLECTIONS = [
  {
    id: 0,
    imgUrl: aIMG3,
    title: "Limits",
    artist: "John watts",
    likes: "23m Likes",
  },
  {
    id: 1,
    imgUrl: aIMG4,
    title: "Limits",
    artist: "John watts",
    likes: "41m Likes",
  },
  {
    id: 2,
    imgUrl: aIMG5,
    title: "Limits",
    artist: "John watts",
    likes: "564k Likes",
  },
  {
    id: 3,
    imgUrl: aIMG8,
    title: "Limits",
    artist: "John watts",
    likes: "3m Likes",
  },
];

function CollectionsWrapper() {
  return (
    <div className={styles.collections}>
      <div className={styles.collections__header}>
        <button data-active="true">My collections</button>
        <button>Likes</button>
      </div>
      <div className={styles.collections__carousel}>
        <ul>
          {COLLECTIONS.map((data) => (
            <li key={data.id}>
              <button className={styles.play}>
                <Play size={18} variant="Bold" />
              </button>
              <div className={styles.thumbnail}>
                <img src={data.imgUrl} alt="Collections thumbnail" />
              </div>
              <div className={styles.description}>
                <div className={styles.title}>{data.title}</div>
                <div className={styles.artist}>{data.artist}</div>
              </div>
              <div className={styles.likes}>{data.likes}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CollectionsWrapper;
