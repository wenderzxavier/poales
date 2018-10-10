import React, { Component } from 'react';
import backgroundVideoMP4 from '../img/poalis.mp4';
import backgroundVideoOGG from '../img/poalis.ogg';
import '../styles/Cover.css';

class Cover extends Component {
    render() {
        return (
            <section>
                <video className='cover' id='video' autoPlay loop muted>
                    <source src={backgroundVideoMP4} type='video/mp4' />
                    <source src={backgroundVideoOGG} type='video/ogg' />
                    Sorry, but your browser does not support the video background.
                </video>
                <div className='cover' id='filter'>
                    <div>
                        <header id='heading'>POALES</header>
                        <p id='description'>Connecting local farmers to global buyers</p>
                    </div>
                    <div id='scroll-down'>
                        <div id='mouse'><div id='scroll'></div></div>
                        <p>Scroll To Learn</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Cover;
