import {config} from './mock';
import {DetailComponents} from '@brushes/materials';
import {useGoodsAddAndEditor} from '@brushes/store';
import {getStorage} from '@brushes/tools';


export const DetailGoodsJsx = () => {
  return <EditorGoodsJsx/>
}

export const EditorGoodsJsx = () => {
  const data = getStorage('formValue');
  const {pageConfig, onSubmit} = useGoodsAddAndEditor(config, data);
  return <DetailComponents initialValues={data} pageConfig={pageConfig} onSubmit={onSubmit}/>
}

export const AddGoodsJsx = () => {
  const {pageConfig, onSubmit} = useGoodsAddAndEditor(config);
  return <DetailComponents pageConfig={pageConfig} onSubmit={onSubmit}/>
}
