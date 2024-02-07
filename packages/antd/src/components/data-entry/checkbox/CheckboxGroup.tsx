import React, { FC } from 'react';
import { Checkbox as AntdCheckbox, GetProps } from 'antd';

const { Group: AntdCheckboxGroup } = AntdCheckbox;

export type CheckboxGroupProps = GetProps<typeof AntdCheckboxGroup> & {
  dataTestId?: string;
};

export const CheckboxGroup: FC<CheckboxGroupProps> = ({
  dataTestId,
  ...props
}) => {
  return <AntdCheckboxGroup {...props} data-testid={dataTestId} />;
};

export default CheckboxGroup;
