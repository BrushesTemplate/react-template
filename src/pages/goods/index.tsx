import {Spin, Table} from 'antd';
import {useGoods, useDynamicTableHeight} from '@brushes/store';
import {formConfig, columns} from './config';
import { SpacingJsx, DynamicForm } from '@brushes/components';

const GoodsJsx = () => {
  const {data = {}, pagination, isLoading, queryImpl, onChange} = useGoods('goods');
  const onChangeImpl = () => {
    onChange(123123)
  }
  const {height = 0, measuredRef} = useDynamicTableHeight();

  return (
    <div className={'container'} ref={measuredRef}>
      <SpacingJsx padding={15}>
        <DynamicForm
          layout={'inline'}
          fields={formConfig}
          saveText={'查询'}
          onSubmit={queryImpl}
        />
      </SpacingJsx>
      <SpacingJsx>
        <Spin spinning={isLoading}>
          <Table
            scroll={{
              scrollToFirstRowOnChange: true,
              y: `calc(100vh - ${height}px)`,
            }}
            onChange={onChangeImpl}
            rowKey={'goodsId'}
            columns={columns}
            dataSource={data.list}
            pagination={pagination}
          />
        </Spin>
      </SpacingJsx>
    </div>
  )
}

export default GoodsJsx;
