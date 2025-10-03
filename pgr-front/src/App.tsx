import Header from './assets/components/Header.tsx';
import Dashboard from './assets/components/Dashboard.tsx';
import './App.css';

function App() {
  return (
    // A div .app agora serve apenas como um invólucro geral, sem limites de largura
    <div className="app">
      <Header /> {/* O Header está livre para ocupar 100% da largura */}
      
      {/* Criamos um novo container APENAS para o conteúdo que deve ser centralizado */}
      <main className="main-container">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;