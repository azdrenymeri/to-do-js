import 'bootstrap';
import './../scss/app.scss';

import { nav } from './header';
import { projectsNode,createProject } from './projects-container';
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
     const name = document.getElementById('project-name');
     createProject(name.value);
     name.value ='';
});

document.getElementById('projects-list').addEventListener('click',(event)=>{

  const activeProject = event.target.parentNode.getElementsByClassName('active')[0];
  activeProject.classList.remove('active');

  event.target.classList.add('active');

});


export { load };
