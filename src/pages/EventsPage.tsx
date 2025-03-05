import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Events from '../components/Events';
import OfflineGames from '../components/OfflineGames';
import OnlineGames from '../components/OnlineGames';
import Footer from '../components/Footer';

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState('events');

  return (
    <div className="bg-dark-bg min-h-screen text-white">
      <Navbar />

      {/* Add padding to prevent navbar overlap */}
      <div className="pt-20">
        {/* Category Tabs */}
        <div className="flex justify-center space-x-4 mb-8">
          {['events', 'offline', 'online'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 text-lg font-semibold uppercase rounded-md transition-all duration-300 ${
                activeTab === tab ? 'bg-neon-blue text-dark-bg' : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              {tab === 'events' ? 'Technical' : tab === 'offline' ? 'Non-Technical' : 'Online Games'}
            </button>
          ))}
        </div>

        {/* Event Sections */}
        <div className="container mx-auto px-6 py-8">
          {activeTab === 'events' && <Events />}
          {activeTab === 'offline' && <OfflineGames />}
          {activeTab === 'online' && <OnlineGames />}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EventsPage;
