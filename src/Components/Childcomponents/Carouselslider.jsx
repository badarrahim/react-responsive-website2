import React from 'react'
import { Button, Carousel } from 'react-bootstrap';
import background from '../../img/background.png';
import background2 from '../../img/background2.png';
import background3 from '../../img/background3.png';



const Carouselslider = () => {
    return (
        <>

            <div className="row">
                <div className="col-12">
                    <Carousel>
                        <Carousel.Item className="carousel-inner ">
                            <img
                                className="d-block w-100"
                                src={background}
                                alt="First slide"
                            />
                            <Carousel.Caption className="carousel-caption" >
                                <h1 className="display-2">Bootstrap</h1>
                                <h3>Complete Website Layout</h3>
                                <Button type="button" className="btn btn-outline-light btn-lg ">
                                    View Demo
                        </Button>
                                <Button type="button" className="btn btn-primary btn-lg m-2">
                                    Get Started
                        </Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="carousel-inner">
                            <img
                                className="d-block w-100"
                                src={background2}
                                alt="Second slide"
                            />

                            <Carousel.Caption >
                                {/* <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}


                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="carousel-inner">
                            <img
                                className="d-block w-100"
                                src={background3}
                                alt="Third slide"
                            />

                            <Carousel.Caption >
                                {/* <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}

                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </>
    )
}
export default Carouselslider;