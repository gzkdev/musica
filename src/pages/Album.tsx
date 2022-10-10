import {
  Layout,
  SideMenu,
  MusicPlayer,
  AlbumsHeader,
  AlbumTrackList,
} from "../components";

function Album() {
  return (
    <Layout>
      <SideMenu />
      <div className="wrapper">
        <AlbumsHeader />
        <AlbumTrackList />
      </div>
      <MusicPlayer />
    </Layout>
  );
}

export default Album;
