import {FormInstance} from 'antd/es/form';
import { fetchSpeOptByPntCodeNomRel } from '@brushes/store';
import React, {useEffect, useState } from 'react';
import {dynamicFormFields, FieldType, NamePath} from '@brushes/components';
import { useSearchParams } from 'react-router-dom';
import {usePageMode} from '@brushes/materials';

export const CategoryJsx = ({form, namePath}: { form: FormInstance; namePath: NamePath }) => {
  const value = form.getFieldValue(namePath);
  const mode = usePageMode();
  let [searchParams, ]  = useSearchParams();
  const [config, setConfig] = useState<Array<FieldType>>([]);
  useEffect(() => {
    (async () => {
      // @ts-ignore
      const pntreeCode = window.pntreeCode || searchParams.get('code');
      const data = await fetchSpeOptByPntCodeNomRel({ pntreeCode }) as any;
      const list = data.map((item: any, ind: number) => (
        {
          label: item.specName,
          calIsDisabled: () => mode === 'detail',
          name: ['catelog', 'category', ind],
          type: 'checkboxGroup',
          rules: [{ required: true, message: `${item.specName}至少选择一项` }],
          extraProps: {
            optionsName: 'specOptionName',
            optionsKey: 'specOptionName',
            options: item.specOptionList,
          }
        }
      ))
      setConfig(list);
    })();
    return () => {
      form.setFieldValue(['catelog', 'category'], [])
    }
  }, [value]);

  return (
    <>
      {dynamicFormFields(config, form)}
    </>
  )
}

