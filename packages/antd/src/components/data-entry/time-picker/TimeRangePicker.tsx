import React, { FC } from 'react';
import { GetProps, theme, TimePicker as AntdTimePicker } from 'antd';
import ComponentLoader from '../../component-loader';

const { RangePicker: AntdRangePicker } = AntdTimePicker;

export type TimeRangePickerProps = GetProps<
  typeof AntdTimePicker.RangePicker
> & {
  dataTestId: string;
  skeletonLoading?: boolean;
};

export const TimeRangePicker: FC<TimeRangePickerProps> = ({
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
    small: 266,
    middle: 274,
    large: 302,
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
        borderRadius: border[props.size ?? 'middle'],
      }}
    >
      <AntdRangePicker {...props} data-testid={dataTestId} />
    </ComponentLoader>
  );
};

export default TimeRangePicker;
