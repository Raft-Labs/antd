import React, { FC } from 'react';
import type { AnchorProps as AntdAnchorProps } from 'antd';
import { Anchor as AntdAnchor } from 'antd';

export interface AnchorProps extends AntdAnchorProps {
  dataTestId: string;
}

export const Anchor: FC<AnchorProps> = ({ dataTestId, ...props }) => {
  return <AntdAnchor {...props} data-testid={dataTestId} />;
};

export default Anchor;
