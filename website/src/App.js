import React from 'react';
import Nav from './Components/Navigation';
import Projects from './Components/Projects';
import About from './Components/About';
import './App.css';

function App() {
  const navlinks = [
    {name: "Projects", to: "/projects" },
    {name: "About", to: "/about" }
  ];

  const logo = {name: "Logo", to: "home"};

  return (
    <div className="App">
      <header className="App-header">
        <Nav brand={logo} links={navlinks}/>   
        <div>
          <h1>Andrew T. Grant</h1>
          <h2><span>Engineer</span> <span>Artist</span> <span>Developer</span></h2>
          <h3>I write code, study lines, debug complications, and I love it. <br/> I also love my wife and cat.</h3>
        </div>
      </header>
      <section>
        <Projects/>
      </section>
      <section>
        <About/>
      </section>
      <footer>

      </footer>
    </div>
  );
}

export default App;
