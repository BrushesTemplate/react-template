import React from 'react';
import { FieldType } from '@brushes/components';
export const shippingConfig: Array<FieldType> = [
    {
        label: '选择模板',
        name: 'shippingTemplate',
        type: 'select',
        rules: [{ required: true, message: '请选择运费模版'}],
        extraProps: {
            optionsKey: 'freightExpId',
            optionsName: 'freightExpName',
            placeholder: '请选择运费模版',
        }
    },
];

