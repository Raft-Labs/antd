import React, { FC } from 'react';
import type { GetProp, MenuProps as AntdMenuProps } from 'antd';
import { Menu as AntdMenu } from 'antd';
import { omit } from 'lodash';

export type MenuItem = GetProp<AntdMenuProps, 'items'>[number] & {
  dataTestId: string;
  children?: MenuItem[];
};

export interface MenuProps extends Omit<AntdMenuProps, 'items'> {
  items: MenuItem[];
}

export const Menu: FC<MenuProps> = ({ items, ...props }) => (
  <AntdMenu
    {...props}
    items={
      items.map((item) => ({
        ...omit(item, ['dataTestId']),
        'data-testid': item.dataTestId,
        children: item.children?.map((child) => ({
          ...omit(child, ['dataTestId']),
          'data-testid': child.dataTestId,
        })),
      })) as AntdMenuProps['items']
    }
  />
);

export default Menu;
