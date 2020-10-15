import React from 'react';
import Header from './Component/header'
import './App.css';
import Section  from './Component/Section'
import Article from './Component/Article';

function App() {
  return (
    <div className="App">
     <Header/>
     <Article/>
     <Section />
    </div>
  );
}

export default App;
