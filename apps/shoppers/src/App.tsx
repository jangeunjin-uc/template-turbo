import { Button } from 'ui';
import { v4 as uuidv4 } from 'uuid';
import { shallow } from 'zustand/shallow';
import SharedUI from './components/SharedUI';
import { store } from './store';

function App() {
  const [toastShow, modalShow, toggleDarkMode, isDark] = store(
    ({ toast, modal, darkMode }) => [
      toast.toastShow,
      modal.modalShow,
      darkMode.toggleDarkMode,
      darkMode.isDark,
    ],
    shallow,
  );

  const handleToastShow = () => {
    toastShow({ id: uuidv4(), title: 'main에서 확인' });
  };

  const handleModalOpen = () => {
    modalShow({
      id: uuidv4(),
      content: <span style={{ padding: '2.5rem 2rem' }}>main에서 확인</span>,
    });
  };

  const handleToggleDarkMode = () => {
    toggleDarkMode({ isDark: !isDark });
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
      <Button
        variant="textOnly"
        buttonStyleType="contained"
        buttonColor="primary"
        label="darkmode"
        onClick={handleToggleDarkMode}
      />
      <SharedUI />
    </div>
  );
}

export default App;
