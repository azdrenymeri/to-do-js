import 'bootstrap';
import './../scss/app.scss';

import { nav } from './header';
import { projectsNode } from './projects-container';
import { notesList } from './notes-container';
import { noteDetails } from './details-container';

const navContainer = document.getElementById('navigation-container');
const body = document.getElementById('app');
const container = document.getElementById('container');
const projectsContainer = document.getElementById('projects-container');
const notesContainer = document.getElementById('notes-container');
const detailsContainer = document.getElementById('details-container');

const load = () => {
  navContainer.appendChild(nav);
  projectsContainer.appendChild(projectsNode);
  notesContainer.appendChild(notesList);
  detailsContainer.appendChild(noteDetails);
}



export { load, };
