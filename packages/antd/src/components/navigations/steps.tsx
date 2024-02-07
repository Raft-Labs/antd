import React, { FC } from 'react';
import type {
  StepProps as AntdStepProps,
  StepsProps as AntdStepsProps,
} from 'antd';
import { Steps as AntdSteps } from 'antd';
import { omit } from 'lodash';

export interface StepProps extends AntdStepProps {
  dataTestId?: string;
}

export interface StepsProps extends Omit<AntdStepsProps, 'items'> {
  items: StepProps[];
}

export const Steps: FC<StepsProps> = ({ items, ...props }) => {
  return (
    <AntdSteps
      {...props}
      items={items.map((item) => ({
        ...omit(item, ['dataTestId']),
        'data-testid': item.dataTestId,
      }))}
    />
  );
};

export default Steps;
