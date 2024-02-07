import React, { FC } from 'react';
import { DatePicker as AntdDatePicker, GetProps, theme } from 'antd';
import ComponentLoader from '../../component-loader';

export type DatePickerProps = GetProps<typeof AntdDatePicker> & {
  dataTestId: string;
  skeletonLoading?: boolean;
};

export const DatePicker: FC<DatePickerProps> = ({
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
    small: 148,
    middle: 158,
    large: 175,
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
      <AntdDatePicker {...props} data-testid={dataTestId} />
    </ComponentLoader>
  );
};

export default DatePicker;
