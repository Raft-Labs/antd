import React, { FC } from 'react';
import type { SpaceProps as AntdSpaceProps } from 'antd';
import { Space as AntdSpace } from 'antd';

export interface SpaceProps extends AntdSpaceProps {
  dataTestId?: string;
}

export const Space: FC<SpaceProps> = ({ dataTestId, ...props }) => {
  return <AntdSpace {...props} data-testid={dataTestId} />;
};

export default Space;
