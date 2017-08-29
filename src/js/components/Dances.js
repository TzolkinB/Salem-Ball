import React from 'react';
import image2 from '../../img/image2.png';

class Dances extends React.Component {
  render() {
    return (
      <div>
        <section id="dances">
            <div className="row">
              <div className="col-sm-5">
                <img src={image2} className="rounded-circle float-left dance-image" alt="dancing"/>
              </div>
              <div className="col-sm-7">
                <h2>Dances</h2>
                <h5>This year's Dance Master is John Millar of Williamsburg</h5>
                <h5>Music will be provided by Blackthorne.</h5>
                <p>There will be a walk through for each dance. Dances will be
                chosen from the list below:</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-5"></div>
              <div className="col-sm-3">
                <ul>
                  <li>Barbarini's Tambourine</li>
                  <li>Black Nag</li>
                  <li>Childgrove (Easy)</li>
                  <li>Christ Church Bells (Easy)</li>
                  <li>Cuckoo's Nest</li>
                  <li>Dick's Maggot</li>
                  <li>Duke of Kent</li>
                  <li>Fandango</li>
                  <li>Geud Man of Ballangigh</li>
                  <li>Hole in the Wall (Easy)</li>
                </ul>
              </div>
              <div className="col-sm-4">
                <ul>
                  <li>Irish Washerwoman</li>
                  <li>Jack's Health (Easy)</li>
                  <li>Jack's Maggot</li>
                  <li>Juice of Barley (Easy)</li>
                  <li>Mr. Isaac's Maggot</li>
                  <li>Petronella</li>
                  <li>Punch Bowl</li>
                  <li>St. Martin's Lane</li>
                  <li>Well Hall</li>
                </ul>
              </div>
            </div>
        </section>
      </div>
    );
  }
}

export default Dances;
