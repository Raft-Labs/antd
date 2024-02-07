import React, { FC } from 'react';
import { GetProps, Input as AntdInput, theme } from 'antd';
import ComponentLoader from '../../component-loader';

const { TextArea: AntdTextArea } = AntdInput;

export type TextAreaProps = GetProps<typeof AntdInput.TextArea> & {
  dataTestId: string;
  skeletonLoading?: boolean;
};

export const TextArea: FC<TextAreaProps> = ({
  dataTestId,
  skeletonLoading,
  ...props
}) => {
  const {
    token: { borderRadius, borderRadiusLG },
  } = theme.useToken();
  const height = {
    small: 46,
    middle: 54,
    large: 66.28,
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
      <AntdTextArea {...props} data-testid={dataTestId} />
    </ComponentLoader>
  );
};

export default TextArea;
