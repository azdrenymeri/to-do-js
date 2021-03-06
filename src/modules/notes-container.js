const notesList = document.createElement("div");
notesList.innerHTML = `
<div class="row">
              <div class= "col-md-8">
              <p class="text-monospace"> To-Do's </p>
              </div>
              <div class= "col-md-3">
              <button id= 'addNote' data-toggle="modal" data-target="#exampleModal2" class="btn btn-info btn-sm" aria-pressed="true">Add</button>
              </div>
          </div>
          </div>
          <ul class="list-group noselect ul-item" id="notes-list" >
          <!-- <li class="list-group-item note-item" data-key="0">Sample Note</li> -->
        </ul>
        <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Create To-Do</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <!-- title -->
          <div class="form-group">
            <label for="note-name">Title</label>
            <input type="text" class="form-control" id="note-name"  placeholder="Type your title">
          </div>
          <!-- description -->
          <div class="form-group">
            <label for="description-area">Description</label>
            <textarea class="form-control" id="description-area" rows="3"></textarea>
          </div>
          <!-- due date -->
          <div class="form-group">
            <label for="due-date">Due Date</label>
            <input type="date" class="form-control" id="due-date" >
          </div>

          <!-- priority -->
          <div class="form-group">
            <label for="note-priority">Priority</label>
            <select class="form-control" id="note-priority">
              <option value="LOW">Low</option>
                <option value="MEDUM">Medium</option>
                <option value="HIGH">High</option>
                <option value="URGENT">Urgent</option>
              </select>
          </div>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button id="saveNote" type="button" class="btn btn-primary" data-dismiss="modal">Create To-Do</button>
        </div>
      </div>
    </div>
  </div>
`;

const addNote = name => {
  const noteList = document.getElementById("notes-list");
  const countNodes = noteList.childElementCount;
  const newNoteItem = document.createElement("li");

  newNoteItem.classList.add("list-group-item", "note-item");
  newNoteItem.setAttribute("data-key", countNodes);
  newNoteItem.innerText = name;
  noteList.appendChild(newNoteItem);
};

const renderNotes = project => {
  const noteList = document.getElementById("notes-list");
  noteList.innerHTML = "";

  for (const note in project.notes) {
    const countNodes = noteList.childElementCount;
    const newNoteItem = document.createElement("li");
    newNoteItem.classList.add("list-group-item", "note-item");
    newNoteItem.setAttribute("data-key", countNodes);
    newNoteItem.innerText = project.notes[note].title;
    noteList.appendChild(newNoteItem);
  }
};

const getActiveNoteIndex = () => {
  const index = document
    .getElementById("notes-list")
    .getElementsByClassName("active")[0]
    .getAttribute("data-key");
  return new Number(index);
};

const setActiveNote = (index = 0) => {
  const allNotes = document.getElementById("notes-list");
  for (let note of allNotes.children) {
    note.classList.remove("active");
  }
  allNotes.children[index].classList.add("active");
};

export { notesList, addNote, renderNotes, getActiveNoteIndex, setActiveNote };
