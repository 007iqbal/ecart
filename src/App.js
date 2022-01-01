import logo from './logo.svg';
import Header from './components/layout/Header';
import Sidenav from './components/layout/Sidenav';
import './App.css';

function App() {
  return (
    <>
   <Header />
   <div className="row mx-0">
      <div className="col-lg-2">
      <Sidenav />
      </div>
   </div>
   </>
  );
}

export default App;
