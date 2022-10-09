import styles from "./Layout.module.css";

interface Prop {
  children: React.ReactNode;
}

function Layout({ children }: Prop) {
  return <div className={styles.layout}>{children}</div>;
}

export default Layout;
