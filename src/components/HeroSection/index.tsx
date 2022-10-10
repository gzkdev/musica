import styles from "./HeroSection.module.css";
import { Link } from "react-router-dom";
import { Heart } from "iconsax-react";
import { HeroIMG, heroSVG, tcIMG1, tcIMG2, tcIMG3, tstIMG } from "../../assets";

const TOPPERS__LIST = [
  {
    id: 0,
    imgUrl: tcIMG1,
    title: "Goldern age of 80s",
    artist: "Sean swadder",
    duration: "2:24:45",
  },
  {
    id: 1,
    imgUrl: tcIMG2,
    title: 'Reggae "n" blues',
    artist: "Dj YK mule",
    duration: "1:02:42",
  },
  {
    id: 2,
    imgUrl: tcIMG3,
    title: "Tomorrow's tunes",
    artist: "Obi Datti",
    duration: "2:01:25",
  },
];

function HeroSection() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__banner}>
        <div className={styles.banner__ctn}>
          <img
            src={HeroIMG}
            className={styles.hero__img}
            alt="Hero thumbnail"
          />
          <div className={styles.content}>
            <small>Curated playlist</small>
            <div className={styles.text__ctn}>
              <div className={styles.heading}>R & B Hits</div>
              <p className={styles.paragraph}>
                All mine, Lie again, Petty call me everyday, Out of time, No
                love, Bad habit, and so much more
              </p>
            </div>
            <div className={styles.footer}>
              <img src={tstIMG} alt="Testimonials thumbnail" />
              <Heart size={18} variant="Bold" />
              <div>33k Likes</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.hero__toppers}>
        <div className={styles.hero__title}>Top Charts</div>
        <ul className={styles.toppers__list}>
          {TOPPERS__LIST.map((data) => (
            <li key={data.id}>
              <button className={styles.album__favbtn}>
                <Heart size={14} />
              </button>
              <Link to="/">
                <div className={styles.album}>
                  <div className={styles.album__thumbnail}>
                    <img src={data.imgUrl} alt="Cover art" />
                  </div>
                  <div className={styles.album__content}>
                    <div className={styles.title}>{data.title}</div>
                    <div className={styles.artist}>{data.artist}</div>
                    <div className={styles.duration}>{data.duration}</div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HeroSection;
