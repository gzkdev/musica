import { Layout, SideMenu, MusicPlayer, AlbumsHeader } from "../components";
import { useParams } from "react-router-dom";

function Album() {
  const params = useParams();

  console.log(params);

  return (
    <Layout>
      <SideMenu />
      <div className="wrapper">
        <AlbumsHeader />
      </div>
      <MusicPlayer />
    </Layout>
  );
}

export default Album;
