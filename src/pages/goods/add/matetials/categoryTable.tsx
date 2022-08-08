import {FormInstance} from 'antd/es/form';
import {NamePath} from '@brushes/components';
import {TableJsx} from '@brushes/materials';
import React, {memo, useEffect, useState, useRef} from 'react';


/**
 * 全排算法
 * @param chunks
 * @returns {[]}
 */
const combine = (...chunks: Array<any>) => {
  if(chunks.length === 0) return [];
  const res = [] as any;
  let helper = function (chunkIndex: number, prev: string | any[]) {
    let chunk = chunks[chunkIndex];
    let isLast = chunkIndex === chunks.length - 1;
    for (let val of chunk) {
      let cur = prev.concat(val);
      if (isLast) {
        // 如果已经处理到数组的最后一项了 则把拼接的结果放入返回值中
        res.push(cur)
      } else {
        helper(chunkIndex + 1, cur)
      }
    }
  };
  // 从属性数组下标为 0 开始处理
  // 并且此时的 prev 是个空数组
  helper(0, []);
  return res
};

const CategoryTable = ({form, namePath, initialValue, category, columns}:
                         { initialValue: Array<any>;
                           category: Array<any>;
                           columns: Array<any>;
                           form: FormInstance;
                           namePath: NamePath }) => {

  const [dataSource, setDataSource] = useState(initialValue);
  const isFirst = useRef(true);
  useEffect(() => {
    console.log(43, isFirst.current, initialValue, category)
    const list = combine(...category);
    let arr = initialValue
    if(!isFirst.current) {
      arr = list.map((item: any) => ({
        skuName: item.join(','),
        skuNo: form.getFieldValue(['basic','goodsNo']),
        goodsNum: form.getFieldValue(['basic','inventory']),
        goodsWeight: form.getFieldValue(['basic','unitConversion']),
        pricesetNprice: form.getFieldValue(['price','pricesetNprice']),
        pricesetMakeprice: form.getFieldValue(['price','pricesetMakeprice']),
        pricesetAsprice: form.getFieldValue(['price', 'pricesetAsprice']),
      }))
    }
    setDataSource(arr);
    return () => {
      isFirst.current = false;
    };
  }, [category])

  return (
    <TableJsx
      dataSource={dataSource}
      form={form}
      rowKey={'skuName'}
      pagination={false}
      name={namePath}
      columns={columns}
      transformSubmitDataConfig={[]}
    />
  )
}
export const CategoryTableJsx = memo(CategoryTable)
