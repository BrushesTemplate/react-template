import { pageConfig } from './common';
import {TransformType} from '@brushes/components';
import {uploadGoodsFiles, uploadImpl} from '@brushes/store';

export const transformDataConfig: Array<TransformType> = [
  {
    from: 'basic.goodsimage',
    to: 'basic.goodsimage',
    format: async (files: any) => {
      return await uploadImpl(files)
    }
  },
  {
    from: 'basic.goodsvideo',
    to: 'basic.goodsvideo',
    format: async (files: any) => {
      return await uploadImpl(files)
    }
  },
];

export const config = {
  add: pageConfig,
  editor: pageConfig,
  detail: pageConfig
}
