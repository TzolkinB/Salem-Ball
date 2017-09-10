import React from 'react';

class GalleryModal extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    console.log('here');
    console.log(this.props);
    console.log(this.state);
 
  return(
    <div id="viewImage" className="modal fade" tab-index="-1">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-boday">
            <h2>Modal</h2>
            <p> am a modal</p>
          </div>
        </div>
      </div>
    </div>
  )
 }
}

export default GalleryModal;
