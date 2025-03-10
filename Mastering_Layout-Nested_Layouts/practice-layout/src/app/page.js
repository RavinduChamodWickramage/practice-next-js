import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <h1>Home Page</h1>
        <p>
          Knowing how to write a paragraph is incredibly important. It’s a basic
          aspect of writing, and it is something that everyone should know how
          to do. There is a specific structure that you have to follow when
          you’re writing a paragraph. This structure helps make it easier for
          the reader to understand what is going on. Through writing good
          paragraphs, a person can communicate a lot better through their
          writing.
        </p>
      </div>
    </>
  );
}
