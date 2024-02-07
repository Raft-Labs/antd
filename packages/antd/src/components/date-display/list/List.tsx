import React, { FC } from 'react';
import { GetProps, List as AntdList } from 'antd';

export type ListProps = GetProps<typeof AntdList> & {
  dataTestId: string;
};

export const List: FC<ListProps> = ({ dataTestId, ...props }) => {
  return <AntdList {...props} data-testid={dataTestId} />;
};

export default List;
