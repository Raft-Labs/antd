import React, { FC } from 'react';
import type { FloatButtonProps as AntdFloatButtonProps } from 'antd';
import { FloatButton as AntdFloatButton } from 'antd';

export interface FloatButtonProps extends AntdFloatButtonProps {
  dataTestId: string;
}

export const FloatButton: FC<FloatButtonProps> = ({ dataTestId, ...props }) => {
  return <AntdFloatButton {...props} data-testid={dataTestId} />;
};

export default FloatButton;
