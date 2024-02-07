import React, { FC } from 'react';
import type { GetProps } from 'antd';
import { Button as AntdButton } from 'antd';

export type ButtonProps = GetProps<typeof AntdButton> & {
  dataTestId: string;
};

export const Button: FC<ButtonProps> = ({ dataTestId, ...props }) => {
  return <AntdButton {...props} data-testid={dataTestId} />;
};

export default Button;
