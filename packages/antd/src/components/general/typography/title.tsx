import React, { FC } from 'react';
import { Typography } from 'antd';
import type { TitleProps as AntdTitleProps } from 'antd/es/typography/Title';

export interface TitleProps extends AntdTitleProps {
  dataTestId: string;
}

const { Title: AntdTitle } = Typography;
export const Title: FC<TitleProps> = ({ dataTestId, ...props }) => {
  return <AntdTitle {...props} data-testid={dataTestId} />;
};

export default Title;
