import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import StaticSection from './StaticSection';
import SlideSection from './SlideSection';
import { howWeHelp, jobs, people } from '../data/mock.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <StaticSection
        title="Learn how we help connect you with what you're looking for"
        cardType="HowWeHelp"
        cardData={howWeHelp} />
      <SlideSection
        title="Top remote jobs"
        cardType="JobCard"
        cardData={jobs} />
      <SlideSection
        title="Top remote software development jobs"
        cardType="JobCard"
        cardData={jobs.filter(job => job.area === 'dev')} />
    </div>
  );
}

export default App;
