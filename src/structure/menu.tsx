import {Menu} from 'antd';
import {Link} from 'react-router-dom';
import SubMenu from 'antd/es/menu/SubMenu';
import React from 'react';
import { _ } from '@brushes/tools';

const { get } = _;

const renderMenuItem = (item: { noMenu?: any; path?: any; label?: any; icon?: any; }) => {
  const { path, label, icon } = item;
  // 过滤非菜单路由
  if (item.noMenu) {
    return;
  }
  return (
    <Menu.Item key={path}>
      <Link to={path}>
        {icon}
        <span>{label}</span>
      </Link>
    </Menu.Item>
  );
};

const RenderMenu = (config: any[]) => {
  return (
    <Menu
      defaultSelectedKeys={['1']}
      mode="inline"
      style={{
        height: '100%',
        borderRight: 0,
      }}
    >
      {config.map((item, index) => {
        const { children, icon, label } = item;
        if (children) {
          const unicode = get(children, '0.path', index);
          return (
            <SubMenu
              key={unicode + index}
              title={
                <>
                  {icon}
                  <span>{label}</span>
                </>
              }>
              {
                children.map((childrenItem: any) => renderMenuItem(childrenItem))
              }
            </SubMenu>
          );
        }
        return renderMenuItem(item);
      })}
    </Menu>
  );
};

export default RenderMenu
