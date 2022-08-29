import React from 'react';
import {FormInstance} from 'antd/es/form';
import { _ } from '@brushes/tools';
import {dynamicFormFields, NamePath} from '@brushes/components';
import { goodsDetail } from '@brushes/materials';
import { TableJsx } from '@brushes/materials';

const { useCategoryList, useCategoryTable } = goodsDetail
const { isUndefined } = _;

export const catelogConfig: Array<any> = [
    {
        name: 'category',
        type: 'slot',
        calIsVisible: ({ getFieldValue } : FormInstance) => !isUndefined(getFieldValue(['basic', 'platform'])),
        extraProps: {
            render: ({form, name}: { name: NamePath; form: FormInstance }) => {
                const config = useCategoryList(name, form, ['basic', 'platform']);
                return (
                  <>
                      {dynamicFormFields(config, form)}
                  </>
                )
            }
        }
    },
    {
        name: 'rsSpecValueDomainList',
        type: 'slot',
        labelCol: { span: 0 },
        wrapperCol: { span: 24 },
        // calIsVisible: ({ getFieldValue } : FormInstance) => !isUndefined(getFieldValue(['basic', 'category'])),
        extraProps: {
            render: ({form, name}: { form: FormInstance; name: NamePath }) => {
                const config = useCategoryTable(form, name, ['catelog', 'category']);
                return (
                  <TableJsx
                    dataSource={config}
                    form={form}
                    rowKey={'skuName'}
                    pagination={false}
                    name={name}
                    columns={columns}
                    transformSubmitDataConfig={[]}
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
