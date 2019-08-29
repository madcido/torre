import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import StaticSection from './StaticSection';
import SlideSection from './SlideSection';
import { howWeHelp, jobs, people, professions } from '../data/mock.js';

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
        anchor="https://torre.co/jobs"
        cardType="JobCard"
        cardData={jobs} />
      <SlideSection
        title="Top software development professionals"
        anchor="https://torre.co/search?people.skill=704"
        cardType="ProfessionalCard"
        cardData={professions} />
      <SlideSection
        title="Top remote software development jobs"
        anchor="https://torre.co/jobs"
        cardType="JobCard"
        cardData={jobs.filter(job => job.area === 'dev')} />
      <SlideSection
        title="Fastest-rising consultants globally"
        anchor="https://torre.co/search?people.skill=875"
        cardType="ConsultantCard"
        cardData={people} />
    </div>
  );
}

export default App;
