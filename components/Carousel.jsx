import React from 'react';
import { StyledCarousel } from './styles/Carousel.styled';

function Carousel() {
  return (
    <StyledCarousel>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://www.mmobomb.com/g/1118/thumbnail.jpg" className="d-block w-100" alt="diablo-immortal" />
                </div>
                <div className="carousel-item">
                    <img src="https://www.mmobomb.com/g/523/thumbnail.jpg" className="d-block w-100" alt="lost-ark" />
                </div>
                <div className="carousel-item">
                    <img src="https://www.mmobomb.com/g/1116/thumbnail.jpg" className="d-block w-100" alt="space-punks" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        <div id='news-box'>
            <h3>Check out the Lastest Games!</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ipsum? Lorem ipsum dolor sit amet. <span><a href="#!">Click for Details</a></span></p>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ipsum? Lorem ipsum dolor sit amet. <span><a href="#!">Click for Details</a></span></p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ipsum? Lorem ipsum dolor sit amet. <span><a href="#!">Click for Details</a></span></p>
        </div>
    </StyledCarousel>
  )
}

export default Carousel