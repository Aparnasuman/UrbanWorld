import React from 'react';


class Article extends React.Component {




  render() {

    return (

      <div className=" container-fluid  article">

        <div className="card-deck py-4 px-4" >
          <div className="card art_card">

            <div className="card-body crd-0">
              <h5 className="card-title"><i className="fab fa-accessible-icon"></i></h5>

              <p className="card-text pl-3">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

            </div>
          </div>
          <div className="card art_card" >

            <div className="card-body crd-0">
              <h5 className="card-title"><i className="fas fa-couch"></i></h5>
              <p className="card-text pl-3">This card has supporting text below as a natural lead-in to additional content.</p>

            </div>
          </div>
          <div className="card art_card">

            <div className="card-body crd-0">
              <h5 className="card-title"><i className="fas fa-box-open"></i></h5>
              <p className="card-text pl-3">This is a wider card with supporting text below as a natural lead-in to additional content.</p>

            </div>
          </div>
          <div className="card art_card">

            <div className="card-body crd-0">
              <h5 className="card-title"><i className="fas fa-trailer"></i></h5>
              <p className="card-text pl-3">This is a wider card with supporting text below as a natural lead-in to additional content. </p>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Article;