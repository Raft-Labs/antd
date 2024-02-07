import React, { FC } from 'react';
import { Cascader as AntdCascader, GetProps, theme } from 'antd';
import ComponentLoader from '../../component-loader';

export type CascaderProps = GetProps<typeof AntdCascader> & {
  dataTestId: string;
  skeletonLoading?: boolean;
};

export const Cascader: FC<CascaderProps> = ({
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
      className={props.className}
      style={{
        ...props.style,
        height: height[props.size ?? 'middle'],
        width: props.style?.width ?? width[props.size ?? 'middle'],
        minWidth: props.style?.minWidth ?? width[props.size ?? 'middle'],
        borderRadius:
          props.style?.borderRadius ?? border[props.size ?? 'middle'],
      }}
    >
      <AntdCascader {...props} data-testid={dataTestId} />
    </ComponentLoader>
  );
};

export default Cascader;
