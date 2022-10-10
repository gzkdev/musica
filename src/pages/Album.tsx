import {
  Layout,
  SideMenu,
  MusicPlayer,
  AlbumsHeader,
  AlbumTrackList,
} from "../components";
import { useEffect } from "react";
import { ScrollToTop } from "../utils";

function Album() {
  useEffect(() => {
    ScrollToTop();
  }, []);

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
