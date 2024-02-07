import React, { FC } from 'react';
import { GetProps, theme, TimePicker as AntdTimePicker } from 'antd';
import ComponentLoader from '../../component-loader';

export type TimePickerProps = GetProps<typeof AntdTimePicker> & {
  dataTestId: string;
  skeletonLoading?: boolean;
};

export const TimePicker: FC<TimePickerProps> = ({
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
  const width = {
    small: 134,
    middle: 142,
    large: 156,
  };
  const border = {
    small: borderRadius,
    middle: borderRadius,
    large: borderRadiusLG,
  };
  return (
    <ComponentLoader
      loading={skeletonLoading}
      className={props.className}
      style={{
        ...props.style,
        height: height[props.size ?? 'middle'],
        width: props.style?.width ?? width[props.size ?? 'middle'],
        minWidth: props.style?.minWidth ?? width[props.size ?? 'middle'],
        borderRadius: border[props.size ?? 'middle'],
      }}
    >
      <AntdTimePicker {...props} data-testid={dataTestId} />
    </ComponentLoader>
  );
};

export default TimePicker;
