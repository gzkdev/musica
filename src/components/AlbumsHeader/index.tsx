import { Heart, MusicSquare, Play, PlayCircle } from "iconsax-react";
import { PageBG, tcIMG3 } from "../../assets";
import styles from "./AlbumsHeader.module.css";

function AlbumsHeader() {
  return (
    <>
      <div className={styles.fixed__background}>
        <img src={PageBG} alt="Background image" />
      </div>
      <div className={styles.header}>
        <div className={styles.header__thumbnail}>
          <img src={tcIMG3} alt="Album thumbnail" />
        </div>
        <div className={styles.header__content}>
          <div className={styles.heading}>Tomorrow's tunes</div>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </p>
          <div className={styles.details}>64 songs ~ 16hrs+</div>
          <div className={styles.controls}>
            <button>
              <PlayCircle size={18} variant="Bold" className={styles.icon} />
              Play
            </button>
            <button>
              <MusicSquare size={18} variant="Bold" className={styles.icon} />
              Add to collection
            </button>
            <button>
              <Heart size={18} data-heart variant="Bold" />
              <span>Like</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AlbumsHeader;
