import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Frontend from './components/Frontend';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';

function App() {
  return (
    <div className='App'>
      <Frontend />
      <About />
      <Services />
      <Skills />
    </div>
  );
}

export default App;
