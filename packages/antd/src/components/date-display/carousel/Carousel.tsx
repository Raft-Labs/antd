import React, { FC } from 'react';
import { Carousel as AntdCarousel, GetProps } from 'antd';

export type CarouselProps = GetProps<typeof AntdCarousel> & {
  dataTestId: string;
};

export const Carousel: FC<CarouselProps> = ({ dataTestId, ...props }) => {
  return <AntdCarousel {...props} data-testid={dataTestId} />;
};

export default Carousel;
