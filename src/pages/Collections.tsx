import {
  Layout,
  SideMenu,
  MusicPlayer,
  CollectionsWrapper,
} from "../components";
import { useEffect } from "react";
import { ScrollToTop } from "../utils";

export default function Collections() {
  useEffect(() => {
    ScrollToTop();
  }, []);

  return (
    <Layout>
      <SideMenu />
      <div className="wrapper">
        <CollectionsWrapper />
      </div>
      <MusicPlayer />
    </Layout>
  );
}
