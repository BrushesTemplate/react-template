import { FieldType } from '@brushes/components';
import { ShopDes } from '../matetials';

export const shopDesConfig: Array<FieldType> = [
    {
        name: 'region',
        type: 'slot',
        extraProps: {
            placeholder: '请选择商品分类',
            render: ShopDes
        }
    },
];

