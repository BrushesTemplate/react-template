import React from 'react';
import { FieldType } from '@brushes/components';
export const upConfig: Array<FieldType> = [
    {
        label: '是否上架',
        name: 'goodsName',
        type: 'radioGroup',
        extraProps: {
            options: [
                {
                    label: '立即上架',
                    value: 1
                },
                {
                    label: '下架',
                    value: 2
                }
            ]
        }
    },
];

