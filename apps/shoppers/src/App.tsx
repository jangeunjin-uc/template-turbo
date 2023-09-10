import { Button } from 'ui';
import { v4 as uuidv4 } from 'uuid';
import { shallow } from 'zustand/shallow';
import SharedUI from './components/SharedUI';
import { store } from './store';

function App() {
  const [toastShow, modalShow] = store(
    ({ toast, modal }) => [toast.toastShow, modal.modalShow],
    shallow,
  );

  const handleToastShow = () => {
    toastShow({ id: uuidv4(), title: 'main에서 확인' });
  };

  const handleModalOpen = () => {
    modalShow({ id: uuidv4(), content: <span>main에서 확인</span> });
  };

  return (
    <div>
      <span>app</span>
      <Button
        variant="textOnly"
        buttonStyleType="outline"
        label="modal open"
        onClick={handleModalOpen}
      />
      <Button
        variant="textOnly"
        buttonStyleType="outline"
        label="toast open"
        onClick={handleToastShow}
      />
      <SharedUI />
    </div>
  );
}

export default App;
