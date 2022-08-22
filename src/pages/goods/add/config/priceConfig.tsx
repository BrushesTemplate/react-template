import React from 'react';
import { FieldType } from '@brushes/components';
export const priceConfig: Array<FieldType> = [
    {
        label: '销售价',
        name: 'pricesetNprice',
        rules: [{ required: true, message: '请输入销售价'}],
        type: 'number',
        extraProps: {
            addonAfter: '元',
            style: {
              width: '100%'
            },
            placeholder: '请输入销售价'
        }
    },
    {
        label: '成本价',
        name: 'pricesetAsprice',
        type: 'number',
        extraProps: {
            style: {
                width: '100%'
            },
            placeholder: '请输入成本价'
        }
    },
    {
        label: '市场价',
        name: 'pricesetMakeprice',
        type: 'number',
        extraProps: {
            style: {
                width: '100%'
            },
            placeholder: '请输入市场价'
        }
    }
];

