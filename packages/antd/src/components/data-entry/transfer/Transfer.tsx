import React, { FC } from 'react';
import {
  Transfer as AntdTransfer,
  TransferProps as AntdTransferProps,
} from 'antd';

export interface TransferProps extends AntdTransferProps {
  dataTestId: string;
}

export const Transfer: FC<TransferProps> = ({ dataTestId, ...props }) => {
  return <AntdTransfer {...props} data-testid={dataTestId} />;
};

export default Transfer;
