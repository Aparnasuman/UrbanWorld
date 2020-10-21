import React from 'react';
import axios from 'axios';
 class PagiNate extends React.Component {
      constructor() {
        super();
        this.state = {
            Item : [],
          currentPage: 1,
          todosPerPage: 4
        };
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }
      componentDidMount(){
        axios.get(`http://localhost:3000/woodenItem`).then(res => {
            const Item = res.data;
            console.log(Item);
            this.setState({ Item  });
          })
    }
      render() {
        const { Item, currentPage, todosPerPage } = this.state;

        // Logic for displaying current todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = Item.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderTodos = currentTodos.map((item, index) => {
            const logo = require(`${item.picture}`);
          return( 
          <div className="card section-card py-5" key={index}   index={index} >
          <img className="card-img-top img_pag" src={logo}  alt="nice"></img>
          <div className="card-body">
           <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.details}</p>
                      <p className="card-text off"><small className="text">Off:{item.off}</small></p>
                      <p className="card-text "><small className="text">{item.price}</small></p>
          </div>
        </div>)
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(Item.length / todosPerPage); i++) {
          pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
          return (
            <button className='btn my-5  pag-d rounded-circle'
              key={number}
              id={number}
              onClick={this.handleClick}
            >
              {number}
            </button>
          );
        });

        return (
            
            <div className="  section paginate-section container-fluid text-center py-5">
                  <p> SHOP CATEGORIES </p> 
                 <div className="card-deck"   >
              {renderTodos}
            </div>
            <div id="page-numbers   " >
             {renderPageNumbers}
            </div>
          </div>
        );
      }
    }

export default PagiNate;

  