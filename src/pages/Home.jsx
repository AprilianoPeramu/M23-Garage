import React from 'react'
import Page1 from '../assets/page1.jpg'
import Page2 from '../assets/page2.jpg'
import Navbar from '../pages/Navbar';


const Home = () => {
    return (
        <div>
            <Navbar/>
            <section id="page1" className='m-2'>
                <div className='container'>
                    <div className="row de-flex align-items-center">
                        <div className="col-md-6 mt-4 mb-4">
                            <h1>Our Garage</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore magnam inventore doloremque quas aut illum!</p>
                            <button className="btn btn-success mt-2"><a href='#' className='logo-title'>Buy Some?</a></button>
                        </div>
                        <div className="col-md-6 mt-4-mb-4">
                            <img src={Page1}  alt="page1" width="410px" height="410px" />
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
}

export default Home