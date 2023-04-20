import { useState } from "react";
import { Button } from "@mui/material";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import ContactMailRoundedIcon from "@mui/icons-material/ContactMailRounded";
import styles from "@/styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const [contactBoxVisible, setContactBoxVisible] = useState(false);

  const handleContactButtonClick = () => {
    setContactBoxVisible(!contactBoxVisible);
  };

  return (
    <footer className={styles.footer}>
      <div id="contact-box">
        {contactBoxVisible && (
          <a
            id="email"
            href="mailto:chris@chrosslaw.com"
            className="text-focus-in contact"
          >
            <ContactMailRoundedIcon color="primary" /> chris@chrosslaw.com
          </a>
        )}
      </div>

      <div className={styles.contactButton}>
        <Button
          onClick={handleContactButtonClick}
          variant="contained"
          size="medium"
        >
          <ContactPageIcon /> Contact
        </Button>
      </div>

      <div className="footer-bottom">
        <a
          href="https://github.com/chrosslaw"
          rel="noreferrer"
          target="_blank"
          title="My Github Page"
        ></a>

        <a
          href="https://www.linkedin.com/in/chris-lawrence-99627554"
          rel="noreferrer"
          target="_blank"
          title="My linkedin Page"
          className="fa fa-linkedin fa-shake fa-2x"
        >
          <i> </i>
        </a>
        <a
          href="https://www.facebook.com/chrossl"
          target="_blank"
          rel="noreferrer"
          title="My facebook Page"
          className="fa fa-facebook fa-flip fa-2x"
        >
          <i> </i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
