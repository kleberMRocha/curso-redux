import './App.css';
import logo from './assets/logo.svg';
import { Card } from './componets/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img src={logo} className='logo-app' />
      </header>
      <main>
        <section className='pokemons-cards'>
           <Card />
        </section>
      </main>
    </div>
  );
}

export default App;
