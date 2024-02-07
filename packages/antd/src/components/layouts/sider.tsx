import React, { FC } from 'react';
import { Layout, theme } from 'antd';
import type { BasicProps } from 'antd/es/layout/layout';

const { Sider: AntdSider } = Layout;

export interface SiderProps
  extends React.ForwardRefExoticComponent<
    BasicProps & React.RefAttributes<HTMLElement>
  > {
  dataTestId?: string;
}

export const Sider: FC<SiderProps> = ({ dataTestId, ...props }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <AntdSider
      {...props}
      data-testid={dataTestId}
      style={{
        backgroundColor: colorBgContainer,
      }}
    />
  );
};

export default Sider;
