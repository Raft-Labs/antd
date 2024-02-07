import React, { FC } from 'react';
import { Calendar as AntdCalendar, GetProps } from 'antd';

export type CalendarProps = GetProps<typeof AntdCalendar> & {
  dataTestId: string;
};

export const Calendar: FC<CalendarProps> = ({ dataTestId, ...props }) => {
  return <AntdCalendar {...props} data-testid={dataTestId} />;
};

export default Calendar;
