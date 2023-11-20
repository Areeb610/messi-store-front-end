import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';
import './stats.css';

const MessiStats = () => {
  return (
    <div>
        <Navbar />
    <div className="stats-container">
      <h2 className="stats-title">Lionel Messi's Records</h2>

      <div className="record-section">
        <div className="record">
          <p className="record-label">All-Time Record</p>
          <p className="record-value">1046 Appearances</p>
          <p className="record-value">361 Assists</p>
          <p className="record-value">821 Goals</p>
        </div>

        <div className="record">
          <p className="record-label">FC Barcelona Record</p>
          <p className="record-value">672 Goals</p>
          <p className="record-value">269 Assists</p>
          <p className="record-value">778 Appearances</p>
        </div>

        <div className="record">
          <p className="record-label">PSG Record</p>
          <p className="record-value">32 Goals</p>
          <p className="record-value">34 Assists</p>
          <p className="record-value">75 Appearances</p>
        </div>

        <div className="record">
          <p className="record-label">Inter Miami Record</p>
          <p className="record-value">11 Goals</p>
          <p className="record-value">5 Assists</p>
          <p className="record-value">14 Appearances</p>
        </div>

        <div className="record">
          <p className="record-label">Argentina Record</p>
          <p className="record-value">106 Goals</p>
          <p className="record-value">53 Assists</p>
          <p className="record-value">179 Appearances</p>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default MessiStats;
