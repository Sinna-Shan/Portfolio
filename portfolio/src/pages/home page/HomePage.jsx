/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import styles from "./HomePage.module.css";
import Footer from "../../components/footer/Footer";

function HomePage() {
  return (
    <>
      <main className={styles.home}>
        <Nav />
        <section className={styles.container}>
          <div className={styles.intro}>
            <div className={styles.imgContainer}>
              <img src="my image cropped.jpg" alt="my image" />
            </div>
            <div className={styles.headerContainer}>
              <h1>I'm</h1>
              <div className={styles.words}>
                <span>Noah Shan Luth</span>
                <span>a Designer</span>
                <span>a Front-end Developer</span>
                <span>a Back-end Developer</span>
                <span>Noah Shan Luth</span>
              </div>
            </div>
          </div>
          <p>
            a full stack developer with a passion for creating robust,
            user-friendly web applications. From front-end design to back-end
            functionality, I build end-to-end solutions that drive engagement
            and deliver results. Let's turn your vision into reality with clean
            code, innovative design, and a focus on performance.
          </p>
          <Link to="/contact" className={styles.btnLink}>
            <button> let's collaborate...</button>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
