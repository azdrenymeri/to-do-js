
const noteDetails = document.createElement('div');

noteDetails.innerHTML = `
<p class="text-monospace" >Details</p>
<div class="card">
  <div class="card-header" >
  <input type="text" class="form-control" id="note-title"  placeholder="Title">

  </div>
  <div class="card-body">
  <div >
  <input type="text" class="form-control" id="note-description"  placeholder="Description">
  </div>
  <hr/>
    <div class="row">
      <div class="col-sm-6">
      <div class="form-group">
        <label for="due-date-details">Due Date</label>
        <input type="date" class="form-control" id="due-date-details">
      </div>
       </div>
      <div class="col-sm-6">
      <div class="form-group">
        <label for="note-priority-details">Priority</label>
        <select class="form-control" id="note-priority-details">
          <option value="LOW">Low</option>
            <option value="MEDUM">Medium</option>
            <option value="HIGH">High</option>
            <option value="URGENT">Urgent</option>
          </select>
      </div>
      </div>
    </div>
    <br/>
    <div class="row">
    <hr/>
      <div class="col-sm-6">
        <a href="#" class="btn btn-danger" id="delete-note-btn">Delete Note</a>
       </div>
      <div class="col-sm-6">
        <a href="#" class="btn btn-warning" id="update-note-btn">Update Note</a>
      </div>
    </div>

  </div>
</div>

`;

const displayNote = (note) => {
  document.getElementById('note-title').value = note.title;
  document.getElementById('note-description').value = note.description;

  //TODO you might need to change this thwo lines if we add different components
  document.getElementById('due-date-details').value = note.dueDate;
  document.getElementById('note-priority-details').value = note.priority;

  // TODO: Bassed on the priority of the note set the color :default primary, warning or danger
}
export { noteDetails,displayNote };
