import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Tech from './components/Tech';
import Exper from './components/Exper';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App(): JSX.Element {
  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-50 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 w-full h-full">
        
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        
        </div>


        <div className="container mx-auto px-8">
          <Navbar />
          <Intro />
          <About />
          <Tech />
          <Exper />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;