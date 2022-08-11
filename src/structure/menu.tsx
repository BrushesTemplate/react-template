import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import {produce, _ } from '@brushes/tools';

const { isEmpty } = _;
const RenderMenu = ({menu}: {menu: any[]}) => {
  const [config, setConfig] = useState(menu);
  const navigate = useNavigate()

  useEffect(() => {
    if(isEmpty(menu)) return;
    const configMenu = produce(menu, draft => {
      draft[0].children = draft[0].children.filter((item:any) => !item.noMenu)
     })
    setConfig(configMenu)
  }, [menu])

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
