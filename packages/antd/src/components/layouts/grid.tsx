import React, { FC } from 'react';
import type { ColProps as AntdColProps, RowProps as AntdRowProps } from 'antd';
import { Col as AntdCol, Row as AntdRow } from 'antd';

export interface RowProps extends AntdRowProps {
  dataTestId?: string;
}

export const Row: FC<RowProps> = ({ dataTestId, children, ...props }) => {
  return <AntdRow {...props} data-testid={dataTestId} children={children} />;
};

export interface ColProps extends AntdColProps {
  dataTestId?: string;
}

export const Col: FC<ColProps> = ({ dataTestId, children, ...props }) => {
  return <AntdCol {...props} data-testid={dataTestId} children={children} />;
};
