import {
  Layout,
  SideMenu,
  MusicPlayer,
  AlbumsHeader,
  AlbumTrackList,
} from "../components";
import { useEffect } from "react";
import { ScrollToTop } from "../utils";
import { AppContextStore } from "../context/AppContext";

function Album() {
  const { setIsNavOpen } = AppContextStore();

  useEffect(() => {
    setIsNavOpen?.(false);
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
