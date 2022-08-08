import { pageConfig } from './common';
import {getStorage} from '@brushes/tools';
import {TransformType} from '@brushes/components';
import {uploadGoodsFiles} from '@brushes/store';

export const transformDataConfig: Array<TransformType> = [
  {
    from: 'basic.goodsimage',
    to: 'basic.goodsimage',
    format: async (file: any) => {
      // return await uploadGoodsFiles({file: file[0].originFileObj, tenantCode: '00000001'})
      return [{
        uid: '-1',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }]
    },
  },
];

export const config = {
  add: pageConfig,
  editor: pageConfig,
  detail: pageConfig
}
