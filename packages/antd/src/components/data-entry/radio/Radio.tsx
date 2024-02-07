import React, { FC, ReactNode } from 'react';
import {
  Radio as AntdRadio,
  RadioProps as AntdRadioProps,
  Skeleton,
  Space,
  Typography,
} from 'antd';

export interface RadioProps extends Omit<AntdRadioProps, 'children'> {
  dataTestId: string;
  skeletonLoading?: boolean;
  label?: ReactNode;
}

export const Radio: FC<RadioProps> = ({
  dataTestId,
  label,
  skeletonLoading,
  ...props
}) => {
  return skeletonLoading ? (
    <Space>
      <Skeleton.Avatar
        active
        style={{
          width: 16,
          height: 16,
        }}
        shape={'circle'}
      />
      <Typography.Text>{label}</Typography.Text>
    </Space>
  ) : (
    <AntdRadio {...props} data-testid={dataTestId}>
      {label}
    </AntdRadio>
  );
};

export default Radio;
