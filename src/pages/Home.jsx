import React from 'react'
import Navbar from '../pages/Navbar';
import Carousel from 'react-bootstrap/Carousel';



const Home = () => {
    return (
        <div>
            <Navbar />
            <section id="page1">
                <div className='container'>
                    <div className="row de-flex align-items-center mt-4">
                        <div className="col-md-6 mt-2 mb-2">
                            <h1>Our Garage</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore magnam inventore doloremque quas aut illum!</p>
                            <button className="btn btn-page mt-2"><a href='#' className='logo-title'>Buy Some?</a></button>
                        </div>
                        <div className="col-md-6 mt-4-mb-4">
                            <img src='https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=600'  alt="page1" className="img-fluid mt-1 pic-1" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="pages">
                <div className="row d-flex justify-content-center">
                    <div className="col-2 tool">
                        <a href='#'><img src="https://cdn.icon-icons.com/icons2/1808/PNG/512/tools_115098.png" alt="tools"  width='44px'/>
                        </a>
                    </div>
                    <div className="col-2 tool" >
                        <a href='#'><img src="https://cdn.icon-icons.com/icons2/943/PNG/96/shoppaymentorderbuy-09_icon-icons.com_73854.png" alt="tools"  width='48px'/>
                        </a>
                    </div>
                    <div className="col-2 tool">
                        <a href='#'><img src="https://cdn.icon-icons.com/icons2/577/PNG/256/Wheel_icon-icons.com_54891.png" alt="tools"  width='48px'/>
                        </a>
                    </div>
                    <div className="col-2 tool">
                        <a href='#'><img src="https://cdn.icon-icons.com/icons2/1363/PNG/512/travel-holiday-vacation-303_89062.png" alt="tools"  width='48px'/>
                        </a>
                    </div>
                    <div className="col-2 tool">
                        <a href='#'><img src="https://cdn.icon-icons.com/icons2/94/PNG/512/oil_delivery_16807.png" alt="tools"  width='48px'/>
                        </a>
                    </div >
                </div>
            </section>
            <section id='page2' className='m-2'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 mt-2 mb-2">
                            <img src='https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=600' alt="page2" className="img-fluid" />
                        </div>
                        <div className="col-md-6 text-end mt-4 mb-4">
                            <h1>Who We Are?</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt consequatur, consequuntur aperiam delectus consectetur ab temporibus laboriosam laudantium enim quibusdam?</p>
                            <button className="btn btn-page mt-2"><a href='#' className='logo-title'>Join With Us!</a></button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};
export default Home