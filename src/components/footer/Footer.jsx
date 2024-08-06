import styles from './Footer.module.css'
function Footer() {
    return (
        <footer className={styles.footer}>
            &copy; copyright | {new Date().getFullYear()} All rights reserved.
        </footer>
    )
}

export default Footer
