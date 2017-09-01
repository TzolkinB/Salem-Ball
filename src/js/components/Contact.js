import React from 'react';
import facebook from '../../img/find-us-facebook.png';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <section id="contact">
          <div className="container">
            <div className="row">
              <div className="col-sm-2"></div>
              <div className="col-sm-8">
                <h2>Contact us</h2>
                <p> To RSVP for the event, call (336)831-6277 or e-mail info@salemballnc.com</p>
                <a target="_blank" title="find us on Facebook" href="https://www.facebook.com/Salem-Ball-18th-Century-Ball-October-7-2017-1062903163726978/"><img alt="find us on facebook" src={facebook} className="facebook-image"/></a> 
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
