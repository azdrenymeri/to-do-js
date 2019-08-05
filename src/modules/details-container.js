
const noteDetails = document.createElement('div');

noteDetails.innerHTML = `
<div class="card">
  <div class="card-header" id="note-title">
    Title
  </div>
  <div class="card-body" id="note-description">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
  qui officia deserunt mollit anim id est laborum.
  <hr/>
    <div class="row">
      <div class="col-sm-6">
<a href="#" class="btn btn-primary" id="note-dueDate">DueDae</a>
       </div>
      <div class="col-sm-6">
<a href="#" class="btn btn-primary" id="note-priority">Priority</a>
      </div>
    </div>
    <br/>
    <div class="row">
      <div class="col-sm-6">
<a href="#" class="btn btn-danger" id="delete-note-btn">Delete</a>
       </div>
      <div class="col-sm-6">
<a href="#" class="btn btn-warning" id="update-note-btn">Update</a>
      </div>
    </div>

  </div>

</div>
`;

const displayNote = (note) => {
  document.getElementById('note-title').innerText = note.title;
  document.getElementById('note-description').innerText = note.description;

  //TODO you might need to change this thwo lines if we add different components
  document.getElementById('note-dueDate').innerText = note.dueDate;
  document.getElementById('note-priority').innerText = note.priority;
}
export { noteDetails,displayNote };
