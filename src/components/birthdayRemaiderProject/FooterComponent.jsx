import React from 'react';
import styles from '../../styles.module.css';

function FooterComponent({clearHandler}) {
  return (
    <footer>
        <button className={styles.clearBtn} onClick={() => clearHandler()}>clear all</button>
    </footer>
  )
}

export default FooterComponent