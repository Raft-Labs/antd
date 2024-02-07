import React, { FC } from 'react';
import {
  ColorPicker as AntdColorPicker,
  GetProps,
  Skeleton,
  theme,
} from 'antd';

export type ColorPickerProps = GetProps<typeof AntdColorPicker> & {
  dataTestId: string;
  skeletonLoading?: boolean;
};

export const ColorPicker: FC<ColorPickerProps> = ({
  dataTestId,
  skeletonLoading,
  ...props
}) => {
  const {
    token: {
      controlHeight,
      controlHeightSM,
      controlHeightLG,
      borderRadius,
      borderRadiusLG,
    },
  } = theme.useToken();
  const height = {
    small: controlHeightSM,
    middle: controlHeight,
    large: controlHeightLG,
  };
  const border = {
    small: borderRadius,
    middle: borderRadius,
    large: borderRadiusLG,
  };
  return skeletonLoading ? (
    <Skeleton.Avatar
      active
      className={props.className}
      style={{
        width: height[props.size ?? 'middle'],
        height: height[props.size ?? 'middle'],
        borderRadius: border[props.size ?? 'middle'],
        ...props.style,
      }}
      shape={'square'}
    />
  ) : (
    <AntdColorPicker {...props} data-testid={dataTestId} />
  );
};

export default ColorPicker;
