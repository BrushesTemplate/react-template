import {FormInstance} from 'antd/es/form';
import { fetchSpeOptByPntCodeNomRel } from '@brushes/store';
import React, {useEffect, useState } from 'react';
import {dynamicFormFields, FieldType, NamePath} from '@brushes/components';
import { useParams } from 'react-router-dom';

export const CategoryJsx = ({form, namePath}: { form: FormInstance; namePath: NamePath }) => {
  const value = form.getFieldValue(namePath);
  let { code = '000000003' } = useParams();
  const [config, setConfig] = useState<Array<FieldType>>([]);
  useEffect(() => {
    (async () => {
      // @ts-ignore
      const pntreeCode = window.pntreeCode || code;
      const data = await fetchSpeOptByPntCodeNomRel({ pntreeCode }) as any;
      const list = data.map((item: any, ind: number) => (
        {
          label: item.specName,
          name: ['category', ind],
          type: 'checkboxGroup',
          extraProps: {
            optionsName: 'specOptionName',
            optionsKey: 'specOptionName',
            options: item.specOptionList,
          }
        }
      ))
      setConfig(list)
    })()
  }, [value]);

  return (
    <>
      {dynamicFormFields(config, form)}
    </>
  )
}

