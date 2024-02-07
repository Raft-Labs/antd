import React, { FC, ReactNode } from 'react';
import {
  Checkbox as AntdCheckbox,
  GetProps,
  Skeleton,
  Space,
  Typography,
} from 'antd';

export type CheckboxProps = Omit<GetProps<typeof AntdCheckbox>, 'children'> & {
  dataTestId: string;
  skeletonLoading?: boolean;
  label?: ReactNode;
};

export const Checkbox: FC<CheckboxProps> = ({
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
          borderRadius: 4,
        }}
        shape={'square'}
      />
      <Typography.Text>{label}</Typography.Text>
    </Space>
  ) : (
    <AntdCheckbox {...props} data-testid={dataTestId}>
      {label}
    </AntdCheckbox>
  );
};

export default Checkbox;
