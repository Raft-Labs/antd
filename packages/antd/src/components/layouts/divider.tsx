import React, { FC } from 'react';
import type { DividerProps as AntdDividerProps } from 'antd';
import { Divider as AntdDivider } from 'antd';

export interface DividerProps extends AntdDividerProps {
  dataTestId?: string;
}

export const Divider: FC<DividerProps> = ({ dataTestId, ...props }) => {
  return <AntdDivider {...props} data-testid={dataTestId} />;
};

export default Divider;
