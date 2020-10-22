import React from 'react';
import NavBaritem from './Component/Navbar'
import './App.css';
import Section  from './Component/Section';
import Article from './Component/Article';
import Paginate from './Component/pagination';
import Slider from './Component/Slider';
import Section1 from './Component/Section1'
import Footer from './Component/footer'
class App extends React.Component{
 
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.scrollToNode = this.scrollToNode.bind(this);
  }
    
    scrollToNode(node) {
        node.scrollIntoView({ behavior: 'smooth' });
    }
  render(){
  return (
    <div className="App">
       <div className=" jumbotron-fluid " >
      <div className="container-fluid  container">
      <NavBaritem/>
      <div className="row justify-content-center mt-5 pt-5" >
      
      <div className="  justify-content-center btn-spc">
      
         <button className="btn btn-warning rounded-pill btn-lg " onClick={() => this.scrollToNode(this.contact)}>CONTACT</button>
</div>
</div>
     </div>
    
 </div>
     <Article/>
     <Section />
     <Paginate/>
    <Slider />
    <Section1/>
    <div ref={(node) => this.contact = node}>
    <Footer/>
    </div>
   
    </div>
  );
  }
}

export default App;
