import React from 'react';

const NavIconTabItem = ({ 
  icon: Icon, 
  label, 
  iconSize = 16,
}) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div className='custom-icon-tab-item'>
        <Icon size={iconSize} />
      </div>
      <span>{label}</span>
    </div>
  );
};

export default NavIconTabItem; 