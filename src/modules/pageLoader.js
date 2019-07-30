import 'bootstrap';
import './../scss/app.scss';

import { nav } from './header';

const body = document.getElementById('app');
 const container = document.getElementById('container');

const load = () => {
      body.appendChild(nav);
     container.innerHTML = `<p> Hello World </p>`;
}



export { load, };
