import React from 'react';
import './App.css';
import Section from './Component/Section';
import Article from './Component/Article';
import Paginate from './Component/pagination';
import Slider from './Component/Slider';
import Section1 from './Component/Section1';
import Footer from './Component/footer';

class Home extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.scrollToNode = this.scrollToNode.bind(this);
  }


  scrollToNode(node) {
    node.scrollIntoView({ behavior: 'smooth' });
  }
  render() {
    return (
      <div className="main">
        <div className=" jumbotron-fluid " >
          <div className="container-fluid  container">
            <div className="row justify-content-center " >

              <div className="  justify-content-center btn-spc">

                <button className="btn btn-warning rounded-pill btn-lg  contact" onClick={() => this.scrollToNode(this.contact)}>CONTACT</button>
              </div>
            </div>
          </div>

        </div>
        <Article />
        <Section />
        <Paginate />
        <Slider />
        <Section1 />

        <div ref={(node) => this.contact = node}>
          <Footer />

        </div>
      </div>
    );
  }
}

export default Home;