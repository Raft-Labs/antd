import React, { FC } from 'react';
import { GetProps, Segmented as AntdSegmented } from 'antd';

export type SegmentedProps = GetProps<typeof AntdSegmented> & {
  dataTestId: string;
};

export const Segmented: FC<SegmentedProps> = ({ dataTestId, ...props }) => {
  return <AntdSegmented {...props} data-testid={dataTestId} />;
};

export default Segmented;
