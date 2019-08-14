import { nav } from "./header";
import { projectsNode, createProject } from "./projects-container";
import { notesList, createNote } from "./notes-container";
import { noteDetails } from "./details-container";

const navContainer = document.getElementById("navigation-container");
const container = document.getElementById("container");
const projectsContainer = document.getElementById("projects-container");
const notesContainer = document.getElementById("notes-container");
const detailsContainer = document.getElementById("details-container");

const loadComponents = () => {
  navContainer.appendChild(nav);
  projectsContainer.appendChild(projectsNode);
  notesContainer.appendChild(notesList);
  detailsContainer.appendChild(noteDetails);
};

export {
  loadComponents,
  navContainer,
  container,
  projectsContainer,
  notesContainer,
  detailsContainer
};
