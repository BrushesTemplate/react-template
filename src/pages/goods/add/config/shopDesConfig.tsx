import { FieldType } from '@brushes/components';
import { ShopDes } from '../matetials';

export const shopDesConfig: Array<FieldType> = [
    {
        name: 'region',
        type: 'slot',
        labelCol: { span: 0 },
        wrapperCol: { span: 24 },
        extraProps: {
            render: ShopDes
        }
    },
];

