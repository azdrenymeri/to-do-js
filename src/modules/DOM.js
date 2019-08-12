import "bootstrap";
import "./../scss/app.scss";
import { Project } from "./project";
import { Note } from "./note";
import { nav } from "./header";
import {
  projectsNode,
  addProject,
  renderProjects,
  setActiveProject,
  getActiveProjectIndex
} from "./projects-container";
import {
  notesList,
  addNote,
  renderNotes,
  getActiveNoteIndex,
  setActiveNote
} from "./notes-container";
import { noteDetails, displayNoteDetails } from "./details-container";
import { loadComponents } from "./main-container";

loadComponents();

const projectsList = document.getElementById("projects-list");
const notes = document.getElementById("notes-list");
document.getElementById("hidden").style.visibility = "hidden";
const detailsContainer = document.getElementById("details-container");

const projectsData = [];

const init = () => {
  const np = new Project("Default");
  projectsData.push(np);
  addProject("First Project");
};

document.getElementById("saveProject").addEventListener("click", event => {
  const name = document.getElementById("project-name");
  const newProject = new Project(name.value);

  projectsData.push(newProject);
  addProject(name.value);
  name.value = "";
});

projectsList.addEventListener("click", event => {
  const selectedIndex = new Number(event.target.getAttribute("data-key"));
  setActiveProject(selectedIndex);
  renderNotes(projectsData[selectedIndex]);
  document.getElementById("hidden").style.visibility = "hidden";
});

document.getElementById("delete-note-btn").addEventListener("click", event => {
  const index = getActiveProjectIndex();
  projectsData[index].notes.splice(getActiveNoteIndex(), 1);
  renderNotes(projectsData[index]);
  document.getElementById("hidden").style.visibility = "hidden";
});

document.getElementById("noteModal").addEventListener("click", event => {
  const note =
    projectsData[getActiveProjectIndex()].notes[getActiveNoteIndex()];

  document.getElementById("note-title-update").value = note.title;
  document.getElementById("note-description-update").value = note.description;
  document.getElementById("due-date-update").value = note.dueDate;
  document.getElementById("note-priority-update").value = note.priority;
});

document.getElementById("saveNoteUpdate").addEventListener("click", event => {
  const changenote =
    projectsData[getActiveProjectIndex()].notes[getActiveNoteIndex()];

  changenote.title = document.getElementById("note-title-update").value;
  changenote.description = document.getElementById(
    "note-description-update"
  ).value;
  changenote.dueDate = document.getElementById("due-date-update").value;
  changenote.priority = document.getElementById("note-priority-update").value;

  const index = getActiveProjectIndex();
  renderNotes(projectsData[index]);
  document.getElementById("hidden").style.visibility = "hidden";
});

document.getElementById("deleteProject").addEventListener("click", event => {
  const index = getActiveProjectIndex();
  if (projectsData[index].notes.length > 0) {
    if (
      confirm("Your notes under this project will be lost. Are your sure ?")
    ) {
      projectsData.splice(index, 1);
    }
  } else {
    projectsData.splice(index, 1);
  }
  renderProjects(projectsData);
  renderNotes(projectsData[getActiveProjectIndex()]);
});

notes.addEventListener("click", event => {
  setActiveNote(event.target.getAttribute("data-key"));

  const activeProject = projectsData[getActiveProjectIndex()];

  if (activeProject) {
    const selectedNote = activeProject.notes[getActiveNoteIndex()];
    displayNoteDetails(selectedNote);
    document.getElementById("hidden").style.visibility = "visible";
  } else {
    alert("Something went wrong ! ");
  }
});

document.getElementById("saveNote").addEventListener("click", event => {
  const name = document.getElementById("note-name").value;
  const description = document.getElementById("description-area").value;
  const dueDate = document.getElementById("due-date").value;
  const priority = document.getElementById("note-priority").value;

  const newNote = new Note(name, description, dueDate, priority);

  const activeProject = projectsData[getActiveProjectIndex()];

  if (activeProject) {
    addNote(name);
    activeProject.notes.push(newNote);
  } else {
    alert("You should select a project");
  }
});

export { init };
