import {
  HeroSection,
  Layout,
  Navbar,
  NewReleases,
  PopularSongs,
  SideMenu,
} from "../components";

function Home() {
  return (
    <>
      <Navbar />
      <Layout>
        <SideMenu />
        <div className="wrapper">
          <HeroSection />
          <NewReleases />
          <PopularSongs />
        </div>
      </Layout>
    </>
  );
}

export default Home;
