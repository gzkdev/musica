import {
  Layout,
  SideMenu,
  MusicPlayer,
  CollectionsWrapper,
} from "../components";

export default function Collections() {
  return (
    <>
      <Layout>
        <SideMenu />
        <div className="wrapper">
          <CollectionsWrapper />
        </div>
        <MusicPlayer />
      </Layout>
    </>
  );
}
