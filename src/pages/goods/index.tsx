import {Spin, Table, Button, Form} from 'antd';
import {
  useGoods,
  useDynamicTableHeight,
  useImmutableCallback,
  useMaretialConfigImpl
} from '@brushes/store';
import {SpacingJsx, DynamicForm, QjIcon, dynamicFormFields, useFormImpl} from '@brushes/components';
import DrawerJsx from './components/drawer';
import { defaultFormConfig, defaultColumns } from './config';
import './index.scss'

const GoodsJsx = () => {
  const [ form ] = Form.useForm();
  const {data = {}, pagination, isLoading, queryImpl, onChange} = useGoods('goods');
  const {height = 0, measuredRef} = useDynamicTableHeight();

  const {
    configFormFields,
    formConfig,
    setClose,
    close,
    changeImpl,
    tableColumns,
    formInitialValue
  } = useMaretialConfigImpl(defaultColumns, defaultFormConfig);

  const onChangeImpl = useImmutableCallback((params:any) => {
    onChange(params)
  })

  const { loading, onFinish, onFinishFailed } = useFormImpl(
    form,
    queryImpl
  );

  return (
    <div className={'container'} ref={measuredRef}>
      <SpacingJsx padding={15}>
        <Form
          layout={'inline'}
          form={form}
          className="normal_search"
          onFinishFailed={onFinishFailed}
          onFinish={onFinish}
        >
          <div className={'normal_item'}>
            {dynamicFormFields(formConfig, form)}
          </div>
          <div className={"operate"}>
            <Button
              loading={loading}
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              查询
            </Button>
            <Button danger onClick={() => setClose(true)}>
              <QjIcon name={'icon-caozuojilu'}/>
            </Button>
          </div>
        </Form>
        <DrawerJsx close={close} setClose={setClose}>
          <DynamicForm
            initialValues={formInitialValue.current}
            onSubmit={changeImpl}
            fields={configFormFields.current}
            saveText={'更新配置'}
          />
        </DrawerJsx>
      </SpacingJsx>
      <SpacingJsx>
        <Spin spinning={isLoading}>
          <Table
            scroll={{
              scrollToFirstRowOnChange: true,
              y: height - 45,
            }}
            onChange={onChangeImpl}
            rowKey={'goodsId'}
            columns={tableColumns}
            dataSource={data.list}
            pagination={pagination}
          />
        </Spin>
      </SpacingJsx>
    </div>
  )
}

export default GoodsJsx;
