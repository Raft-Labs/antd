import React, { FC } from 'react';
import { Layout, theme } from 'antd';
import type { BasicProps } from 'antd/es/layout/layout';

const { Header: AntdHeader } = Layout;

export interface HeaderProps
  extends React.ForwardRefExoticComponent<
    BasicProps & React.RefAttributes<HTMLElement>
  > {
  dataTestId?: string;
}

export const Header: FC<HeaderProps> = ({ dataTestId, ...props }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <AntdHeader
      {...props}
      data-testid={dataTestId}
      style={{
        backgroundColor: colorBgContainer,
      }}
    />
  );
};

export default Header;
