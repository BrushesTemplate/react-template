import React from 'react';
import {FormInstance} from 'antd/es/form';
import { _ } from '@brushes/tools';
import { BrandJsx } from '../matetials';
import { DetailImage } from '@brushes/components';
const { get, isUndefined } = _;
export const basicConfig: Array<any> = [
    {
        label: '商品分类',
        name: 'platform',
        type: 'cascader',
        rules: [{required: true, message: '请选择分类'}],
        extraProps: {
            onChange(value: any, selectedOptions: any) {
                // @ts-ignore
                window.pntreeCode = get(selectedOptions, '[2].pntreeCode', '');
            },
            fieldNames: { label: 'classtreeName', value: 'classtreeCode', children: 'childList' },
            placeholder: '请选择商品分类'
        }
    },
    {
        label: '商品标题',
        name: 'goodsName',
        type: 'text',
        rules: [{required: true, message: '请输入标题'}],
        extraProps: {
            placeholder: '请输入商品标题'
        }
    },
    {
        label: '商品副标题',
        name: 'subtitle',
        type: 'text',
        extraProps: {
            placeholder: '请输入商品副标题'
        }
    },
    {
        label: '商品编号',
        name: 'goodsNo',
        rules: [{required: true, message: '请输入商品编号'}],
        type: 'text',
        extraProps: {
            placeholder: '请输入商品编号'
        }
    },
    {
        label: '重量(克)',
        name: 'unitConversion',
        type: 'number',
        extraProps: {
            style: {
                width: '100%'
            },
            placeholder: '请输入重量(克)'
        }
    },
    {
        label: '库存',
        name: 'inventory',
        type: 'number',
        rules: [{required: true, message: '请输入正整数'}],
        extraProps: {
            style: {
                width: '100%'
            },
            placeholder: '请输入正整数'
        }
    },
    {
        name: 'brand',
        type: 'slot',
        label: '品牌选择',
        calIsVisible: ({ getFieldValue } : FormInstance) => !isUndefined(getFieldValue(['basic', 'platform'])),
        extraProps: {
            render: ({form}: { form: FormInstance }) => {
                return <BrandJsx namePath={['basic', 'platform']} form={form}/>
            }
        }
    },
    {
        label: '商品图片',
        name: 'goodsimage',
        type: 'upload',
        rules: [{required: true, message: '请选择商品图片'}],
        render: DetailImage,
        extraProps: {
            suffixicon: <span style={{fontSize: 12, color: '#999'}}>建议上传400X400像素的图片</span>,
            accept: "image/*",
            maxCount: 5,
            listType: "picture-card",
            text: '上传图片',
        }
    },
    {
        label: '视频上传',
        name: 'goodsvideo',
        type: 'upload',
        render: DetailImage,
        extraProps: {
            accept: "video/*",
            maxCount: 1,
            text: '上传视频',
        }
    },
];

