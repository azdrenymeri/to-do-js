
const notesList = document.createElement("div");
notesList.innerHTML = `
<div class="row">
              <div class= "col-md-8">
                  <p>Notes Container</p> 
              </div>
              <div class= "col-md-3"> 
              <button id= 'addNote' data-toggle="modal" data-target="#exampleModal" class="btn btn-secondary btn-sm active" role="button" aria-pressed="true">Add</button>
              </div>
  
          </div>
<ul class="list-group">
<li class="list-group-item active">Cras justo odio</li>
<li class="list-group-item">Dapibus ac facilisis in</li>
<li class="list-group-item">Morbi leo risus</li>
<li class="list-group-item">Porta ac consectetur ac</li>
<li class="list-group-item">Vestibulum at eros</li>
`;

export { notesList };
