import { Layout, SideMenu, MusicPlayer } from "../components";

export default function Collections() {
  return (
    <>
      <Layout>
        <SideMenu />
        <div className="wrapper"></div>
        <MusicPlayer />
      </Layout>
    </>
  );
}
