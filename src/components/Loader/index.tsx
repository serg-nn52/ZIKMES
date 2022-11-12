import React from 'react';
import styles from './style.module.scss';

const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.ldsRing}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;
