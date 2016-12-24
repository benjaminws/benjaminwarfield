import {h} from 'preact';  /** @jsx h */
import {Router} from 'preact-router';

// eslint-disable-next-line
import style from './App.css';

import {Navigation} from './components/Navigation';
import {Home} from './components/Home';
import {About} from './components/About';
import {Work} from './components/Work';
import {Contact} from './components/Contact';
import {Error} from './components/Error';
import {Footer} from './components/Footer';

let {pushState} = history;
history.pushState = (a, b, url) => {
  pushState.call(history, a, b, url);
  scrollTo(0, 0);
};

const App = () => (
  <div>
    <Navigation/>
    <div class='content'>
      <Router>
        <Home path='/' />
        <About path='/about' />
        <Contact path='/contact' />
        <Work path='/work' />
        <Error type='404' default />
      </Router>
    </div>
    <Footer />
  </div>
);

export default App;
