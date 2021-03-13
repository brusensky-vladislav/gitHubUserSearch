import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/app.css';
import Toolbar from './components/toolbar';
import MainComponent from './components/main';

function App() {
  const [user, setUser] = useState({
    name: null,
    location: null,
    avatar_url: null,
    id: null,
    public_repos: null,
    created_at: null,
    html_url: null,
  });
  return (
      <section id="page" className="container">
          <header>
              <Toolbar />
          </header>
          <main>
              <MainComponent user={user} setUser={setUser}/>
          </main>
      </section>)
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);