import {
  HeroSection,
  Layout,
  MusicPlayer,
  Navbar,
  NewReleases,
  PopularSongs,
  SideMenu,
} from "../components";

function Home() {
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
