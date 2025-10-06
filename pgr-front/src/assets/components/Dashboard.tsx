import React from 'react';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const cardCount = 10;
  const cards = Array.from({ length: cardCount });

  return (
    <main className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">
          Programa de Gerenciamento de Riscos - PGR
        </h1>
        <a href="#" className="advance-link">
          Avançar →
        </a>
      </div>

      <div className="card-grid">
        {cards.map((_, index) => (
          <div key={index} className="card-placeholder"></div>
        ))}
      </div>
    </main>
  );
}

export default Dashboard;