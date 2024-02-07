import React, { FC } from 'react';
import { Empty as AntdEmpty, GetProps } from 'antd';

export const { PRESENTED_IMAGE_SIMPLE, PRESENTED_IMAGE_DEFAULT } = AntdEmpty;

export type EmptyProps = GetProps<typeof AntdEmpty> & {
  dataTestId: string;
};

export const Empty: FC<EmptyProps> = ({ dataTestId, ...props }) => {
  return <AntdEmpty {...props} data-testid={dataTestId} />;
};

export default Empty;
