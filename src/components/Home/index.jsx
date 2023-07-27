
import React from 'react';
import Header from './Header'
import Novedades from './Novedades'
import KPI from './KPI'
import About from './About'
import Contact from './Contact'


const Home = () => {
    return (
        <>
          <Header/>
          <Novedades />
          <KPI></KPI>
          <About />
          <Contact />

        </>
      );
};
export default Home;
