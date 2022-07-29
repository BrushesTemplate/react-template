import Drawer from 'antd/es/drawer';
import {Dispatch, ReactNode} from 'react';

const DrawerJsx = ({close, setClose, children}:
                     { close: boolean; setClose: Dispatch<boolean>; children: ReactNode}) => {
  return (
    <Drawer
      title="商品物料配置项"
      placement={'right'}
      width={500}
      onClose={() => setClose(false)}
      visible={close}
      >
      { children }
    </Drawer>
  )
}

export default DrawerJsx
