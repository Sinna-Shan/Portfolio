/* eslint-disable react/no-unescaped-entities */
import Footer from "../../components/footer/Footer";
import Nav from "../../components/Nav/Nav";
import styles from "./AboutPage.module.css";
function AboutPage() {
  return (
    <>
      <main>
        <Nav />
        <main className={styles.about}>
          <div className={styles.imgContainer}>
            <img src="my image.jpg" alt="my image" />
          </div>
          <div className={styles.content}>
            <h1>Noah Shan Luth Singho</h1>
            <h3>full-stack developer</h3>
            <p>
              Hello there, I am a dedicated Full Stack Developer with 1 year of
              hands-on experience at Plurative. Proficient in front-end and
              backend development in javascript, I specialize in crafting
              seamless and efficient web applications. I thrive in dynamic
              environments, delivering robust solutions from front-end
              interfaces to back-end architecture. Let's build something amazing
              together!
            </p>
            <div className={styles.iconContainer}>
              <a href="" download={"cv.pdf"} className={styles.button}>
                Download CV
              </a>
              <div className={styles.icons}>
                <a href="https://wa.me/+94763236693" target="blank">
                  <img src="whatsapp.svg" alt="whatsapp-icon" />
                </a>
                <a
                  href="https://web.facebook.com/noah.singho.1/"
                  target="blank"
                >
                  <img src="facebook-orangered.svg" alt="fb-icon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/noah-luth-57a0232a1"
                  target="blank"
                >
                  <img src="linkedin-orangered.svg" alt="in-icon" />
                </a>
                <a href="https://github.com/Sinna-Shan" target="blank">
                  <img src="github.svg" alt="in-icon" />
                </a>
              </div>
            </div>
          </div>
        </main>
      </main>
      <Footer />
    </>
  );
}

export default AboutPage;
