import React from 'react'
import imgProducts from '../img/products.png'
import flux from '../img/flux-5.png'
import '../styles/About.css'

const About = () => (
    <section id='about'>
        <div id='section-about'>
            <div id='back-shape'></div>
            <div className='content'>
                <div className='content-info'>
                    <header><h1>Everyone deserves good food!</h1></header>
                    <h2>Even if that means importing food from other regions of the globe.</h2>
                    <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
                <div>
                    <img id='products' src={imgProducts} alt='Frame with three pictures. Each of them contain hands holding products to the camera: Coffee, Strawberries and potatoes.' />
                </div>
            </div>
        </div>
        <div id='section-process'>
            <header><h1 className='heading-center'>The Process</h1></header>
            <div className='about-grid'>
                <div className='flux'>
                    <h2><span className='circle'>1</span>Register and Find</h2>
                    <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
                <div className='flux'>
                    <h2><span className='circle'>2</span>Deliver Product</h2>
                    <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
                <img id='process-img' src={flux} alt='Poales process schema'></img>
                <div className='flux'>
                    <h2><span className='circle'>3</span>Sell to Customers</h2>
                    <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
                <div className='flux'>
                    <h2><span className='circle'>4</span>Consumers become Partners</h2>
                    <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
            </div>
        </div>
    </section>
)

export default About