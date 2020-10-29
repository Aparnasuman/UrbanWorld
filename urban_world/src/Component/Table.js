import React from 'react';
import axios from 'axios';
class Table extends  React.Component{
    constructor(props){
        super(props);
        this.state = {
            Item: [],
            showItems: 14,
        
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
       
                
        <div className="card-deck img_1"   >
        {this.state.Item.filter(item => item.name.includes('Tab')).map((item, idx)=>  {
             const logo = require(`${item.picture}`);
            console.log(item);
            
            return(
<div className="card section-card sc-main" key={idx}   index={idx} >
<div className="card-body main-sc">
<img src={logo} alt={item.name} className="card-img-top img_pag"/>
<h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.details}</p>
        <p className="card-text"><small className="text-muted">{item.price}</small></p>
        <button className="btn rounded-pill bg-light btn-lg">{item.name}</button>
</div>
</div>

        ) })}
        
</div>
    )

}
}
export default Table;