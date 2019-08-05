
const notesList = document.createElement("div");
notesList.innerHTML = `
<div class="row">
              <div class= "col-md-8">
                  <p>Notes Container</p>
              </div>
              <div class= "col-md-3">
              <button id= 'addNote' data-toggle="modal" data-target="#exampleModal2" class="btn btn-secondary btn-sm active" role="button" aria-pressed="true">Add</button>
              </div>
          </div>
          </div>
          <ul class="list-group noselect" id="notes-list" >
          <li class="list-group-item note-item" data-key="0"><div class="n-item">Cras justo odio</div></li>
          <li class="list-group-item note-item" data-key="1"><div class="n-item">Cras justo odio</div></li>
          <li class="list-group-item active note-item" data-key="2"><div class="n-item">Cras justo odio</div></li>
          <li class="list-group-item note-item" data-key="3"><div class="n-item">Cras justo odio</div></li>
          <li class="list-group-item note-item" data-key="4"><div class="n-item">Cras justo odio</div></li>
        </ul>

        <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Note title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <!-- title -->
          <div class="form-group">
            <label for="note-name">Note</label>
            <input type="text" class="form-control" id="note-name"  placeholder="Type your note">
          </div>
          <!-- description -->
          <div class="form-group">
            <label for="description-area">Description</label>
            <textarea class="form-control" id="description-area" rows="3"></textarea>
          </div>
          <!-- due date -->
          <div class="form-group">
            <label for="dueDate">Due Date</label>
            <input type="date" class="form-control" id="dueDate" >
          </div>

          <!-- priority -->
          <div class="form-group">
            <label for="exampleFormControlSelect1">Priority</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option value="LOW">Low</option>
                <option value="MEDUM">Medium</option>
                <option value="HIGH">High</option>
                <option value="URGENT">Urgent</option>
              </select>
          </div>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button id="saveNote" type="button" class="btn btn-primary" data-dismiss="modal">Create Note</button>
        </div>
      </div>
    </div>
  </div>
`;

// both note and project need to be connected to their objects?
const createNote = (name) => {
    const noteList = document.getElementById("notes-list");
    const countNodes = noteList.childElementCount;
    const newNoteItem = document.createElement("li");

    newNoteItem.classList.add("list-group-item");
    newNoteItem.setAttribute("data-key", countNodes);
    newNoteItem.innerText = name;
    noteList.appendChild(newNoteItem);
  };

  export { notesList, createNote };
