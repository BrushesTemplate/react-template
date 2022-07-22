import { Switch } from 'antd';
// @ts-ignore
import { useGoodsImpl } from '@brushes/store'

const SwitchStatus = ({ text, record }: { text: number; record: any }) => {
  const { update } = useGoodsImpl(['goods'])
  const onChange = (value:any) => {
    const { goodsId = '' } = record;
    update({ goodsId, dataState: value ? 2 : 0, channelCode: 'B2Cchannel' })
  }

  return <Switch checked={text === 2} onChange={onChange} />
}

export default SwitchStatus;
