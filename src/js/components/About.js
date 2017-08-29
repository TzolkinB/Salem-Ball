import React from 'react';
import ballroom from '../../img/ballroom2.png';
import image1 from '../../img/image1.jpg';

class About extends React.Component {
  render() {
    return (
      <div>
        <header>
          <img src={ballroom} className="header-image" alt="Ballroom"/>
          <div className="container text-center text-white">
            <h1>Salem 18th Century Masked* Ball</h1>
            <h2>Saturday October 7, 2017</h2>
            <p>*Masks are optional but Colonial, Regency, or evening
            clothing requested</p>
          </div>
        </header>

        <section id="about">
          <div className="container">
            <div className="row">
              <div className="col-sm-1"></div>
              <div className="col-sm-9">
                <h2>About</h2>
                <p>This year's event will be held at:</p>
                <p>
                  Home Moravian Church | Fellowship Hall
                <br/>529 Church Street, Winston-Salem, NC 27101
                </p>
                <p>Parking is available at the Fines Arts Center of Salem College</p>
                <p>General Event Information:</p>
                <ul>
                  <li>Date: Saturday, October 7, 2017</li>
                  <li>Time: 6:45PM - 10:30PM</li>
                  <li>Tickets are $15 in advance, $20 at the door.</li>
                  <li>Desserts and savories served at the break. Drinks provided.</li>
                  <li>Please bring a dish you would like to share</li> 
                </ul>
              </div>
              <div className="col-sm-2">
                <img src={image1} className="rounded-circle main-image" alt="dancers"/>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
