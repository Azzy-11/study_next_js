import styles from "../app/page.module.css";

export function Headline(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/{props.page}page.js</code>
        </p>
      </div>
    </div>
  );
}
