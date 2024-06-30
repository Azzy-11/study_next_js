import styles from "../page.module.css";
import {Footer} from "../../components/Footer";
import { Links } from "../../components/Links";
import { Headline } from "@/components/Headline";

export default function About() {
  return (
    <div>
      <main className={styles.main}>
        <Headline title="About Page" page="about/" />

        <Links />
      </main>
      <Footer />
    </div>
  );
}
