import './App.css';
import Header from './components/Header';
import Contentone from './components/Contentone';
import Base from './components/Base';
import VehiclePark from './components/VehiclePark';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Contentone />
      <Base />
      <VehiclePark />
      <Footer />
    </div>
  );
}

export default App;