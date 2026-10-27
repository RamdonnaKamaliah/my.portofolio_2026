import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Media from './components/media';
import Project from './components/project';
import Experience from './components/experience';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      <Navbar/>
      <Hero />
      <About />
      <Media />
      <Project />
      <Experience/>
    </div>
  );
}

export default App;