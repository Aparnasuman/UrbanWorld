import React from 'react';
import axios from 'axios';
class Section extends React.Component{
constructor(props){
    super(props);
    this.state = {
        Item: [],
        collapse: false,
        showItems: 5,
        showItems1:9,
        showItems2:14,
        showItems3:18
      }
}

handleImage=()=>{
    setTimeout(() => {
        this.setState(coll=>{ 
            console.log(coll)
           return {collapse: !coll.collapse}
          })
      }, 300);
       
   

}
componentDidMount(){
    axios.get(`http://localhost:3000/woodenItem`).then(res => {
        const Item = res.data;
        console.log(Item);
        this.setState({ Item ,
            showItems:
            this.state.showItems >= this.state.Item.length ?
            this.state.showItems : this.state.showItems + 1,
            showItems1:
            this.state.showItems1 >= this.state.Item.length ?
            this.state.showItems1 : this.state.showItems1 + 1,
            showItems2:
            this.state.showItems2 >= this.state.Item.length ?
            this.state.showItems2 : this.state.showItems2 + 1,
            showItems4:
            this.state.showItems3 >= this.state.Item.length ?
            this.state.showItems3 : this.state.showItems3 + 1
        });
      })
}

 render(){
   
     return(
         <div className="section container-fluid">
          <div className="row ">
                <div className="col text-center py-5">
                  <p> SHOP CATEGORIES </p> 
                  <h1 > Custom Furniture  Store</h1>
                 <p >Buy Furniture Online from our extensive collection of wooden furniture units to give your home an elegant touch at affordable</p>
                  
                <div className="card-deck"   >
                {this.state.Item.slice(0, this.state.showItems).map((item, idx)=>  {
                     const logo = require(`${item.picture}`);
                    return(
      <div className="card section-card" key={idx}   index={idx} >
    <img className="card-img-top" src={logo} alt="nice" ></img>
    <div className="card-body">
     <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.details}</p>
                <p className="card-text"><small className="text-muted">{item.price}</small></p>
    </div>
  </div>
 
                ) })}
        
        
        
   
</div>
<div className={this.state.collapse?`card-deck img_show `:"card-deck img_hide"}>
{this.state.Item.slice(4, this.state.showItems1).map((item, idx)=>  {
                     const logo = require(`${item.picture}`);
                    return(
      <div className="card section-card" key={idx}   index={idx} >
    <img className="card-img-top img_0" src={logo}  alt="nice"></img>
    <div className="card-body">
     <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.details}</p>
                <p className="card-text"><small className="text-muted">{item.price}</small></p>
    </div>
  </div>
 
                ) })}
        
    </div>
    <div className={this.state.collapse?`card-deck img_show `:"card-deck img_hide"}>
{this.state.Item.slice(10, this.state.showItems2).map((item, idx)=>  {
                     const logo = require(`${item.picture}`);
                    return(
      <div className="card section-card" key={idx}   index={idx} >
    <img className="card-img-top img_0" src={logo}  alt="nice"></img>
    <div className="card-body">
     <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.details}</p>
                <p className="card-text"><small className="text-muted">{item.price}</small></p>
    </div>
  </div>
 
                ) })}
        
    </div>
   
<button className="btn btn-clr btn-lg rounded-pill" onClick={this.handleImage}>See All</button>
              </div>
            </div>
            

         </div>
     )
 }
}

export default Section;