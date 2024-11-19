import React from 'react';
import styles from './Home.module.css';
import Comp1 from '../components/Comp1/Comp1';
import Comp2 from '../components/Comp2/Comp2';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hi</h1>
      <div className={styles.component}>
        <Comp1 />
      </div>
      <div className={styles.component}>
        <Comp2 />
      </div>
    </div>
  );
}
