import React from 'react';
import Image from 'next/image';
import styles from './Logo.module.scss';

const Logo = ({ width = 180, height = 150 }) => {
  return (
    <div className={styles.logoContainer}>
      <Image 
        src="/icons/light-confident-logo.svg" 
        alt="Confident Docs Logo" 
        width={width} 
        height={height}
        priority
      />
      <span className={styles.tagline}>
        the <span className={styles.deepeval}>deepeval</span> platform<span className={styles.cursorBlink}>_</span>
      </span>
    </div>
  );
};

export default Logo; 