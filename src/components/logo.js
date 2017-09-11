import React from "react"
import styles from "../css/logo.module.css"

export default () =>
    <div className={styles.logo}>
        <div>
            <span className={styles.logoTopBorder}></span>
            <span className={styles.logoRightBorder}></span>
            <span className={styles.logoBottomRightBorder}></span>
            <span className={styles.logoBottomLeftBorder}></span>
            <span className={styles.logoLeftBorder}></span>
        </div>
        <h1>Dan Wieme</h1>
        <h2>Front-End Engineer</h2>
    </div>
