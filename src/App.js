import logo from './logo.svg';
import Header from './components/layout/Header';
import Sidenav from './components/layout/Sidenav';
import Slider from './components/layout/Slider';
import Footer from './components/layout/Footer';
import ProductCard from './components/layout/ProductCard';
import data from './data';
import './App.css';

function cardProducts(val) {
  return (
    <ProductCard
      image={val.image}
      name={val.name}
      discount={val.discount}
      price={val.price}
    />
  )

}

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

      <div className="row mx-0">
        {data.map(cardProducts)}
      </div>

      <div>
        <Footer />
      </div>


    </>
  );
}

export default App;
