import React from 'react';
import styles from '../css/index.module.css';

import avatar from '../images/avatar.jpg';
import avatar2x from '../images/avatar@2x.jpg';

export default () => (
    <img className={styles.avatar} srcSet={`${avatar}, ${avatar2x} 2x`} />
);
