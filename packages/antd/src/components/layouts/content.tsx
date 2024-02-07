import React, { FC } from 'react';
import { Layout } from 'antd';
import type { BasicProps } from 'antd/es/layout/layout';

const { Content: AntdContent } = Layout;

export interface ContentProps
  extends React.ForwardRefExoticComponent<
    BasicProps & React.RefAttributes<HTMLElement>
  > {
  dataTestId?: string;
}

export const Content: FC<ContentProps> = ({ dataTestId, ...props }) => {
  return <AntdContent {...props} data-testid={dataTestId} />;
};

export default Content;
