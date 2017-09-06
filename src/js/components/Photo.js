import React from 'react';

class Photo extends React.Component {
  render() {
    return (
      <div>
        <section id="gallery">
          <div className="container">
            <div className="row">
              <div className="col-sm-2"></div>
              <div className="col-sm-8">
                <h2>PhotoGallery</h2>
                <img className={this.props.className} src={this.props.src} alt={this.props.alt} />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Photo;

//<img src={this.props.photoUrl} className="header-image img-fluid" alt={this.props.description}/>
