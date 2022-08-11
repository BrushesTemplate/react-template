import React from 'react';

import {
  basicConfig,
  priceConfig,
  upConfig,
  shippingConfig,
  shopDesConfig,
  catelogConfig,
} from '../config';

export const pageConfig = {
  'basic': {
    cell: 3,
    name: 'basicForm',
    type: 'desc',
    editable: true,
    title: '基本信息',
    metadata: basicConfig,
  },
  'price': {
    cell: 3,
    name: 'priceForm',
    type: 'desc',
    editable: true,
    title: '商品价格',
    metadata: priceConfig,
  },
  'catelog': {
    cell: 1,
    name: 'catelogForm',
    type: 'form',
    editable: true,
    title: '商品规格',
    metadata: catelogConfig,
  },
  'shopDes': {
    name: 'shopDesForm',
    type: 'desc',
    editable: true,
    title: '商品描述编辑器',
    metadata: shopDesConfig,
  },
  'shipping': {
    cell: 3,
    name: 'ShippingForm',
    type: 'desc',
    editable: true,
    title: '运费模板',
    metadata: shippingConfig,
  },
  'upConfig': {
    cell: 3,
    name: 'shopDesForm',
    type: 'desc',
    editable: true,
    title: '保存上架',
    metadata: upConfig,
  },
}
