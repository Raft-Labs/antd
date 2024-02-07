import React, { FC } from 'react';
import { GetProps, Switch as AntdSwitch } from 'antd';
import ComponentLoader from '../../component-loader';

export type SwitchProps = GetProps<typeof AntdSwitch> & {
  dataTestId: string;
  skeletonLoading?: boolean;
};

export const Switch: FC<SwitchProps> = ({
  dataTestId,
  skeletonLoading,
  ...props
}) => {
  const width = props.size === 'small' ? 28 : 44;
  const height = props.size === 'small' ? 16 : 22;
  const borderRadius = 100;
  return (
    <ComponentLoader
      loading={skeletonLoading}
      className={props.className}
      style={{
        width: props.style?.width || width,
        height: props.style?.height || height,
        borderRadius: props.style?.borderRadius || borderRadius,
      }}
    >
      <AntdSwitch {...props} data-testid={dataTestId} />
    </ComponentLoader>
  );
};

export default Switch;
