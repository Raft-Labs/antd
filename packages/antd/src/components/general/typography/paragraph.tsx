import React, { FC } from 'react';
import { Typography } from 'antd';
import type { ParagraphProps as AntdParagraphProps } from 'antd/es/typography/Paragraph';

export interface ParagraphProps extends AntdParagraphProps {
  dataTestId: string;
}

const { Paragraph: AntdParagraph } = Typography;
export const Paragraph: FC<ParagraphProps> = ({ dataTestId, ...props }) => {
  return <AntdParagraph {...props} data-testid={dataTestId} />;
};

export default Paragraph;
