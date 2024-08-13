import AOS from 'aos';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import JoinUs from './components/JoinUs/JoinUs';
import Navbar from './components/Navbar/Navbar';
import NewsAndEvents from './components/NewsAndEvents/NewsAndEvents';
import OurSuits from './components/Our Suite/OurSuits';
import Products from './components/Products/Products';
import Team from './components/Team/Team';

const App = () => {

  
  React.useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay:100,
    });
  }, []);

  return (
    <Router>
      <div>
       
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
               <Navbar />
               <Banner />
                <Products />
                <OurSuits />
                <Team />
                <NewsAndEvents />
                <Contact />
              </>
            } />
            <Route path="/join-us" element={<JoinUs />} />
        
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
