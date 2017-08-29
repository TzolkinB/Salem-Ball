import React from 'react';
import {render} from 'react-dom';
import './style.css'; 

import Nav     from './js/ui/NavComponent';
import Footer  from './js/ui/FooterComponent';
import Dances  from './js/components/Dances';
import Contact from './js/components/Contact';
import About   from './js/components/About';


const App =() => (
	<div>
		<div role="main">
			<Nav />
      <About />
      <Dances />
      <Contact />
		</div>
		<Footer />
	</div>
)

render((
	<div>
		<App />
	</div>
), document.getElementById('app'))
