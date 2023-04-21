import styles from "@/styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDribbble,
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="footer-bottom">
        <a
          icon={faGithub}
          href="https://github.com/chrosslaw"
          rel="noreferrer"
          target="_blank"
          title="My Github Page"
        >
          <FontAwesomeIcon icon={faGithub} spin pulse />
        </a>

        <a
          className="dribble"
          href="https://dribbble.com/chrosslaw"
          rel="noreferrer"
          target="_blank"
          title="My Dribble Page"
        >
          <FontAwesomeIcon icon={faDribbble} bounce />
        </a>

        <a
          href="https://www.facebook.com/chrossl"
          rel="noreferrer"
          target="_blank"
          title="My Facebook Page"
        >
          <FontAwesomeIcon icon={faFacebook} flip />
        </a>

        <a
          href="https://www.linkedin.com/in/chris-lawrence-99627554"
          rel="noreferrer"
          target="_blank"
          title="My linkedin Page"
          className="fa fa-linkedin fa-shake fa-2x"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
