import React, { FC } from 'react';
import { GetProps, Spin as AntdSpin } from 'antd';

export type SpinProps = GetProps<typeof AntdSpin> & {
  dataTestId: string;
};

export const Spin: FC<SpinProps> = ({ dataTestId, ...props }) => {
  return <AntdSpin {...props} data-testid={dataTestId} />;
};

export default Spin;
