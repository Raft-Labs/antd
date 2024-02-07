import React, { FC } from 'react';
import { GetProps, Select as AntdSelect, theme } from 'antd';
import ComponentLoader from '../../component-loader';

export type SelectProps = GetProps<typeof AntdSelect> & {
  dataTestId: string;
  skeletonLoading?: boolean;
};

export const Select: FC<SelectProps> = ({
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
    small: 184,
    middle: 184,
    large: 184,
  };

  const border = {
    small: borderRadius,
    middle: borderRadius,
    large: borderRadiusLG,
  };
  return (
    <ComponentLoader
      loading={skeletonLoading}
      style={{
        ...props.style,
        width: props.style?.width ?? width[props.size ?? 'middle'],
        height: props.style?.height ?? height[props.size ?? 'middle'],
        minWidth: props.style?.minWidth ?? width[props.size ?? 'middle'],
        borderRadius:
          props.style?.borderRadius ?? border[props.size ?? 'middle'],
      }}
    >
      <AntdSelect
        {...props}
        style={{
          ...props.style,
          minWidth: props.style?.minWidth ?? 184,
        }}
        data-testid={dataTestId}
      />
    </ComponentLoader>
  );
};

export default Select;
