import React, { FC } from 'react';
import { DatePicker as AntdDatePicker, GetProps, theme } from 'antd';
import ComponentLoader from '../../component-loader';

const { RangePicker: AntdRangePicker } = AntdDatePicker;

export type DateRangePickerProps = GetProps<typeof AntdRangePicker> & {
  dataTestId: string;
  skeletonLoading?: boolean;
};

export const DateRangePicker: FC<DateRangePickerProps> = ({
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
    small: 298,
    middle: 306,
    large: 340,
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

export default DateRangePicker;
