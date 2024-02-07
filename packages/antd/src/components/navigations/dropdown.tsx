import React, { FC } from 'react';
import type {
  DropdownProps as AntdDropdownProps,
  MenuProps as AntdMenuProps,
} from 'antd';
import { Dropdown as AntdDropdown } from 'antd';
import { omit } from 'lodash';
import { MenuProps } from './menu';

export interface DropdownProps extends AntdDropdownProps {
  menu: MenuProps;
}

export const Dropdown: FC<DropdownProps> = ({ menu, ...props }) => {
  return (
    <AntdDropdown
      {...props}
      menu={{
        ...omit(menu, ['items']),
        items: menu.items.map((item) => ({
          ...omit(item, ['dataTestId']),
          'data-testid': item.dataTestId,
          children: item.children?.map((child) => ({
            ...omit(child, ['dataTestId']),
            'data-testid': child.dataTestId,
          })),
        })) as AntdMenuProps['items'],
      }}
    />
  );
};

export default Dropdown;
