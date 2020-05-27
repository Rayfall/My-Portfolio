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
          <h2>Engineer</h2>
          <h2>Artist</h2>
          <h2>Developer</h2>
        </div>        
        <p>Testing Paragraph</p>
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
