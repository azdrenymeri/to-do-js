import 'bootstrap';
import './../scss/app.scss';
import { Project } from './project';
import { Note } from './note';
import { nav } from './header';
import { projectsNode,addProject, renderProjects } from './projects-container';
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
  const np = new Project("Default");
  projectsData.push(np);
  addProject("First Project");
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

// here is active button
projectsList.addEventListener('click',(event) => {
  const activeProject = event.target.parentNode.getElementsByClassName('active')[0];
  if(activeProject){
    activeProject.classList.remove('active')
  }

  event.target.classList.add('active');
  const selectedIndex = new Number(event.target.getAttribute('data-key'));
  const selectedProject = projectsData[selectedIndex];
    //rendering the notes

    renderNotes(selectedProject);
});
// delete
document.getElementById('delete-note-btn').addEventListener('click',(event) => {
  const activeNote = notes.getElementsByClassName('active')[0];
  const i =activeNote.getAttribute('data-key');
  const activeProject = projectsList.getElementsByClassName('active')[0];
  const index = activeProject.getAttribute('data-key');
  projectsData[index].notes.splice(i,1);
  renderNotes(projectsData[index]);

});
// update
document.getElementById('update-note-btn').addEventListener('click',(event) => {
  const activeNote = notes.getElementsByClassName('active')[0];
  const i =activeNote.getAttribute('data-key');
  const activeProject = projectsList.getElementsByClassName('active')[0];
  const index = activeProject.getAttribute('data-key');
  const changenote= projectsData[index].notes[i]

  changenote.title = document.getElementById('note-title').value;
  changenote.description  = document.getElementById('note-description').value;
  changenote.dueDate = document.getElementById('due-date-details').value;
  changenote.priority = document.getElementById('note-priority-details').value;

  projectsData[index].notes[i]=changenote;
  renderNotes(projectsData[index]);


});

//deleting project
document.getElementById('deleteProject').addEventListener('click',(event) => {
  const activeProject = projectsList.getElementsByClassName('active')[0];
  const index = activeProject.getAttribute('data-key');
  console.log('hello there')
  projectsData.splice(index,1);
  renderProjects(projectsData);

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
