import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import StaticSection from './StaticSection';
import SlideSection from './SlideSection';
import { howWeHelp, remoteJobs } from '../data/mock.js';

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
        cardType="RemoteJobs"
        cardData={remoteJobs} />
    </div>
  );
}

export default App;
