import { DynamicForm } from 'qin-form'
import {Spin, Table} from 'antd';
import { useGoods } from '@brushes/store';
import { formConfig, columns } from './config';
import { useDynamicTableHeight } from '@brushes/tools';
import {Spacing} from '../../components';
const OrderJsx = () => {
  const { data = {}, pagination, isLoading, queryImpl, onChange } = useGoods('B2Cchannel', 'goods');
  const { height, measuredRef } = useDynamicTableHeight();

  return (
    <div className={'container'} ref={measuredRef}>
      <Spacing padding={15} marginTop={15}>
      <DynamicForm
        layout={'inline'}
        fields={formConfig}
        saveText={'查询'}
        onSubmit={queryImpl}
      />
      </Spacing>
      <Spacing>
        <Spin spinning={isLoading}>
          <Table
            scroll={{
              y: height,
            }}
            onChange={onChange}
            rowKey={'goodsId'}
            columns={columns}
            dataSource={data.list}
            pagination={pagination}
          />
        </Spin>
      </Spacing>
    </div>
  )
}

export default OrderJsx;
