import React, { FC } from 'react';
import { GetProps, Tooltip as AntdTooltip } from 'antd';

export type TooltipProps = GetProps<typeof AntdTooltip> & {
  dataTestId: string;
};

export const Tooltip: FC<TooltipProps> = ({ dataTestId, ...props }) => {
  return <AntdTooltip {...props} data-testid={dataTestId} />;
};

export default Tooltip;
