import React from 'react';
import axios from 'axios';
class Section1 extends  React.Component{
    constructor(props){
        super(props);
        this.state = {
            Item: [],
            showItems: 14,
            showItem:11
             }
        }

    componentDidMount(){

        // here name should 
        axios.get(`http://localhost:3000/woodenItem`).then(res => {
            const Item = res.data;
            console.log(Item);
            this.setState({ Item  });
          })
    }
 
render(){
    return(
        <div className="imag-group grp">
        <div className="card-deck img_1"   >
        {this.state.Item.slice(12, this.state.showItems).map((item, idx)=>  {
             const logo = require(`${item.picture}`);
            return(
<div className="card section-card sc-main" key={idx}   index={idx} >
<img className="card-img-top  imgsc" src={logo} alt="nice" ></img>
<div className="card-body main-sc">
<h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.details}</p>
        <p className="card-text"><small className="text-muted">{item.price}</small></p>
        <button className="btn rounded-pill bg-light btn-lg">{item.name}</button>
</div>
</div>

        ) })}
        
</div>


</div>

    )
}
}

export default Section1;