import React, { FC } from 'react';
import { Typography } from 'antd';
import type { LinkProps as AntdLinkProps } from 'antd/es/typography/Link';

export interface LinkProps extends AntdLinkProps {
  dataTestId: string;
}

const { Link: AntdLink } = Typography;
export const Link: FC<LinkProps> = ({ dataTestId, ...props }) => {
  return <AntdLink data-testid={dataTestId} {...props} />;
};

export default Link;
