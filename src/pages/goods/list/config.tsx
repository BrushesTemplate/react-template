import {Space, Button, Switch} from 'antd';
import React from 'react';
import { FieldType } from '@brushes/components';
import { ColumnsType } from 'antd/es/table';

import {
    PlusCircleOutlined,
    EditOutlined,
} from '@ant-design/icons'
import {BaseButtonProps} from 'antd/lib/button/button';
import {useGoodsImpl, useImmutableCallback} from '@brushes/store';

export const defaultFormConfig: Array<FieldType> = [
    {
        label: '商品名称',
        name: 'goodsName',
        type: 'text',
        extraProps: {
            placeholder: '请输入商品名称'
        }
    },
    {
        label: '商品编号',
        name: 'goodsNo',
        type: 'text',
        extraProps: {
            placeholder: '请输入商品编号'
        }
    },
    {
        label: '库存',
        name: 'goodsNum',
        type: 'number',
        extraProps: {
            style: {
                width: '100%'
            },
            placeholder: '请输入库存'
        }
    },
    {
        label: '价格',
        name: 'pricesetNprice',
        type: 'number',
        extraProps: {
            style: {
                width: '100%'
            },
            placeholder: '请输入价格'
        }
    },
    {
        label: '是否上架',
        name: 'dataOpbillstate',
        type: 'select',
        extraProps: {
            allowClear: 'true',
            style: {
                width: '100%'
            },
            placeholder: '请输入商品名称',
            options: [
                {
                    label: '全部',
                    value: ''
                },
                {
                    label: '是',
                    value: '1'
                },
                {
                    label: '否',
                    value: '0'
                }
            ]
        }
    },
    {
        label: '商品分类',
        name: 'classtreeCode',
        type: 'text',
        extraProps: {
            placeholder: '请输入商品名称'
        }
    }
    // {
    //   label: "价格区间",
    //   type: "complex",
    //   extraProps: {
    //     innerForm: [{
    //       name: "pricesetNpriceQmin",
    //       label: "",
    //       type: "number",
    //     },
    //       {
    //         name: "pricesetNpriceQmax",
    //         label: "",
    //         type: "number",
    //       }],
    //   },
    // },
];


interface OperateType extends BaseButtonProps{
    code: string;
    name: string;
}
export const operate : Array<OperateType> = [
    {
        code: 'view',
        name: '查看',
        icon: <PlusCircleOutlined />,
        type: 'primary'
    },
    {
        code: 'editor',
        name: '编辑',
        icon: <EditOutlined />,
    }
]
export const defaultColumns: ColumnsType<any> = [
    {
        title: '序号',
        dataIndex: 'orderNumber',
        width: 80,
        render: (text: any, data: object, ind: number) => ind + 1
    },
    {
        title: '商品名称',
        width: 200,
        dataIndex: 'goodsName',
        key: 'goodsName'
    },
    {
        title: '商品编号',
        width: 150,
        dataIndex: 'goodsShowno',
        key: 'goodsShowno'
    },
    {
        width: 120,
        title: '价格',
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
        title: '操作',
        width: 200,
        fixed: 'right',
        dataIndex: 'action',
        render: (text: string, record: object) => <OperateJsx record={record}/>
    }
];

const SwitchStatus = ({ text, record }: { text: number; record: any }) => {
    const { update } = useGoodsImpl(['goods'])
    const onChange = (value:any) => {
        const { goodsId = '' } = record;
        update({ goodsId, dataState: value ? 2 : 0, channelCode: 'B2Cchannel' })
    }

    return <Switch checked={text === 2} onChange={onChange} />
}

const OperateJsx = ({record} : {record: object}) => {
    const { operateImpl } = useGoodsImpl(['goods'])

    const operateHandler = useImmutableCallback((e:any) => {
        operateImpl(e, record)
    })

    return (
      <Space onClick={operateHandler}>
          {operate.map(({ code, name, ...props }) => (
            <Button data-code={code} {...props} key={code}>
                {name}
            </Button>
          ))}
      </Space>
    )
}
