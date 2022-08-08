import React from 'react';
import {FormInstance} from 'antd/es/form';
import get from 'lodash/get';
import isUndefined from 'lodash/isUndefined';
import {BrandJsx} from '../matetials';
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
        suffixicon: <span style={{fontSize: 12, color: '#999'}}>建议上传400X400像素的图片</span>,
        rules: [{required: true, message: '请选择商品图片'}],
        render() {
            return (
              <div>
                  <img width={100}
                       src={'https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics4.baidu.com%2Ffeed%2F4e4a20a4462309f7b7066a1cd5cf70f9d6cad69b.jpeg%3Ftoken%3D3a894fac1fde3c91686509d5981c781e&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1655312400&t=eae33008a18db790e8534c986357a092'}/>
              </div>
            )
        },
        extraProps: {
            maxCount: 5,
            listType: "picture-card",
            text: '上传图片',
        }
    },
    {
        label: '视频上传',
        name: 'goodsvideo',
        type: 'upload',
        extraProps: {
            maxCount: 1,
            text: '上传视频',
        }
    },
];

