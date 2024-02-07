/** @jsxImportSource @emotion/react */

import React, { FC } from 'react';
import StarFilled from '@ant-design/icons/StarFilled';
import { Rate as AntdRate, RateProps as AntdRateProps, Space } from 'antd';
import { css, keyframes } from '@emotion/react';

const skeleton = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export interface RateProps extends AntdRateProps {
  dataTestId: string;
  skeletonLoading?: boolean;
}

export const Rate: FC<RateProps> = ({
  dataTestId,
  skeletonLoading,
  ...props
}) => {
  const loaderStyle = css`
    animation: ${skeleton} 1.4s linear infinite;
    color: rgba(0, 0, 0, 0.45);
  `;

  return skeletonLoading ? (
    <Space>
      <StarFilled
        css={loaderStyle}
        style={{
          fontSize: 20.05,
        }}
      />
      <StarFilled
        css={loaderStyle}
        style={{
          fontSize: 20,
        }}
      />
      <StarFilled
        css={loaderStyle}
        style={{
          fontSize: 20,
        }}
      />
      <StarFilled
        css={loaderStyle}
        style={{
          fontSize: 20,
        }}
      />
      <StarFilled
        css={loaderStyle}
        style={{
          fontSize: 20,
        }}
      />
    </Space>
  ) : (
    <AntdRate {...props} data-testid={dataTestId} />
  );
};

export default Rate;
