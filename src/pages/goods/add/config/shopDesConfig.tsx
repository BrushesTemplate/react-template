import {FieldType} from '@brushes/components';
import {WangEditor} from '@brushes/materials';

export const shopDesConfig: Array<FieldType> = [
    {
        name: 'region',
        type: 'slot',
        labelCol: { span: 0 },
        wrapperCol: { span: 24 },
        extraProps: {
            render: WangEditor
        }
    },
];

