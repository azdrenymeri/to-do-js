import 'bootstrap';
import './../scss/app.scss';
import { Project } from './project';
import { nav } from './header';
import { projectsNode,addProject } from './projects-container';
import { notesList, addNote } from './notes-container';
import { noteDetails } from './details-container';
import { loadComponents } from './main-container';

const navContainer = document.getElementById('navigation-container');
const body = document.getElementById('app');
const container = document.getElementById('container');
const projectsContainer = document.getElementById('projects-container');
const notesContainer = document.getElementById('notes-container');
const detailsContainer = document.getElementById('details-container');

// Data of the application
const projectsData = [];

// Loading the DOM elements
loadComponents();


const init = () => {

}

// listeners

//adding a project and a note
document.getElementById('saveProject').addEventListener('click',(event) => {
  const name = document.getElementById('project-name');
  const newProject = new Project(name.value);

    // TODO: create a method that checks if this project name is already on the list
    projectsData.push(newProject);
    addProject(name.value);
    name.value = '';
});

//changing the active status to the projects and notes
const items = document.getElementsByClassName('p-item');
for(const element of items){

        element.addEventListener('click',(event)=> {
           const activeProject = event.target.parentNode.parentNode.getElementsByClassName('active')[0];
           activeProject.classList.remove('active');
          event.target.parentNode.classList.add("active");
          console.log(ActiveProject);
        });
}
const itemsNotes = document.getElementsByClassName('n-item');
for(const elements of itemsNotes){

      elements.addEventListener('click',(event)=> {
           const activeNote = event.target.parentNode.parentNode.getElementsByClassName('active')[0];
           activeNote.classList.remove('active');
          event.target.parentNode.classList.add("active");
        });
}



document.getElementById('saveNote').addEventListener('click', (event)=>{

  const name = document.getElementById('note-name');
  const description  = document.getElementById('description-area');
  const dueDate = document.getElementById('due-date');
  const priority = document.getElementById('note-priority');

  const note = new Node(name,description,dueDate,priority);
  //display it on the details panel
  displayNote(note)
  addNote(name.value);

  //Push it on the correct


// Cleanup
  name.value='';
  description.value = '';
});


export { init };
