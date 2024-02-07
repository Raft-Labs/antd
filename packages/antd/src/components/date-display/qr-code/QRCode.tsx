import React, { FC } from 'react';
import { GetProps, QRCode as AntdQRCode } from 'antd';

export type QRCodeProps = GetProps<typeof AntdQRCode> & {
  dataTestId: string;
};

export const QRCode: FC<QRCodeProps> = ({ dataTestId, ...props }) => {
  return <AntdQRCode {...props} data-testid={dataTestId} />;
};

export default QRCode;
