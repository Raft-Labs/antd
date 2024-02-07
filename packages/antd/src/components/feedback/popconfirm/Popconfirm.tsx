import React, { FC } from 'react';
import { GetProps, Popconfirm as AntdPopconfirm } from 'antd';

export type PopconfirmProps = GetProps<typeof AntdPopconfirm> & {
  dataTestId: string;
};

export const Popconfirm: FC<PopconfirmProps> = ({ dataTestId, ...props }) => {
  return <AntdPopconfirm {...props} data-testid={dataTestId} />;
};

export default Popconfirm;
