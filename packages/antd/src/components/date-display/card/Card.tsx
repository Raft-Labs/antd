import React, { FC } from 'react';
import { Card as AntdCard, GetProps } from 'antd';

export type CardProps = GetProps<typeof AntdCard> & {
  dataTestId: string;
};

export const Card: FC<CardProps> = ({ dataTestId, ...props }) => {
  return <AntdCard {...props} data-testid={dataTestId} />;
};

export default Card;
