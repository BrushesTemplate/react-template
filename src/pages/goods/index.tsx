import {DynamicForm} from 'qin-form'
import {Spin, Table} from 'antd';
import {useGoods, useDynamicTableHeight} from '@brushes/store';
import {formConfig, columns} from './config';
import {Spacing} from '../../components';

const GoodsJsx = () => {
  const {data = {}, pagination, isLoading, queryImpl, onChange} = useGoods('B2Cchannel', 'goods');
  const {height = 0, measuredRef} = useDynamicTableHeight();

  return (
    <div className={'container'} ref={measuredRef}>
      <Spacing padding={15}>
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
              scrollToFirstRowOnChange: true,
              y: `calc(100vh - ${height}px)`,
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

export default GoodsJsx;
