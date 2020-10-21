import React from 'react';
import Header from './Component/header'
import './App.css';
import Section  from './Component/Section';
import Article from './Component/Article';
import Paginate from './Component/pagination';
import Slider from './Component/Slider';
import Section1 from './Component/Section1'
class App extends React.Component{
 
  render(){
  return (
    <div className="App">
     <Header/>
     <Article/>
     <Section />
     <Paginate/>
    <Slider />
    <Section1/>
    </div>
  );
  }
}

export default App;
