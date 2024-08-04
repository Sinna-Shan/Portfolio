/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <main className={styles.home}>
      <Nav />
      <section className={styles.container}>
        <div className={styles.imgContainer}>
          <img src="my image cropped.jpg" alt="my image" />
        </div>
        <h1>
          I'm <span>Noah Luth</span>
        </h1>
        <p>
          a full stack developer with a passion for creating robust,
          user-friendly web applications. From front-end design to back-end
          functionality, I build end-to-end solutions that drive engagement and
          deliver results. Let's turn your vision into reality with clean code,
          innovative design, and a focus on performance.
        </p>
        <Link to="/contact" className={styles.btnLink}>
          <button> let's collaborate...</button>
        </Link>
      </section>
    </main>
  );
}

export default HomePage;
