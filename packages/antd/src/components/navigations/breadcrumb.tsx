import React, { FC } from 'react';
import type { BreadcrumbProps as AntdBreadcrumbProps } from 'antd';
import { Breadcrumb as AntdBreadcrumb } from 'antd';
import type { ItemType } from 'antd/es/breadcrumb/Breadcrumb';
import { omit } from 'lodash';

export type BreadcrumbItemType = ItemType & {
  dataTestId: string;
};

export interface BreadcrumbProps extends AntdBreadcrumbProps {
  items: BreadcrumbItemType[];
}

export const Breadcrumb: FC<BreadcrumbProps> = ({ items, ...props }) => {
  return (
    <AntdBreadcrumb
      {...props}
      items={items.map((item) => ({
        ...omit(item, ['dataTestId']),
        'data-testid': item.dataTestId,
      }))}
    />
  );
};

export default Breadcrumb;
