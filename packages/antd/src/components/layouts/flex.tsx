import React, { FC } from 'react';
import type { FlexProps as AntdFlexProps } from 'antd';
import { Flex as AntdFlex } from 'antd';

export interface FlexProps extends AntdFlexProps {
  dataTestId?: string;
}

export const Flex: FC<FlexProps> = ({ dataTestId, children, ...props }) => {
  return <AntdFlex {...props} data-testid={dataTestId} children={children} />;
};

export default Flex;
