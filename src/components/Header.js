import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return <header id="header">
            <div className="inner">
              <a href="#" className="image avatar">
                <img src={avatar} alt="" />
              </a>
              <h1>
                <strong>My name is Benja</strong>
                <br />
                Welcome To My Art Store<br />
                crafted by <a href="http://html5up.net">Simba Knows</a>.
              </h1>
            </div>
            <Footer />
          </header>
    }
}

export default Header
