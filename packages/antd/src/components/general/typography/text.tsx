import React, { FC } from 'react';
import { Typography } from 'antd';
import type { TextProps as AntdTextProps } from 'antd/es/typography/Text';

export interface TextProps extends AntdTextProps {
  dataTestId: string;
}

const { Text: AntdText } = Typography;
export const Text: FC<TextProps> = ({ dataTestId, ...props }) => {
  return <AntdText {...props} data-testid={dataTestId} />;
};

export default Text;
