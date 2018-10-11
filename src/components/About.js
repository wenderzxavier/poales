import React from 'react'
import img from '../img/products.png'
import '../styles/About.css'

const About = () => (
    <section id='about'>
        <div>
            <div id='back-shape'></div>
            <div className='content'>
                <div className='content-info'>
                    <header><h1>Everyone deserves good food!</h1></header>
                    <h2>Even if that means importing food from other regions of the globe.</h2>
                    <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
                <div>
                    <img id='products' src={img} alt='Frame with three pictures. Each of them contain hands holding products to the camera: Coffee, Strawberries and potatoes.' />
                </div>
            </div>
        </div>
        <div>
            <div id='back-shape2'></div>
            <div></div>
        </div>
    </section>
)

export default About