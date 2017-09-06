import React from 'react';
//import Photo from './Photo';
import GalleryModal from './GalleryModal';

// Create new array with URLs for images
let imgUrls = [
 'https://source.unsplash.com/3Z70SDuYs5g/800x600',
 'https://source.unsplash.com/01vFmYAOqQ0/800x600',
 'https://source.unsplash.com/2Bjq3A7rGn4/800x600',
 'https://source.unsplash.com/t20pc32VbrU/800x600',
 'https://source.unsplash.com/pHANr-CpbYM/800x600',
 'https://source.unsplash.com/3PmwYw2uErY/800x600',
 'https://source.unsplash.com/uOi3lg8fGl4/800x600',
 'https://source.unsplash.com/CwkiN6_qpDI/800x600',
 'https://source.unsplash.com/9O1oQ9SzQZQ/800x600',
 'https://source.unsplash.com/E4944K_4SvI/800x600',
 'https://source.unsplash.com/-hI5dX2ObAs/800x600',
 'https://source.unsplash.com/vZlTg_McCDo/800x600'
];


class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
     showModal: false,
     url: ''
    }
  };


  render() {
    if (this.props.isOpen === false) {
     return null;
    }
 
    return(
      <div>
        <section id="gallery">
          <div className='container-fluid gallery-container'>
            <div className='row'>
              <div className="col-sm-2"></div>
              <div className="col-sm-8">
                <h2>PhotoGallery</h2>
                {
                  imgUrls.map((url, index) => {
                  return ( 
                    <div className='col-sm-6 col-md-3 col-xl-2'>
                      <div className='gallery-card'>
                        <img className='gallery-thumbnail' src={url} alt={'Image number ' + (index + 1)} />
                        <button className='card-icon-open fa fa-expand' value={url} data-toggle="modal" data-target="#viewImage">Click</button>
                      </div>
                    </div>
                  )})
                }
              </div>
               
              <GalleryModal src={this.state.url} /> 
            </div>
          </div>
        </section>
      </div>
    );
  }
}


export default PhotoGallery;
