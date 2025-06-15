import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Contentone from './components/Contentone';
import Base from './components/Base';
import VehiclePark from './components/VehiclePark';
import Footer from './components/Footer';
import GibddNews from './components/GibddNews';
import DetailedNews from './components/DetailedNews';

// Компонент-обёртка для существующего layout
function MainLayout() {
  return (
    <div className="app">
      <Header />
      <Outlet /> {/* Сюда подставляются маршруты */}
      <Footer />
    </div>
  );
}

// Компонент для главной страницы (со всеми секциями)
function HomePage() {
  return (
    <>
      <GibddNews />
      <Contentone />
      <Base />
      <VehiclePark />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Основной layout с Header/Footer */}
        <Route path="/" element={<MainLayout />}>
          {/* Главная страница со всеми компонентами */}
          <Route index element={<HomePage />} />
          
          {/* Страница детальной новости */}
          <Route path="/news/:id" element={<DetailedNews />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
