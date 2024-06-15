import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Anant</h1>
                <p className={styles.description}>I'm a full Stack Developer. Reach out if you'd like to learn more!</p>
                <a className={styles.contactBtn}href="mailto:anantagarwal4946@gmail.com">Contact me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
            <div className={styles.topBlur}></div>
            <div className={styles.topBlur}></div>
        </section>
    );
}