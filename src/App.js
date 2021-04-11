import './App.css';
import Header from './layout/header/header';
import MainContent from './layout/content/content';
import AdSection from './layout/ad/ad';
import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
// import { transitions, positions, Provider as AlertProvider } from 'react-alert';
// import Footer from './layout/footer/footer';


function App() {

  // const AlertTemplate = ({ message }) => (
  //   <div className="popup-success">{message}</div>
  // );
  // const options = {
  //   position: positions.MIDDLE,
  //   timeout: 2000,
  //   offset: '30px',
  //   transition: transitions.SCALE
  // }

  return (
    // <AlertProvider template={AlertTemplate} {...options}>
    <Auth0Provider
      domain="jrihanna.au.auth0.com"
      clientId="J197RRf6XDwV8eCz7AfOPuKwhE8pQEVf"
      redirectUri={window.location.origin}
    >
      <div className="App">
        <section className="Header-section">
          <Header />
        </section>

        <section className="Search-section">
          {/* <Search /> */}
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
    </Auth0Provider>
  );
}

export default App;
