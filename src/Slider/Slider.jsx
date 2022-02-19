import React from 'react'
import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import BigCityWeather from '../components/BigCityWeather/BigCityWeather';
import './SliderCity.css'

function CitySlider({searchCountry, SetCityId}) {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1175,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 515,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
      ]
    };
  return (
   <div className='slider-wrapper'>
       
        <Slider {...settings}>
          
            {searchCountry.map(item =><div className='slider-carddd' key={item.id}><Link to="/weather"><BigCityWeather SetCityId={SetCityId} id={item.id}/></Link></div>)}
            
        </Slider>
      </div>
  )
}

export default CitySlider