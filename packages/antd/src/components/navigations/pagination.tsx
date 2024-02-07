import React, { FC } from 'react';
import type { PaginationProps as AntdPaginationProps } from 'antd';
import { Pagination as AntdPagination } from 'antd';

export interface PaginationProps extends AntdPaginationProps {
  dataTestId: string;
}

export const Pagination: FC<PaginationProps> = ({ dataTestId, ...props }) => {
  return <AntdPagination {...props} data-testid={dataTestId} />;
};

export default Pagination;
