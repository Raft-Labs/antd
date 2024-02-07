import React, { FC } from 'react';
import { GetProps, Popover as AntdPopover } from 'antd';

export type PopoverProps = GetProps<typeof AntdPopover> & {
  dataTestId: string;
};

export const Popover: FC<PopoverProps> = ({ dataTestId, ...props }) => {
  return <AntdPopover {...props} data-testid={dataTestId} />;
};

export default Popover;
