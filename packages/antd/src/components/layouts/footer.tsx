import React, { FC } from 'react';
import { Layout, theme } from 'antd';
import type { BasicProps } from 'antd/es/layout/layout';

const { Footer: AntdFooter } = Layout;

export interface FooterProps
  extends React.ForwardRefExoticComponent<
    BasicProps & React.RefAttributes<HTMLElement>
  > {
  dataTestId?: string;
}

export const Footer: FC<FooterProps> = ({ dataTestId, ...props }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <AntdFooter
      {...props}
      data-testid={dataTestId}
      style={{
        backgroundColor: colorBgContainer,
      }}
    />
  );
};

export default Footer;
