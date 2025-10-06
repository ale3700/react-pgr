import Header from './assets/components/Header.tsx';
import Dashboard from './assets/components/Dashboard.tsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header /> 
      
      <main className="main-container">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;