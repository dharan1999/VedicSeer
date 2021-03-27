// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Kundli from './components/Kundli';
import Astrocalculator from './components/Astrocalculator';
import Articles from './components/Articles';
import BrandValue from './components/BrandValue';
import Reports from './components/Reports';
import Insights from './components/Insights';
import Nakshatra from './components/Nakshatra';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Manglicdosha from './components/Manglicdosha';
import Sadesati from './components/Sadesati';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Kundli />
      <Astrocalculator />
      <Articles />
      <BrandValue />
      <Reports />
      <Insights />
      <Nakshatra />
      <Testimonials />
      <Footer />
      <Manglicdosha />
      <Sadesati />
      
    </div>
  );
}

export default App;
