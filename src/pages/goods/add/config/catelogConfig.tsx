import React, {useRef} from 'react';
import {FieldType} from '@brushes/components';
import {CategoryJsx, CategoryTableJsx} from '../matetials';
import {FormInstance} from 'antd/es/form';
import { _ } from '@brushes/tools';

const { isUndefined } = _;

export const catelogConfig: Array<any> = [
    {
        name: 'category',
        type: 'slot',
        calIsVisible: ({ getFieldValue } : FormInstance) => !isUndefined(getFieldValue(['basic', 'platform'])),
        extraProps: {
            render: ({form}: { form: FormInstance }) => <CategoryJsx namePath={['basic', 'platform']} form={form}/>
        }
    },
    {
        name: 'rsSpecValueDomainList',
        type: 'slot',
        labelCol: { span: 0 },
        wrapperCol: { span: 24 },
        // calIsVisible: ({ getFieldValue } : FormInstance) => !isUndefined(getFieldValue(['basic', 'category'])),
        extraProps: {
            render: ({form}: { form: FormInstance }) => {
                const namePath = useRef(['catelog', 'rsSpecValueDomainList']);
                const category = form.getFieldValue(['catelog', 'category']);
                const initialValue = form.getFieldValue(['catelog', 'rsSpecValueDomainList'])
                return (
                  <CategoryTableJsx
                    columns={columns}
                    category={category}
                    initialValue={initialValue}
                    namePath={namePath.current}
                    form={form}
                  />
                )
            }

        }
    }
];

const columns = [
    {
        title: '规格值',
        dataIndex: 'skuName',
        key: 'skuName',
        width: '15%',
    },
    {
        title: '货品编号',
        dataIndex: 'skuNo',
        editable: true,
        width: '15%',
        key: 'customname',
        formConfig: {
            style: { width: 200 }
        },
    },
    {
        title: '销售价',
        dataIndex: 'pricesetNprice',
        editable: true,
        width:'15%',
        key: 'tenantid',
        formConfig: {
            type: "number",
        },
    },
    {
        title: '市场价',
        dataIndex: 'pricesetMakeprice',
        editable: true,
        width: '15%',
        key: 'tenantid',
        formConfig: {
            type: "number",
        },
    },
    {
        title: '成本价',
        dataIndex: 'pricesetAsprice',
        editable: true,
        width: '15%',
        key: 'tenantid',
        formConfig: {
            type: "number",
        },
    },
    {
        title: '重量',
        dataIndex: 'goodsWeight',
        editable: true,
        width:'15%',
        key: 'tenantid',
        formConfig: {
            type: "number",
        },
    },
    {
        title: '库存',
        dataIndex: 'goodsNum',
        editable: true,
        width: '15%',
        key: 'tenantid',
        formConfig: {
            type: "number",
        },
    }
]
