import React from 'react'
import logo from './../assets/newcast.png'
import logos from './../assets/logos.png'

export default function Footer() {
    return (
        <footer>
            <div className='max-desktop footer-section'>
                <div>
                    <img src={logo} alt="logo" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, pellentesque dictum posuere id diam rutrum. </p>
        <img src={logos} alt="logos" />
                </div>
            </div>
        </footer>
    )
}
