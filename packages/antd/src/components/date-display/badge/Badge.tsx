import React, { FC } from 'react';
import { Badge as AntdBadge, GetProps } from 'antd';

export type BadgeProps = GetProps<typeof AntdBadge> & {
  dataTestId: string;
};

export const Badge: FC<BadgeProps> = ({ dataTestId, ...props }) => {
  return <AntdBadge {...props} data-testid={dataTestId} />;
};

export default Badge;
