import { Button, Confirm, Modal, Toast } from 'ui';
import { SIZE_TYPE } from 'ui/src/types/constants';

function App() {
  const toastArray = [
    {
      id: 'aaa',
      title: 'awewrweta aewt awet aaa',
      actions: { label: 'aaa', action: () => alert('s') },
      size: SIZE_TYPE.SMALL,
    },
  ];

  const modalArray = [
    {
      id: 'awlketjla jaekrj ale j',
      className: 'modal--temp',
      content: (
        <Confirm onCancle={() => alert('cancle')} onConfirm={() => alert('confirm')}>
          <span>컨펌하시겠습니까</span>
        </Confirm>
      ),
    },
  ];

  return (
    <div>
      <Button
        variant="textOnly"
        label="button"
        buttonColor="primary"
        buttonSize="medium"
        buttonStyleType="contained"
      />
      <Toast toastItem={toastArray} />
      <Modal modalItem={modalArray} />
    </div>
  );
}

export default App;
