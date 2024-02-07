import React, { FC } from 'react';
import { GetProps, Input as AntdInput, theme } from 'antd';
import ComponentLoader from '../../component-loader';

export type InputProps = GetProps<typeof AntdInput> & {
  dataTestId: string;
  skeletonLoading?: boolean;
};

export const Input: FC<InputProps> = ({
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
  return (
    <ComponentLoader
      loading={skeletonLoading}
      style={{
        ...props.style,
        width: props.style?.width ?? '100%',
        height: props.style?.height ?? height[props.size ?? 'middle'],
        borderRadius:
          props.style?.borderRadius ?? border[props.size ?? 'middle'],
      }}
    >
      <AntdInput {...props} data-testid={dataTestId} />
    </ComponentLoader>
  );
};

export default Input;
