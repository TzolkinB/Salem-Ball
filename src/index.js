import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import './style.css'; 

import Nav     from './js/ui/NavComponent';
import Footer  from './js/ui/FooterComponent';
import Dances  from './js/components/Dances';
import Contact from './js/components/Contact';
import About   from './js/components/About';
import History from './js/components/History';
import Gallery from './js/components/PhotoGallery';


const App = ({children}) => (
	<div>
		<div role="main">
			<Nav />
      <About id="about" />
      <Dances id="dances" />
      {/*      <Gallery id="gallery" /> */}
      {children}
      <Contact id="contact" />
		</div>
		<Footer />
	</div>
)

render((
	<BrowserRouter>
    <div>
    <Switch>
    <Route exact path="/" component={App}>
      <Route path="/history" component={History} />
    </Route>
    </Switch>
    </div>
  </BrowserRouter>
), document.getElementById('app'))

//    <Route path="/#about" component={About} />
//	  <Route path="/#contact" component={Contact} />
