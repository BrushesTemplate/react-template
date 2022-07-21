import {Space, Button, Switch} from 'antd';
import React from 'react';
import { FieldType } from 'qin-form/dist/cjs/form/types/formField';
import { ColumnsType } from 'antd/es/table';
import SwitchStatus from './components/switchStatus';
export const formConfig: Array<FieldType> = [
    {
        label: '订单号',
        name: 'goodsName',
        type: 'text',
        extraProps: {
            placeholder: '请输入商品名称'
        }
    },
    {
        label: '收件人',
        name: 'goodsNo',
        type: 'text',
        extraProps: {
            placeholder: '请输入商品编号'
        }
    },
    {
        label: '手机号',
        name: 'dataOpbillstate',
        type: 'number',
        extraProps: {
            style: {width: 200},
            placeholder: '请输入手机号'
        }
    },
    {
        label: '下单时间',
        name: 'classtreeCode',
        type: 'range',
        // extraProps: {
        //     placeholder: '请输入商品名称'
        // }
    }
];

export const columns: ColumnsType<any> = [
    {
        title: '序号',
        dataIndex: 'orderNumber',
        width: 80,
        render: (text: any, data: object, ind: number) => ind + 1
    },
    {
        title: '全部订单',
        width: 200,
        dataIndex: 'goodsName',
        key: 'goodsName'
    },
    {
        title: '商品',
        width: 150,
        dataIndex: 'goodsShowno',
        key: 'goodsShowno'
    },
    {
        width: 120,
        title: '实付/数量',
        dataIndex: 'pricesetNprice',
        key: 'pricesetNprice'
    },
    {
        title: '库存',
        width: 80,
        dataIndex: 'goodsNum',
        key: 'goodsNum'
    },
    {
        title: '是否上架',
        width: 150,
        dataIndex: 'dataState',
        key: 'dataState',
        render: (text, record) => <SwitchStatus text={text} record={record}/>
    },
    {
        title: '分类',
        width: 150,
        dataIndex: 'classtreeName',
        key: 'classtreeName'
    },
    {
        title: '品牌',
        width: 150,
        dataIndex: 'brandName',
        key: 'brandName'
    },
    {
        title: '品牌',
        width: 150,
        dataIndex: 'brandName',
        key: 'brandName'
    },
    {
        title: '操作',
        width: 200,
        fixed: 'right',
        dataIndex: 'action',
        render: (text: string, record: object) => {
            return (
                <Space>
                    <Button type={'link'}>查看</Button>
                    <Button type={'link'}>编辑</Button>
                </Space>
            );
        }
    }
];
