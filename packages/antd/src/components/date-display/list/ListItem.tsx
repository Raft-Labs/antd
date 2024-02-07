import React, { FC } from 'react';
import { GetProps, List as AntdList } from 'antd';

const { Item: AntdListItem } = AntdList;

export type ListItemProps = GetProps<typeof AntdListItem> & {
  dataTestId: string;
};

export const ListItem: FC<ListItemProps> = ({ dataTestId, ...props }) => {
  return <AntdListItem {...props} data-testid={dataTestId} />;
};

export default ListItem;
