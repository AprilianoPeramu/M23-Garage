import React from 'react'
import Page1 from '../assets/page1.jpg'
import Page2 from '../assets/page2.jpg'
import Navbar from '../pages/Navbar';
import Carousel from 'react-bootstrap/Carousel';



const Home = () => {
    return (
        <div>
            <Navbar />

            <section className='page0'>
            <Carousel>
                <Carousel.Item className="image">
                    <img
                        className="slide d-block w-100 mx-auto img-responsive" width="800" height="500"
                        src="https://img.freepik.com/free-vector/cartoon-illustration-garage-interior-storage-room-with-auto-equipment-tires-jerrican_1441-1761.jpg?w=740&t=st=1670477489~exp=1670478089~hmac=d83804edf2a6ccea62e651e9cefe639df947d76a84776728b46825d6eeadd166"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2 className='align-items-center text-center'>Welcome To Our Garage</h2>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="image">
                    <img
                        className="d-block w-100 mx-auto img-responsive" width="800" height="500"
                        src="https://img.freepik.com/free-vector/isometric-auto-repair-horizontal-background-with-text-indoor-garage-composition-with-two-workers-repairing-car_1284-60836.jpg?size=626&ext=jpg&ga=GA1.2.942274022.1666655029&semt=sph"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="image">
                    <img
                        className="d-block w-100 mx-auto img-responsive" width="800" height="500"
                        src="https://img.freepik.com/free-vector/garage-scene-cartoon-style_1308-87648.jpg?size=626&ext=jpg&ga=GA1.2.942274022.1666655029&semt=ais"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </section>

            <section id="page1">
                <div className='container'>
                    <div className="row de-flex align-items-center">
                        <div className="col-md-6 mt-2 mb-2">
                            <h1>Our Garage</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore magnam inventore doloremque quas aut illum!</p>
                            <button className="btn btn-success mt-2"><a href='#' className='logo-title'>Buy Some?</a></button>
                        </div>
                        <div className="col-md-6 mt-4-mb-4">
                            <img src={Page1} className="pic1" alt="page1" />
                        </div>
                    </div>
                </div>
            </section>
            <section id='page2' className='m-2'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 mt-4 mb-4">
                            <img src={Page2} alt="page2" width="400px" height="400px" />
                        </div>
                        <div className="col-md-6 text-end mt-4 mb-4">
                            <h1>Who We Are?</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt consequatur, consequuntur aperiam delectus consectetur ab temporibus laboriosam laudantium enim quibusdam?</p>
                            <button className="btn btn-success mt-2"><a href='#' className='logo-title'>Join With Us!</a></button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};
export default Home