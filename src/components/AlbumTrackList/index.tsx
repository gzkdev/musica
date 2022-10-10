import { Heart, More } from "iconsax-react";
import styles from "./AlbumTrackList.module.css";
import { aIMG1, aIMG3, aIMG5, aIMG4, aIMG2 } from "../../assets";

const TRACKS_LIST = [
  {
    id: 0,
    imgUrl: aIMG5,
    title: "Let me love you - Krisx",
    album: "Single",
    duration: "4:17",
  },
  {
    id: 1,
    imgUrl: aIMG3,
    title: "Wetin man go do - Burna",
    album: "African giant",
    duration: "2:30",
  },
  {
    id: 2,
    imgUrl: aIMG4,
    title: "Stand strong - Davido",
    album: "Single",
    duration: "2:02",
  },
  {
    id: 3,
    imgUrl: aIMG2,
    title: "Closa - Ybee",
    album: "Obi datti",
    duration: "3:23",
  },
  {
    id: 4,
    imgUrl: aIMG1,
    title: "Let me love you - Krisx",
    album: "Single",
    duration: "4:17",
  },
];

function AlbumTrackList() {
  return (
    <div className={styles.tracks}>
      <ul className={styles.tracks__list}>
        {TRACKS_LIST.map((data) => (
          <li key={data.id}>
            <div className={styles.col}>
              <div className={styles.thumbnail}>
                <img src={data.imgUrl} alt="Album cover art" />
              </div>
              <Heart size={18} data-heart />
            </div>
            <div className={styles.col}>
              <div>{data.title}</div>
              <div>{data.album}</div>
            </div>
            <div className={styles.col}>
              <div>{data.duration}</div>
              <More size={16} data-more />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumTrackList;
