import {config, transformDataConfig} from './mock';
import {DetailComponents} from '@brushes/materials';
import {useGoodsAddAndEditor} from '@brushes/store';
import {getStorage} from '@brushes/tools';


export const DetailGoodsJsx = () => {
  return <EditorGoodsJsx/>
}

export const EditorGoodsJsx = () => {
  const data = getStorage('formValue');
  const {pageConfig, onSubmit} = useGoodsAddAndEditor(config, data);
  return (
    <DetailComponents
      transformDataConfig={transformDataConfig}
      initialValues={data}
      pageConfig={pageConfig}
      onSubmit={onSubmit}
    />
  )
}

export const AddGoodsJsx = () => {
  const {pageConfig, onSubmit} = useGoodsAddAndEditor(config);
  return (
    <DetailComponents
      transformDataConfig={transformDataConfig}
      pageConfig={pageConfig}
      onSubmit={onSubmit}
    />
  )
}
