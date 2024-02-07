import React, { FC } from 'react';
import { GetProps, Statistic as AntdStatistic } from 'antd';

export type StatisticProps = GetProps<typeof AntdStatistic> & {
  dataTestId: string;
};

export const Statistic: FC<StatisticProps> = ({ dataTestId, ...props }) => {
  return <AntdStatistic {...props} data-testid={dataTestId} />;
};

export default Statistic;
