import {Spin, Table} from 'antd';
import {
  useGoods,
} from '@brushes/store';
import {SpacingJsx} from '@brushes/components';
import {SearchMaterials} from '@brushes/materials';
import {defaultFormConfig, defaultColumns} from './config';

export const GoodsJsx = () => {
  const {data = {}, pagination, isLoading, queryImpl, onChange} = useGoods('goods');

  return (
    <SearchMaterials
      defaultColumns={defaultColumns}
      defaultFormConfig={defaultFormConfig}
      queryImpl={queryImpl}
      drawerTitle={'商品模块配置'}
      render={(height: number, columns: Array<any>) =>
        <SpacingJsx>
          <Table
            loading={isLoading}
            scroll={{
              scrollToFirstRowOnChange: true,
              y: height - 45,
            }}
            sticky
            onChange={onChange}
            rowKey={'goodsId'}
            columns={columns}
            dataSource={data.list}
            pagination={pagination}
          />
        </SpacingJsx>
      }
    />
  )
}
