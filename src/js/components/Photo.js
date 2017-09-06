import React from 'react';

class Photo extends React.Component {
  render() {
    return (
      <div>
        <img className={this.props.className} src={this.props.src} alt={this.props.alt} />
      </div>
    );
  }
}

export default Photo;

//<img src={this.props.photoUrl} className="header-image img-fluid" alt={this.props.description}/>
