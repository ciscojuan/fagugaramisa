
import React from 'react';
import Header from './Header'
import News from './News'
import KPI from './KPI'
import About from './About'
import Contact from './Contact'


const Home = () => {
    return (
        <>
          <Header/>
          <News />
          <KPI></KPI>
          <About />
          <Contact />

        </>
      );
};
export default Home;
