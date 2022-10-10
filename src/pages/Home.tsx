import {
  HeroSection,
  Layout,
  MusicPlayer,
  Navbar,
  NewReleases,
  PopularSongs,
  SideMenu,
} from "../components";
import { useEffect } from "react";
import { ScrollToTop } from "../utils";

function Home() {
  useEffect(() => {
    ScrollToTop();
  }, []);

  return (
    <Layout>
      <SideMenu />
      <div className="wrapper">
        <HeroSection />
        <NewReleases />
        <PopularSongs />
      </div>
      <MusicPlayer />
    </Layout>
  );
}

export default Home;
