import SharedUI from './components/SharedUI';
import Main from './pages/Main';
import '@shoppers/assets/style/index.scss';

function App() {
  return (
    <div id="wrap">
      <Main />
      <SharedUI />
    </div>
  );
}

export default App;
