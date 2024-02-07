import React, { FC } from 'react';
import { GetProps, Modal as AntdModal } from 'antd';

export const {
  confirm,
  destroyAll,
  error,
  success,
  info,
  warn,
  warning,
  useModal: useAntdModal,
} = AntdModal;

export const useModalMethod = () => ({
  confirm,
  destroyAll,
  error,
  success,
  info,
  warn,
  warning,
});

export const useModal = useAntdModal;

export type ModalProps = GetProps<typeof AntdModal> & {
  dataTestId: string;
};

export const Modal: FC<ModalProps> = ({ dataTestId, ...props }) => {
  return <AntdModal {...props} data-testid={dataTestId} />;
};

export default Modal;
