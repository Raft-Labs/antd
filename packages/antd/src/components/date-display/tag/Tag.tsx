import React, { FC } from 'react';
import { GetProps, Tag as AntdTag } from 'antd';

export type TagProps = GetProps<typeof AntdTag> & {
  dataTestId: string;
};

export const Tag: FC<TagProps> = ({ dataTestId, ...props }) => {
  return <AntdTag {...props} data-testid={dataTestId} />;
};

export default Tag;
