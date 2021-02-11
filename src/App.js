import './App.css';
import Header from './layout/header/header';
import MainContent from './layout/content/content';
import AdSection from './layout/ad/ad';
import React from "react";
import Search from './layout/search/search';
// import Footer from './layout/footer/footer';

function App() {

  return (
    <div className="App">
      <section className="Header-section">
        <Header />
      </section>

      <section className="Search-section">
        <Search />
      </section>

      <section className="Content-section">
        <MainContent />
      </section>

      <section className="Add-section">
        <AdSection />
      </section>

      {/* <section>
          <Footer/>
        </section>
      </Router> */}
    </div>
  );
}

export default App;
