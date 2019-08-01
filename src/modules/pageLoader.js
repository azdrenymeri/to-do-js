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
projectsContainer.appendChild(projectsNode);
const load = () => {
  navContainer.appendChild(nav);
  
  notesContainer.appendChild(notesList);
  detailsContainer.appendChild(noteDetails);
 
}


document.getElementById('saveProject').addEventListener('click',(event)=>{
    const name=document.getElementById('projectName');
    

})

export { load };
