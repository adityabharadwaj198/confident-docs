import React from 'react';
import Image from 'next/image';

const Logo = ({ width = 180, height = 150 }) => {
  return (
    <div className="logo-container" style={{ display: 'flex', alignItems: 'center' }}>
      <Image 
        src="/icons/light-confident-logo.svg" 
        alt="Confident Docs Logo" 
        width={width} 
        height={height}
        priority
      />
      <span style={{ 
        fontSize: '0.8rem', 
        marginTop: '8px',
        marginLeft: '14px', 
        color: 'var(--tw-prose-body)', 
        opacity: 0.7,
        fontWeight: 300
      }}>
        the llm evaluation platform<span className="cursor-blink">_</span>
      </span>
    </div>
  );
};

export default Logo; 