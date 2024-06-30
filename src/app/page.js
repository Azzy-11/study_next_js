import styles from "./page.module.css";
import {Footer} from "../components/Footer";
import {Links} from "../components/Links";
import {Headline} from "../components/Headline";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <Headline title="Index Page" />

        <Links />

      </main>
      <Footer />
    </div>
  );
}
