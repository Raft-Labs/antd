import React, { FC } from 'react';
import { Alert as AntdAlert, GetProps } from 'antd';

const { ErrorBoundary: AntdErrorBoundary } = AntdAlert;

export type ErrorBoundaryProps = GetProps<typeof AntdErrorBoundary> & {
  dataTestId: string;
};

export const ErrorBoundary: FC<ErrorBoundaryProps> = ({
  dataTestId,
  ...props
}) => {
  return <AntdErrorBoundary {...props} data-testid={dataTestId} />;
};

export default ErrorBoundary;
