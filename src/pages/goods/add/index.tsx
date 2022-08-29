import {config, transformDataConfig} from './mock';
import {DetailComponents, goodsDetail} from '@brushes/materials';
import {getStorage} from '@brushes/tools';

const { useGoodsAddAndEditor } = goodsDetail

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
