
const noteDetails = document.createElement('div');

noteDetails.innerHTML = `
<div id="hidden" >
<p class="text-monospace" >Details</p>
<div class="card">
  <div class="card-header" >
  <label  id="note-title"  placeholder="Title">

  </div>
  <div class="card-body">
  <div >
  <label  id="note-description"  placeholder="Description">
  </div>
  <hr/>
    <div class="row">
      <div class="col-sm-6">
      <div class="form-group">
        <label for="due-date-details">Due Date</label>
        <br/>
        <label id="due-date-details">
      </div>
       </div>
      <div class="col-sm-6">
      <div class="form-group">
        <label for="note-priority-details">Priority:</label>
        <br/>
        <label id="note-priority-details">
          
      </div>
      </div>
    </div>
    <br/>
    <div class="row">
    <hr/>
      <div class="col-sm-6">
        <a href="#" class="btn btn-danger" id="delete-note-btn">Delete To-Do</a>
       </div>
      <div class="col-sm-6">
        <a href="#" class="btn btn-warning" data-toggle="modal" id="noteModal" data-target="#updateModal">Update To-Do</a>
      </div>
    </div>

  </div>
</div>
</div>
<div class="modal fade" id="updateModal" tabindex="-1" role="dialog" aria-labelledby="updateModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="updateModal">Update To-Do</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <!-- title -->
          <div class="form-group">
            <label for="note-name">Note</label>
            <input type="text" class="form-control" id="note-title-update"  placeholder="Type your note">
          </div>
          <!-- description -->
          <div class="form-group">
            <label for="description-area">Description</label>
            <textarea class="form-control" id="note-description-update" rows="3"></textarea>
          </div>
          <!-- due date -->
          <div class="form-group">
            <label for="due-date">Due Date</label>
            <input type="date" class="form-control" id="due-date-update" >
          </div>

          <!-- priority -->
          <div class="form-group">
            <label for="note-priority">Priority</label>
            <select class="form-control" id="note-priority-update">
              <option value="LOW">Low</option>
                <option value="MEDUM">Medium</option>
                <option value="HIGH">High</option>
                <option value="URGENT">Urgent</option>
              </select>
          </div>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button id="saveNoteUpdate" type="button" class="btn btn-primary" data-dismiss="modal">Update To-Do</button>
        </div>
      </div>
    </div>
  </div>
`;

const displayNoteDetails = (note) => {
  document.getElementById('note-title').innerHTML= note.title;
  document.getElementById('note-description').innerHTML = note.description;

  //TODO you might need to change this thwo lines if we add different components
  document.getElementById('due-date-details').innerHTML = note.dueDate;
  document.getElementById('note-priority-details').innerHTML = note.priority;

  // TODO: Bassed on the priority of the note set the color :default primary, warning or danger
}


export { noteDetails,displayNoteDetails };
