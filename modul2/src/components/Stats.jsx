import React from 'react'

const Stats = () => {
  return (
    <div className="stats shadow w-full p-8">
      <div className="stat">
        <div className="stat-title">Total Produk</div>
        <div className="stat-value">500+</div>
      </div>
      <div className="stat">
        <div className="stat-title">Pelanggan</div>
        <div className="stat-value">1200+</div>
      </div>
      <div className="stat">
        <div className="stat-title">Rating</div>
        <div className="stat-value">4.8 ⭐</div>
      </div>
    </div>
  );
};

export default Stats;
