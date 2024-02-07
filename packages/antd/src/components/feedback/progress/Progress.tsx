import React, { FC } from 'react';
import { GetProps, Progress as AntdProgress } from 'antd';

export type ProgressProps = GetProps<typeof AntdProgress> & {
  dataTestId: string;
};

export const Progress: FC<ProgressProps> = ({ dataTestId, ...props }) => {
  return <AntdProgress {...props} data-testid={dataTestId} />;
};

export default Progress;
