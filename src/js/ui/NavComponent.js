import React from 'react';

const navModel = [
  {link:"#about", title:"About"},
  {link:"#dances", title:"Dances"},
  {link:"#gallery", title:"Gallery"},
  {link:"#contact", title:"Contact"}
];

class NavComponent extends React.Component {
	render(){
		return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">Salem Ball</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
          {navModel.map((item, i) => (
            <li key={i} className="nav-item">
              <a className="nav-link js-scroll-trigger" href={item.link}>{item.title}</a>
            </li>
          ))}
          </ul>
        </div>
      </div>
    </nav>
		);
	}
}

export default NavComponent;
