import React, { FC } from 'react';
import { GetProps, Watermark as AntdWatermark } from 'antd';

export type WatermarkProps = GetProps<typeof AntdWatermark> & {
  dataTestId: string;
};

export const Watermark: FC<WatermarkProps> = ({ dataTestId, ...props }) => {
  return <AntdWatermark {...props} data-testid={dataTestId} />;
};

export default Watermark;
