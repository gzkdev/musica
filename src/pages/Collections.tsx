import {
  Layout,
  SideMenu,
  MusicPlayer,
  CollectionsWrapper,
} from "../components";
import { useEffect } from "react";
import { ScrollToTop } from "../utils";
import { AppContextStore } from "../context/AppContext";

export default function Collections() {
  const { setIsNavOpen } = AppContextStore();

  useEffect(() => {
    setIsNavOpen?.(false);
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
