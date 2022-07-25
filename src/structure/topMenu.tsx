import { Button, Dropdown, Menu } from 'antd';
import React from 'react';
import './index.scss';
import {UserModal} from '@brushes/store';

const MenuDrop = () => {
  // const { user } = UserModal.useContainer();
  return (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              1st menu item
            </a>
          ),
        },
      ]}
    />
  )
};

const items1 = ['商品模块'].map((key) => ({
  key,
  label: '商品模块',
}));

const TopMenu = () => {
  const { user } = UserModal.useContainer();

  return (
    <div className={'topMenu'}>
      <span className="logo">logo</span>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      <Dropdown overlay={<MenuDrop/>} placement="bottomRight" arrow>
        <p>{ user.userName }</p>
      </Dropdown>
    </div>
  )
}

export default TopMenu;
