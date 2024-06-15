import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>feel free to reach out</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")}alt="Email icon" />
                    <a href="mailto:anantagarwal4946@gmail.com">anantagarwal4946@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")}alt="Linkedin icon" />
                    <a href="https://www.linkedin.com/in/anantgupta001/">linkedin.com/in/anantgupta001</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")}alt="Github icon" />
                    <a href="https://github.com/AnantGupta001">github.com/AnantGupta001</a>
                </li>
            </ul>
        </footer>
    );
}
