import React, { FC } from 'react';
import { Collapse as AntdCollapse, GetProps } from 'antd';

export type CollapseProps = GetProps<typeof AntdCollapse> & {
  dataTestId: string;
};

export const Collapse: FC<CollapseProps> = ({ dataTestId, ...props }) => {
  return <AntdCollapse {...props} data-testid={dataTestId} />;
};

export default Collapse;
