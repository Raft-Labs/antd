import React, { FC } from 'react';
import { Avatar as AntdAvatar, GetProp, GetProps } from 'antd';
import type { AvatarProps as SkeletonAvatarProps } from 'antd/es/skeleton/Avatar';
import SkeletonAvatar from 'antd/es/skeleton/Avatar';

export type AvatarProps = GetProps<typeof AntdAvatar> & {
  dataTestId: string;
  skeletonLoading?: boolean;
};

export const Avatar: FC<AvatarProps> = ({
  dataTestId,
  skeletonLoading,
  shape = 'circle',
  ...props
}) => {
  return skeletonLoading ? (
    <SkeletonAvatar
      className={props.className}
      style={props.style}
      size={props.size as GetProp<SkeletonAvatarProps, 'size'>}
      shape={shape}
      active
    />
  ) : (
    <AntdAvatar {...props} shape={shape} data-testid={dataTestId} />
  );
};

export default Avatar;
