import './style/App.scss';
import ObjectWindow from './components/ObjectWindow/ObjectWindow';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="main__wrapper">
      <Header />
      <div className="main">
        <ObjectWindow />
      </div>
    </div>
  );
}

export default App;
