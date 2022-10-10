import { Heart, More } from "iconsax-react";
import styles from "./AlbumTrackList.module.css";
import { TRACKS_LIST } from "../../data/TrackList";

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
