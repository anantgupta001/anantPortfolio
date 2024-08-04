import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img 
                    src={getImageUrl("about/aboutImage.png")} 
                    alt="Me sitting with a laptop" 
                    className={styles.aboutImage}/>
                <div className={styles.info}>
                    <ul className={styles.aboutItems}>
                        <li className={styles.aboutItem}>
                            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
                            <div className={styles.aboutItemText}>
                                <h3>Frontend Developer</h3>
                                <p>I'm a Frontend Developer with experience in building responsive and optimized sites.</p>
                            </div>
                        </li>
                        <li className={styles.aboutItem}>
                            <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
                            <div className={styles.aboutItemText}>
                                <h3>Backend Developer</h3>
                                <p>I have experience developing fast and optimized back-end systems and APIs.</p>
                            </div>
                        </li>
                    </ul>
                    <div className={styles.resumeButtonContainer}>
                        <a 
                            href="assets/Anant Resume.pdf" 
                            download="Anant's Resume" 
                            target='_blank'
                        >
                            <button 
                                type="button" 
                                className={styles.resumeButton}
                            >
                                <img 
                            src={getImageUrl("about/download.svg")} 
                            alt="Download Icon" 
                            className={styles.downloadIcon} 
                        />
                                Download CV
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
