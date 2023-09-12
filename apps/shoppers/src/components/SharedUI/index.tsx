import { Modal, Toast } from 'ui';
import { shallow } from 'zustand/shallow';
import { store } from '@shoppers/store';

function SharedUI() {
  const [isModalShow, modalItem, modalHide, isToastShow, toastItem, toastHide] = store(
    ({ modal, toast }) => [
      modal.isModalShow,
      modal.modalItem,
      modal.modalHide,
      toast.isToastShow,
      toast.toastItem,
      toast.toastHide,
    ],
    shallow,
  );

  return (
    <>
      {isModalShow && <Modal modalItem={modalItem} modalHide={modalHide} />}
      {isToastShow && <Toast toastItem={toastItem} toastHide={toastHide} />}
    </>
  );
}

export default SharedUI;
