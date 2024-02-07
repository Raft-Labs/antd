import React, { FC } from 'react';
import { GetProps, Mentions as AntdMentions, theme } from 'antd';
import ComponentLoader from '../../component-loader';

export type MentionsProps = GetProps<typeof AntdMentions> & {
  dataTestId: string;
  skeletonLoading?: boolean;
};

export const Mentions: FC<MentionsProps> = ({
  dataTestId,
  skeletonLoading,
  ...props
}) => {
  const {
    token: { controlHeight, borderRadius },
  } = theme.useToken();

  return (
    <ComponentLoader
      loading={skeletonLoading}
      className={props.className}
      style={{
        ...props.style,
        width: props.style?.width ?? '100%',
        height: props.style?.height ?? controlHeight,
        borderRadius: props.style?.borderRadius ?? borderRadius,
      }}
    >
      <AntdMentions {...props} data-testid={dataTestId} />
    </ComponentLoader>
  );
};

export default Mentions;
