import React, { FC } from 'react';
import { GetProps, Image as AntdImage } from 'antd';

export type ImageProps = GetProps<typeof AntdImage> & {
  dataTestId: string;
};

export const Image: FC<ImageProps> = ({ dataTestId, ...props }) => {
  return <AntdImage {...props} data-testid={dataTestId} />;
};

export default Image;
