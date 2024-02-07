import React, { FC } from 'react';
import { GetProps, List as AntdList } from 'antd';

const {
  Item: { Meta: AntdListItemMeta },
} = AntdList;

export type ListItemMetaProps = GetProps<typeof AntdListItemMeta> & {
  dataTestId: string;
};

export const ListItemMeta: FC<ListItemMetaProps> = ({
  dataTestId,
  ...props
}) => {
  return <AntdListItemMeta {...props} data-testid={dataTestId} />;
};

export default ListItemMeta;
