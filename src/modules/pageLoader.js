import 'bootstrap';
import './../scss/app.scss';

import { nav } from './header';
import { projectsNode,createProject } from './projects-container';
import { notesList, createNote } from './notes-container';
import { noteDetails } from './details-container';

const navContainer = document.getElementById('navigation-container');
const body = document.getElementById('app');
const container = document.getElementById('container');
const projectsContainer = document.getElementById('projects-container');
const notesContainer = document.getElementById('notes-container');
const detailsContainer = document.getElementById('details-container');
projectsContainer.appendChild(projectsNode);
notesContainer.appendChild(notesList);
const load = () => {
  navContainer.appendChild(nav);

  
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

document.getElementById('saveNote').addEventListener('click', (event)=>{

  const name = document.getElementById('note-name');
  createNote(name.value); // need to send the id of project to add it to projets note array
  name.value='';


});

document.getElementById('notes-list').addEventListener('click',(event)=>{

  const activeNote = event.target.parentNode.getElementsByClassName('active')[0];
  activeNote.classList.remove('active');
  event.target.classList.add('active');

});


export { load };
