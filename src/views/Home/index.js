import React, {Component} from 'react';
import './homeStyle.scss';
import mapboxgl from 'mapbox-gl';
import {categories} from "../../jsons/categories";
import Slider from "react-slick";
import {BatImg, JokerImg} from "../../assets/img/images";
import {Link} from "react-router-dom";

mapboxgl.accessToken = 'pk.eyJ1IjoidmlqYXlzYWRodSIsImEiOiJja2Rsb2Q2cGIwdjYxMzBsNGo3MjJxaTBjIn0.DwbB08ZAA5E1p9OABViN8g';

class Home extends Component {

  render() {
    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1650,
          settings: {
            slidesToShow: 4.65,
            slidesToScroll: 4.65,
          }
        }, {
          breakpoint: 1530,
          settings: {
            slidesToShow: 4.45,
            slidesToScroll: 4.45,
          }
        },
        {
          breakpoint: 1450,
          settings: {
            slidesToShow: 4.25,
            slidesToScroll: 4.25,
          }
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4.15,
            slidesToScroll: 4.15,
          }
        },
        {
          breakpoint: 1330,
          settings: {
            slidesToShow: 3.95,
            slidesToScroll: 3.95,
          }
        },
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3.8,
            slidesToScroll: 3.8,
          }
        },
        {
          breakpoint: 1240,
          settings: {
            slidesToShow: 3.7,
            slidesToScroll: 3.7,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3.45,
            slidesToScroll: 3.45,
          }
        },
        {
          breakpoint: 1125,
          settings: {
            slidesToShow: 3.2,
            slidesToScroll: 3.2
            ,
          }
        },
        {
          breakpoint: 1030,
          settings: {
            slidesToShow: 2.95,
            slidesToScroll: 2.95
            ,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2.8,
            slidesToScroll: 2.8
            ,
          }
        },
        {
          breakpoint: 910,
          settings: {
            slidesToShow: 2.7,
            slidesToScroll: 2.7
            ,
          }
        },
        {
          breakpoint: 880,
          settings: {
            slidesToShow: 2.45,
            slidesToScroll: 2.45
            ,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2.25,
            slidesToScroll: 2.25
            ,
          }
        },
        {
          breakpoint: 745,
          settings: {
            slidesToShow: 2.1,
            slidesToScroll: 2.1
            ,
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1.95,
            slidesToScroll: 1.95,
          }
        },
        {
          breakpoint: 685,
          settings: {
            slidesToShow: 1.8,
            slidesToScroll: 1.8,
          }
        },
        {
          breakpoint: 610,
          settings: {
            slidesToShow: 1.6,
            slidesToScroll: 1.6,
          }
        },
        {
          breakpoint: 555,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1.5,
          }
        },
        {
          breakpoint: 510,
          settings: {
            slidesToShow: 1.3,
            slidesToScroll: 1.3,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.25,
            slidesToScroll: 1.25
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1.2,
            slidesToScroll: 1.2
          }
        },
        {
          breakpoint: 435,
          settings: {
            slidesToShow: 1.14,
            slidesToScroll: 1.14
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="container-fluid mt-3 mt-sm-5 section-home mb-3">
        {
          categories.map((data, ind) => <div className="card my-3 my-sm-4 ml-3 mr-2" key={ind}>
            <div className="card-body">
            <h3 className="text-left">
              {
                data.category
              }
            </h3>
            <Slider className="c-slider" {...settings}>
              {
                data.subCategory.map((cat, i) => <div key={i}>
                    <div className="ui link cards my-1">
                      <div className="card">
                        <div className="image">
                          <img className="c-card-image" src={cat.img ? cat.img : i%2 === 0 ? JokerImg : BatImg} alt="product" />
                        </div>
                        <Link to="/category/details/1" className="content">
                          <Link to="/category/details/1" className="header max-line-1">{cat.name}</Link>
                          <div className="meta">
                            <Link to="/category/details/1">{data.category}</Link>
                          </div>
                          <div className="description max-line-1">
                            {cat.name} is the subcategory of {data.category}
                          </div>
                        </Link>
                    {/*    <div className="extra content">*/}
                    {/*<span className="right floated">*/}
                    {/*    Joined in 2013*/}
                    {/*</span>*/}
                    {/*      <span>*/}
                    {/*  <i className="user icon"/>*/}
                    {/*  75 Visited*/}
                    {/*</span>*/}
                    {/*    </div>*/}
                      </div>
                    </div>
                  </div>
                )
              }
            </Slider>
            </div>
            </div>
          )
        }
        <div>

        </div>
      </div>
    );
  }
}

export default Home;



