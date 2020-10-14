import React from 'react';

class Article extends React.Component{
    render(){
        return(
            <div className=" container-fluid  article">
            <div class="card-deck py-4 px-4" >
  <div class="card art_card">
  
    <div class="card-body crd-0">
      <h5 class="card-title"><i class="fab fa-accessible-icon"></i></h5>
      
       <p class="card-text pl-3">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
     
    </div>
  </div>
  <div class="card art_card" >
 
    <div class="card-body crd-0">
      <h5 class="card-title"><i class="fas fa-couch"></i></h5>
      <p class="card-text pl-3">This card has supporting text below as a natural lead-in to additional content.</p>
      
    </div>
  </div>
  <div class="card art_card">
   
    <div class="card-body crd-0">
      <h5 class="card-title"><i class="fas fa-box-open"></i></h5>
      <p class="card-text pl-3">This is a wider card with supporting text below as a natural lead-in to additional content.</p>

    </div>
  </div>
  <div class="card art_card">
    
    <div class="card-body crd-0">
      <h5 class="card-title"><i class="fas fa-trailer"></i></h5>
      <p class="card-text pl-3">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
   
    </div>
  </div>
</div>
</div>
        )
    }
}

export default Article;