import React, { FC } from 'react';
import { Card as AntdCard, GetProps } from 'antd';

const { Meta: AntdCardMeta } = AntdCard;

export type CardMetaProps = GetProps<typeof AntdCardMeta> & {
  dataTestId: string;
};

export const CardMeta: FC<CardMetaProps> = ({ dataTestId, ...props }) => {
  return <AntdCardMeta {...props} data-testid={dataTestId} />;
};

export default CardMeta;
