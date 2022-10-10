import {
  Layout,
  SideMenu,
  MusicPlayer,
  AlbumsHeader,
  AlbumTrackList,
} from "../components";
import { useParams } from "react-router-dom";

function Album() {
  const params = useParams();

  console.log(params);

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
