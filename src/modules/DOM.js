import 'bootstrap';
import './../scss/app.scss';

import { nav } from './header';
import { projectsNode,createProject } from './projects-container';
import { notesList, createNote } from './notes-container';
import { noteDetails } from './details-container';
import { loadComponents } from './main-container';

const navContainer = document.getElementById('navigation-container');
const body = document.getElementById('app');
const container = document.getElementById('container');
const projectsContainer = document.getElementById('projects-container');
const notesContainer = document.getElementById('notes-container');
const detailsContainer = document.getElementById('details-container');

const projects = [];

// Loading the DOM elements
loadComponents();


const init = () => {

}


document.getElementById('saveProject').addEventListener('click',(event)=>{
     const name = document.getElementById('project-name');
     createProject(name.value);
     name.value ='';
});


const items = document.getElementsByClassName('p-item');

for(const element of items){

        element.addEventListener('click',(event)=> {
           const activeProject = event.target.parentNode.parentNode.getElementsByClassName('active')[0];
           activeProject.classList.remove('active');
          event.target.parentNode.classList.add("active");
          console.log(ActiveProject);
        });
}

let itemsNotes = document.getElementsByClassName('n-item');

for(const elements of itemsNotes){

      elements.addEventListener('click',(event)=> {

           const activeNote = event.target.parentNode.parentNode.getElementsByClassName('active')[0];

           console.log(activeNote);
           activeNote.classList.remove('active');
          event.target.parentNode.classList.add("active");

        });
}


document.getElementById('saveNote').addEventListener('click', (event)=>{

  const name = document.getElementById('note-name');
  createNote(name.value); // need to send the id of project to add it to projets note array
  name.value='';


});

export { init };
