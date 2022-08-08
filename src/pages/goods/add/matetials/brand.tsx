import {FormInstance} from 'antd/es/form';
import { queryBrandRelationPage } from '@brushes/store';
import { useEffect, useState } from 'react';
import {dynamicFormFields, FieldType, NamePath} from '@brushes/components';
import { _ } from '@brushes/tools';
import {useParams} from 'react-router-dom';

const { set } = _;

export const BrandJsx = ({form, namePath}: { form: FormInstance; namePath: NamePath }) => {
  const value = form.getFieldValue(namePath);
  let { code = '000000003' } = useParams();

  const [config, setConfig] = useState<Array<FieldType>>([
    {
      label: '',
      name: ['basic', 'brand'],
      type: 'select',
      extraProps: {
        optionsName: 'brandName',
        optionsKey: 'brandCode',
        options: [],
      }
    }
  ]);
  useEffect(() => {
    (async () => {
      // @ts-ignore
      const pntreeCode = window.pntreeCode || code
      const data = await queryBrandRelationPage({ pntreeCode }) as any;
      set(config, '[0].extraProps.options', data?.list);
      setConfig([...config])
    })()
    return () => form.setFieldValue(['basic', 'brand'], '')
  }, [value]);

  return (
    <>{dynamicFormFields(config, form)}</>
  )
}
