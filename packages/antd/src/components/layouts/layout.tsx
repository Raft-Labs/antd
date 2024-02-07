import React, { FC } from 'react';
import type { LayoutProps as AntdLayoutProps } from 'antd';
import { Layout as AntdLayout } from 'antd';

export interface LayoutProps extends AntdLayoutProps {
  dataTestId?: string;
}

export const Layout: FC<LayoutProps> = ({ dataTestId, ...props }) => {
  return <AntdLayout {...props} data-testid={dataTestId} />;
};

export default Layout;
