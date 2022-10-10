import styles from "./MusicPlayer.module.css";
import { aIMG8 } from "../../assets";
import {
  Shuffle,
  Previous,
  Play,
  Next,
  RepeateOne,
  VolumeHigh,
} from "iconsax-react";

function MusicPlayer() {
  return (
    <div className={styles.audio}>
      <div className={styles.audio__wrapper}>
        <div className={styles.audio__container}>
          <div className={styles.audio__details}>
            <div className={styles.thumbnail}>
              <img src={aIMG8} alt="" />
            </div>
            <div className={styles.text}>
              <div className={styles.title}>Seasons in</div>
              <div className={styles.artist}>James</div>
            </div>
          </div>
          <div className={styles.audio__controls}>
            <div className={styles.btn__controls}>
              <button>
                <Shuffle size={18} variant="Bold" />
              </button>
              <button>
                <Previous size={18} variant="Bold" />
              </button>
              <button data-play data-mobile>
                <Play size={18} variant="Bold" />
              </button>
              <button data-mobile>
                <Next size={18} variant="Bold" />
              </button>
              <button>
                <RepeateOne size={18} variant="Bold" />
              </button>
            </div>
            <div className={styles.timeline__control}>
              <input
                type="range"
                name="timeline"
                id="timeline"
                value="20"
                min="0"
                max="100"
              />
            </div>
          </div>
          <div className={styles.audio__volume}>
            <button>
              <VolumeHigh size={18} variant="Bold" />
            </button>
            <input
              type="range"
              name="volume"
              id="volume"
              value="20"
              min="0"
              max="100"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
