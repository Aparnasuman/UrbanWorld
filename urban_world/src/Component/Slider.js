import React, {useEffect, useState } from 'react';
import axios from 'axios';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
 //chck this 
 var items;
items = [];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }
  useEffect(() => {

    // here it should be getWoodenItems
   
    axios.get(`http://localhost:3000/woodenItem`).then(res => {
      
     items = res.data;
      console.log(items);
    })
  
  });
 
  const slides = items.map((item, index) => {
    const logo = require(`${item.picture}`);
    return (

      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index}
      >
         
        <img src={logo} alt={item.name} className="card-img-top img_pag"/>
        <CarouselCaption captionText={item.details} captionHeader={item.name} />
      </CarouselItem>
    );
  });

  return (
    
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
     
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Example;