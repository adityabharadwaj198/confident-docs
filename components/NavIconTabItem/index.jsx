import React from 'react';

const NavIconTabItem = ({ 
  icon: Icon, 
  label, 
  iconSize = 16, 
  marginRight = '8px' 
}) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Icon style={{ marginRight }} size={iconSize} />
      <span>{label}</span>
    </div>
  );
};

export default NavIconTabItem; 