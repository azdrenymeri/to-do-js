import 'bootstrap';
import './../scss/app.scss';
import { Project } from './project';
import { Note } from './note';
import { nav } from './header';
import { projectsNode,addProject } from './projects-container';
import { notesList, addNote, renderNotes } from './notes-container';
import { noteDetails,displayNote } from './details-container';
import { loadComponents } from './main-container';


// Loading the DOM elements
loadComponents();

const projectsList = document.getElementById('projects-list');
const notes = document.getElementById('notes-list');

const detailsContainer = document.getElementById('details-container');

// Data of the application
const projectsData = [];



const init = () => {

}

// listeners

//modal listener for creating projects
document.getElementById('saveProject').addEventListener('click',(event) => {
  const name = document.getElementById('project-name');
  const newProject = new Project(name.value);

    // TODO: create a method that checks if this project name is already on the list
    projectsData.push(newProject);
    addProject(name.value);
    name.value = '';

});

projectsList.addEventListener('click',(event) => {
  const activeProject = event.target.parentNode.getElementsByClassName('active')[0];
  if(activeProject){
    activeProject.classList.remove('active')
  }
  event.target.classList.add('active');
  const selectedIndex = new Number(event.target.getAttribute('data-key'));
  const selectedProject = projectsData[selectedIndex];
    //rendering the notes
    renderNotes(selectedProject)
});

notes.addEventListener('click',(event)=> {
  const activeNote = event.target.parentNode.getElementsByClassName('active')[0];
  if(activeNote){
    activeNote.classList.remove('active');
  }
  event.target.classList.add('active')

  // now bassed on the project let's
  const activeProject = projectsList.getElementsByClassName('active')[0];

  if(activeProject){
      const projectIndex = new Number(activeProject.getAttribute('data-key'));
      const noteIndex = new Number(event.target.getAttribute('data-key'));
      const selectedProject = projectsData[projectIndex];

      const selectedNote = selectedProject.notes[noteIndex];

      displayNote(selectedNote);

  }
});


document.getElementById('saveNote').addEventListener('click',(event)=>{
  const name = document.getElementById('note-name').value;
  const description  = document.getElementById('description-area').value;
  const dueDate = document.getElementById('due-date').value;
  const priority = document.getElementById('note-priority').value;

  const newNote = new Note(name,description,dueDate,priority);

  // TODO: create a display note to display note details
  // on the details container when the user selects a note


  //Push it on the correct array element
    const activeProject = document.getElementById('projects-list')
    .getElementsByClassName('active')[0];

   if(activeProject){
     const index = activeProject.getAttribute('data-key');
     addNote(name);
     projectsData[new Number(index)].notes.push(newNote);
   } else {
     alert('You should select a project');
   }
});





export { init };
