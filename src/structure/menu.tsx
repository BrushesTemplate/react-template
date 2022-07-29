import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const RenderMenu = (config: any[]) => {
  const navigate = useNavigate()
  const handlerClick = (item: any) => {
    navigate(item.key);
  }
  return (
    <Menu
      defaultSelectedKeys={['1']}
      mode="inline"
      onClick={handlerClick}
      style={{
        height: '100%',
        borderRight: 0,
      }}
      items={config}
    >
    </Menu>
  );
};

export default RenderMenu
