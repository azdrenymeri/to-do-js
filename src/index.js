
import { load } from './modules/pageLoader'

load();
//
//
//
// let projectArray=[];
// let defaultProject= new Project("New Project");
// projectArray.push(defaultProject);
//
//
// // create todo from form input which is array, 0-name , 1- date ,
// // 2- importance(high low medium) , 3 - maybe id of project for easier deletion and stuff
// const createTodo = (formInput, project) => {
//     todo= new Todo(formInput[0],formInput[1],formInput[2],formInput[3]);
//     project.todos.push(todo);
//   };
//
//   // create project with forminput being name of the project.
// const createProject = (formInput) => {
//     project= new Project(formInput);
//     projectArray.push(project);
//   };
//
// // delete project by id
//   const deleteProject = (project) => {
//     for (let i = 0; i < todos.length; i++) {
//       if (projectArray[i] == project) {
//         projectArray.splice(projectArray.indexOf(projectArray.find(e => e.id == project.id)), 1);
//         break;
//       }
//     }
// };
//
// // delete todo by project id that it contains, but still need to save changes somehow?
//   const deleteTodo = (todo) => {
//       let varriable =projectArray[todo.project].todos;
//     for (let i = 0; i <varriable.length ; i++) {
//         if (variable[i] == todo){
//           varriable.splice(varriable.indexOf(varriable.find(e => e.id == todo.id)), 1);
//           break;
//         }
//       }
//   };
