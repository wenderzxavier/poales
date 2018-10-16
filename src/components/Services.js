import React from 'react'
import '../styles/Services.css'
import map from '../img/map.jpg'
import tax from '../img/taxes.jpg'
import farmers from '../img/farmers.jpg'

const Services = () => (
    <div>
        <h1 className='heading-center'>Our Services</h1>
        <section id='services'>
            <a href='localhost:3000/#' id='service-monitor' className='service-detail'>
                <div>
                    <img id='monitor-img' className='service-img' src={map} alt='Map' />
                </div>
                <div id='monitor-info' className='service-info'>
                    <header>
                        <h1 className='service-header'>Product Price Monitor</h1>
                        <h3>Know where to buy and sell your product</h3>
                    </header>
                    <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
                    <h3 style={{'color': 'red'}}>To be Implemented</h3>
                </div>
            </a>
            <a href='localhost:3000/#' id='service-calculator' className='service-detail'>
                <div id='calculator-info' className='service-info'>
                    <header>
                        <h1 className='service-header'>Tax Calculator</h1>
                        <h3>Know where to buy and sell your product</h3>
                    </header>
                    <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
                    <h3 style={{'color': 'red'}}>To be Implemented</h3>
                </div>
                <div>
                    <img id='calc-img' className='service-img' src={tax} alt='Map' />
                </div>
            </a>
            <a href='localhost:3000/#' id='service-profile' className='service-detail'>
                <div>
                    <img id='profile-img' className='service-img' src={farmers} alt='Map' />
                </div>
                <div id='profile-info' className='service-info'>
                    <header>
                        <h1 className='service-header'>Meet the Farmers</h1>
                        <h3>Know where to buy and sell your product</h3>
                    </header>
                    <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
                    <h3 style={{'color': 'red'}}>To be Implemented</h3>
                </div>
            </a>
        </section>
    </div>
)

export default Services