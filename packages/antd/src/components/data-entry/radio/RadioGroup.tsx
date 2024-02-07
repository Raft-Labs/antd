import React, { FC } from 'react';
import { Radio as AntdRadio } from 'antd';
import type { RadioGroupProps as AntdRadioGroupProps } from 'antd/es/radio';

const { Group } = AntdRadio;

export interface RadioGroupProps extends AntdRadioGroupProps {
  dataTestId?: string;
}

export const RadioGroup: FC<RadioGroupProps> = ({ dataTestId, ...props }) => {
  return <Group {...props} data-testid={dataTestId} />;
};

export default RadioGroup;
