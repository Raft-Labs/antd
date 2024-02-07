import React, { FC } from 'react';
import { Alert as AntdAlert, GetProps } from 'antd';

export type AlertProps = GetProps<typeof AntdAlert> & {
  dataTestId: string;
};

export const Alert: FC<AlertProps> = ({ dataTestId, ...props }) => {
  return <AntdAlert {...props} data-testid={dataTestId} />;
};

export default Alert;
