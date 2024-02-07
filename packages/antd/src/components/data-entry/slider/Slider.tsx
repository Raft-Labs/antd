import React, { FC } from 'react';
import { GetProps, Slider as AntdSlider, theme } from 'antd';
import ComponentLoader from '../../component-loader';

export type SliderProps = GetProps<typeof AntdSlider> & {
  dataTestId: string;
  skeletonLoading?: boolean;
};

export const Slider: FC<SliderProps> = ({
  dataTestId,
  skeletonLoading,
  ...props
}) => {
  const {
    token: { controlHeight, borderRadius },
  } = theme.useToken();

  return (
    <ComponentLoader
      loading={skeletonLoading}
      className={props.className}
      style={{
        ...props.style,
        width: props.style?.width ?? '100%',
        height: props.style?.height ?? controlHeight,
        borderRadius: props.style?.borderRadius ?? borderRadius,
      }}
    >
      <AntdSlider {...props} data-testid={dataTestId} />
    </ComponentLoader>
  );
};

export default Slider;
