import React, { FC } from 'react';
import { Drawer as AntdDrawer, GetProps } from 'antd';

export type DrawerProps = GetProps<typeof AntdDrawer> & {
  dataTestId: string;
};

export const Drawer: FC<DrawerProps> = ({ dataTestId, ...props }) => {
  return <AntdDrawer {...props} data-testid={dataTestId} />;
};

export default Drawer;
