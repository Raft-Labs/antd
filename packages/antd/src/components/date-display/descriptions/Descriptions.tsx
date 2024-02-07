import React, { FC } from 'react';
import { Descriptions as AntdDescriptions, GetProps } from 'antd';

export type DescriptionsProps = GetProps<typeof AntdDescriptions> & {
  dataTestId: string;
};

export const Descriptions: FC<DescriptionsProps> = ({
  dataTestId,
  ...props
}) => {
  return <AntdDescriptions {...props} data-testid={dataTestId} />;
};

export default Descriptions;
