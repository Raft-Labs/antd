import React, { FC } from 'react';
import { GetProps, Result as AntdResult } from 'antd';

export type ResultProps = GetProps<typeof AntdResult> & {
  dataTestId: string;
};

export const Result: FC<ResultProps> = ({ dataTestId, ...props }) => {
  return <AntdResult {...props} data-testid={dataTestId} />;
};

export default Result;
