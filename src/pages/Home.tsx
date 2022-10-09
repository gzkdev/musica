import { HeroSection, Layout, Navbar, SideMenu } from "../components";

function Home() {
  return (
    <>
      <Navbar />
      <Layout>
        <SideMenu />
        <div>
          <HeroSection />
        </div>
      </Layout>
    </>
  );
}

export default Home;
