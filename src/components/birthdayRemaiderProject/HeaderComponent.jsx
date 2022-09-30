import React from 'react';
import styles from '../../styles.module.css';

function HeaderComponent({personCount}) {
  return (
    <header>
        <h1 className={styles.mainHeading}>{personCount} birthdays today</h1>
    </header>
  )
}

export default HeaderComponent