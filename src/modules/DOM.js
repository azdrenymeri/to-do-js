import 'bootstrap';
import './../scss/app.scss';
import { Project } from './project';
import { Note } from './note';
import { nav } from './header';
import { projectsNode,addProject, renderProjects,setActiveProject,
  getActiveProjectIndex } from './projects-container';
import { notesList, addNote, renderNotes,getActiveNoteIndex,setActiveNote }
  from './notes-container';
import { noteDetails,displayNoteDetails } from './details-container';
import { loadComponents } from './main-container';

// Loading the DOM elements
loadComponents();

const projectsList = document.getElementById('projects-list');
const notes = document.getElementById('notes-list');

const detailsContainer = document.getElementById('details-container');

// Data of the application
const projectsData = [];
1
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
  const selectedIndex = new Number(event.target.getAttribute('data-key'));
    setActiveProject(selectedIndex);
    renderNotes(projectsData[selectedIndex]);
});
// delete
document.getElementById('delete-note-btn').addEventListener('click',(event) => {
  const index = getActiveProjectIndex();
  projectsData[index].notes.splice(i,1);
  renderNotes(projectsData);

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
  const index = getActiveProjectIndex();
    if(projectsData[index].notes.length > 0){
      if(confirm("Your notes under this project will be lost. Are your sure ?")){
        projectsData.splice(index,1);
      }
    }else{
      projectsData.splice(index,1);
    }
  renderProjects(projectsData);
  if(projectsData.length > 0){
    renderNotes(projectsData[getActiveProjectIndex()]);
  }
});


notes.addEventListener('click',(event)=> {
  setActiveNote(event.target.getAttribute('data-key'))

  const activeProject = projectsData[getActiveProjectIndex()];

  if(activeProject){
      const selectedNote = activeProject.notes[getActiveNoteIndex()];
      displayNoteDetails(selectedNote);
  } else {
    alert('Something went wrong ! ');
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
    const activeProject = projectsData[getActiveProjectIndex()];

   if(activeProject){
     addNote(name);
     activeProject.notes.push(newNote);
   } else {
     alert('You should select a project');
   }
});



export { init };
