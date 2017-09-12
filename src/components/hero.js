import React from 'react';
import styles from '../css/index.module.css';

import Logo from './logo';

export default () => (
    <div className={styles.hero}>
        <div className={styles.heroBackground} />
        <Logo />
    </div>
);
