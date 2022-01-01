import logo from './logo.svg';
import Header from './components/layout/Header';
import Sidenav from './components/layout/Sidenav';
import Slider from './components/layout/Slider';
import Topdeal from './components/layout/Topdeal';
import './App.css';

function App() {
  return (
    <>
      <Header />

      <div className="row mx-0 border p-3">

        <div className="col-lg-2">
          <Sidenav />
        </div>

        <div className="col-lg-10">
          <Slider />
        </div>
      </div>

      <Topdeal />

    </>
  );
}

export default App;
