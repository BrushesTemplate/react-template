import { Avatar, Dropdown, Menu } from 'antd';
import React from 'react';
import './index.scss';
import {UserModal} from '@brushes/store';
import {QjIcon} from '@brushes/components';

const MenuDrop = () => {
  const { loginOutImpl } = UserModal.useContainer();

  return (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a onClick={() => loginOutImpl()} target="_blank" rel="noopener noreferrer">
              退出账号
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
  const { user = {} } = UserModal.useContainer();

  return (
    <div className={'topMenu'}>
      <QjIcon name={'icon-QJ'} style={{ color: '#fff', fontSize: 30}}/>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      <Dropdown overlay={<MenuDrop/>} placement="bottomRight" arrow>
        <div className='rightUser'>
          <Avatar style={{ backgroundColor: '#f56a00' }}>{ user.userName.charAt(0).toUpperCase() }</Avatar>
          <span>{ user.userName } </span>
          <QjIcon style={{ marginRight: 5, color: '#fff' }} name={'icon-xialajiantouxiao'}/>
        </div>
      </Dropdown>
    </div>
  )
}

export default TopMenu;
